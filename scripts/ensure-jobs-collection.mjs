#!/usr/bin/env node
/**
 * Create / recreate the Wix CMS `Jobs` collection (idempotent) with fields
 * required by the jobs-page Open roles board, and seed sample roles if empty.
 *
 * Usage (from Workofo/, after `npx wix login`):
 *   node scripts/ensure-jobs-collection.mjs
 */
import { readFileSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SITE_ID =
  process.env.SITE_ID || JSON.parse(readFileSync(join(ROOT, 'wix.config.json'), 'utf8')).siteId;

const JOBS = 'Jobs';
const PERMS = { insert: 'ADMIN', update: 'ADMIN', remove: 'ADMIN', read: 'ANYONE' };

const FIELDS = [
  { key: 'title', displayName: 'Title', type: 'TEXT' },
  { key: 'slug', displayName: 'Slug', type: 'TEXT' },
  { key: 'location', displayName: 'Location', type: 'TEXT' },
  { key: 'department', displayName: 'Department / Team', type: 'TEXT' },
  { key: 'employmentType', displayName: 'Type', type: 'TEXT' },
  { key: 'summary', displayName: 'Summary', type: 'TEXT' },
  { key: 'description', displayName: 'Description', type: 'RICH_TEXT' },
  { key: 'applyUrl', displayName: 'Apply URL', type: 'TEXT' },
  { key: 'applyEmail', displayName: 'Apply email', type: 'TEXT' },
  { key: 'sortOrder', displayName: 'Sort order', type: 'NUMBER' },
  { key: 'published', displayName: 'Published', type: 'BOOLEAN' },
  { key: 'language', displayName: 'Language', type: 'TEXT' },
];

function mintToken() {
  if (process.env.TOKEN) return process.env.TOKEN.trim();
  console.log('Minting site token via Wix CLI…');
  return execSync(`npx @wix/cli@latest token --site ${SITE_ID}`, {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  }).trim();
}

const TOKEN = mintToken();

async function wix(method, path, body) {
  const res = await fetch(`https://www.wixapis.com${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      'wix-site-id': SITE_ID,
      ...(body ? { 'Content-Type': 'application/json' } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  let json;
  try {
    json = text ? JSON.parse(text) : {};
  } catch {
    json = { raw: text };
  }
  if (!res.ok) {
    const err = new Error(`${method} ${path} → ${res.status}: ${text.slice(0, 1000)}`);
    err.status = res.status;
    throw err;
  }
  return json;
}

function fieldKeys(collection) {
  return new Set((collection?.fields || []).map((f) => f.key).filter((k) => !k.startsWith('_')));
}

let existing;
try {
  existing = await wix('GET', `/wix-data/v2/collections/${JOBS}`);
} catch (e) {
  if (e.status !== 404) throw e;
  existing = null;
}

const needed = FIELDS.map((f) => f.key);
const have = existing ? fieldKeys(existing.collection) : new Set();
const missing = needed.filter((k) => !have.has(k));

if (!existing) {
  console.log(`Creating ${JOBS}…`);
  await wix('POST', '/wix-data/v2/collections', {
    collection: { id: JOBS, displayName: 'Jobs', fields: FIELDS, permissions: PERMS },
  });
} else if (missing.length) {
  console.log(`Recreating ${JOBS} to add fields: ${missing.join(', ')}`);
  // Backup items
  const q = await wix('POST', '/wix-data/v2/items/query', {
    dataCollectionId: JOBS,
    query: { paging: { limit: 200 } },
  });
  const backup = (q.dataItems || []).map((d) => d.data);
  await wix('DELETE', `/wix-data/v2/collections/${JOBS}`);
  await wix('POST', '/wix-data/v2/collections', {
    collection: { id: JOBS, displayName: 'Jobs', fields: FIELDS, permissions: PERMS },
  });
  if (backup.length) {
    await wix('POST', '/wix-data/v2/bulk/items/insert', {
      dataCollectionId: JOBS,
      dataItems: backup.map((data) => ({ data })),
    });
    console.log(`Restored ${backup.length} item(s).`);
  }
} else {
  console.log(`${JOBS} already has all required fields.`);
}

const q = await wix('POST', '/wix-data/v2/items/query', {
  dataCollectionId: JOBS,
  query: { paging: { limit: 5 } },
});
const count = (q.dataItems || []).length;
console.log(`${JOBS} currently has ${count} item(s).`);

if (count === 0) {
  console.log('Seeding two sample published jobs (EN)…');
  await wix('POST', '/wix-data/v2/bulk/items/insert', {
    dataCollectionId: JOBS,
    dataItems: [
      {
        data: {
          title: 'Lead Front End / Full Stack Developer',
          slug: 'lead-front-end-full-stack-developer',
          location: 'Vilnius, Lithuania',
          department: 'Engineering',
          employmentType: 'Hybrid',
          summary:
            'Build the React, Next.js and React Native apps that managers and employees use to plan and view their schedules.',
          description:
            '<p>Build the React, Next.js and React Native apps that managers and employees use to plan and view their schedules.</p>',
          applyUrl: '/get-in-touch',
          applyEmail: '',
          sortOrder: 1,
          published: true,
          language: 'en',
        },
      },
      {
        data: {
          title: 'Java Engineer',
          slug: 'java-engineer',
          location: 'Vilnius, Lithuania',
          department: 'Engineering',
          employmentType: 'Hybrid',
          summary: 'Build integrations and scalable backend features for AI-driven workforce optimization.',
          description:
            '<p>Build integrations and scalable backend features for AI-driven workforce optimization.</p>',
          applyUrl: '/get-in-touch',
          applyEmail: '',
          sortOrder: 2,
          published: true,
          language: 'en',
        },
      },
    ],
  });
  console.log('Sample jobs inserted.');
}

console.log(`Done. Add or edit jobs in Wix dashboard → CMS → ${JOBS}.`);
console.log('Fields: title, slug, location, department, employmentType, summary, description, applyUrl, applyEmail, sortOrder, published, language');
