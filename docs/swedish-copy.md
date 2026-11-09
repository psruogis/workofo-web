# Swedish website copy

The `/se/` pages reuse the existing English page components, styles and assets.
Swedish HTML uses `lang="sv"` and `Content-Language: sv`.

`src/lib/swedish/pages.json` maps copy to the ten pages supplied in
`Workofo startsida.13.html`: home, jobs, contact, demo, about, retail,
contact centre, aviation, restaurants and logistics. Text is fitted into the
existing sections; additional mockup sections are not added to the live layout.

`common.json` contains shared UI text and supplementary translations for
product, blog, calculator, job detail pages and the seven existing blog posts.
Rich-content translation preserves node IDs, links, formatting and images.

Astro responses use source-location text edits. React hydration boundaries use
the same copy on the server and client, including state changes. No CSS or
image files were changed. The long Swedish homepage word includes a soft
hyphen for narrow screens.

Swedish privacy and cookie pages are explicitly labelled temporary lorem
ipsum placeholders, as requested. The existing compensation wording remains
conditional, pending confirmation.

Validation: production build passed; all 15 Swedish top-level routes returned
HTTP 200 with Swedish headings. The visible server-rendered English content
matched the previous live content on all 13 existing page types. Browser
checks covered hydration, a demo-form selection and mobile homepage wrapping.

## Swedish public URLs

`src/lib/swedish/paths.ts` owns public Swedish slugs. CMS keys remain English;
middleware rewrites Swedish requests internally and permanently redirects old
`/se/home`, `/se/product`, `/se/blog`, and other English-slug URLs. Navigation,
footer, language alternatives, article links and React links use the same map.
Examples: `/se/startsida`, `/se/produkt`, `/se/blogg`, `/se/boka-demo`,
`/se/branscher/kontaktcenter`. The seven existing blog posts and two job detail
pages have individual Swedish slugs. Add a mapping when publishing new content.

The Product and Blog archive outer surfaces explicitly span the viewport,
including above 1440px; their inner content retains the existing 1440px grid.
Checked at desktop and mobile widths with no horizontal overflow. Routing
checks covered 25 Swedish pages and permanent redirects with query strings.
