/**
 * Contact Centre queue graphic - adapted from ContactCentre.dc.html.
 * Markup/CSS/motion from the artboard; manual tabs only (no auto-advance); US spelling labor.
 */

import { useEffect, useRef } from 'react';

const ARTBOARD_HTML = `<div class="pp-panel wait" id="uc" style="aspect-ratio:2.4 / 1" aria-label="Contact centre examples: demand compared with scheduled agents for one queue, and how Workofo adjusts the schedule.">
<span class="pp-blob pp-b1"></span><span class="pp-blob pp-b2"></span><span class="pp-blob pp-b3"></span><span class="pp-blob pp-b4"></span><span class="pp-grain"></span>
<div class="pp-tabs" role="tablist" aria-label="Choose a queue"><button type="button" class="tab" data-k="0" aria-pressed="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 14v-2a8 8 0 0116 0v2"></path><rect x="3" y="14" width="4" height="6" rx="1.5"></rect><rect x="17" y="14" width="4" height="6" rx="1.5"></rect></svg>Inbound voice</button><button type="button" class="tab" data-k="1" aria-pressed="false"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 6h16v10H9l-5 4z"></path><path d="M8 10h8M8 13h5"></path></svg>Chat &amp; messaging</button><button type="button" class="tab" data-k="2" aria-pressed="false"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="M3 7l9 6 9-6"></path></svg>Email &amp; back office</button><button type="button" class="tab" data-k="3" aria-pressed="false"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"></path><path d="M15 3h6v6M21 3l-7 7"></path></svg>Outbound &amp; sales</button></div>
<div aria-live="polite">
<div class="uc-scene" data-k="0"><div class="pp-scene">
<div class="pp-ui pp-c1" style="left:5%;width:52%">
<div class="pp-h" style="padding-bottom:4px"><span style="display:inline-flex;align-items:center;gap:8px">Workload coverage<span style="display:inline-flex;align-items:center;min-height:20px;padding:0 7px;border-radius:5px;background:#F2F2EE;color:#4A4F57;font:600 10.5px/1 Inter,system-ui,sans-serif">Inbound voice · Example week</span></span></div>
<svg viewBox="0 0 600 236" style="width:100%;height:auto;display:block;padding:0 6px 8px;box-sizing:border-box" aria-hidden="true"><g font-family="Inter,system-ui,sans-serif" font-size="10.5" fill="#9A9FA8"><line x1="36" x2="580" y1="206.0" y2="206.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="206.0" y2="206.0" stroke="#2B2F36"></line><text x="28" y="209.5" text-anchor="end" fill="#4A4F57">0.0</text><line x1="36" x2="580" y1="142.0" y2="142.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="142.0" y2="142.0" stroke="#2B2F36"></line><text x="28" y="145.5" text-anchor="end" fill="#4A4F57">40.0</text><line x1="36" x2="580" y1="78.0" y2="78.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="78.0" y2="78.0" stroke="#2B2F36"></line><text x="28" y="81.5" text-anchor="end" fill="#4A4F57">80.0</text><line x1="36" x2="580" y1="14.0" y2="14.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="14.0" y2="14.0" stroke="#2B2F36"></line><text x="28" y="17.5" text-anchor="end" fill="#4A4F57">120.0</text><line x1="36" x2="36" y1="14" y2="206" stroke="#2B2F36"></line><line x1="36" x2="580" y1="206" y2="206" stroke="#2B2F36"></line><text x="60.0" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Mon</text><text x="143.3" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Tue</text><text x="226.7" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Wed</text><text x="310.0" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Thu</text><text x="393.3" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Fri</text><text x="476.7" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Sat</text><text x="560.0" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Sun</text></g>
<path class="pp-fadein" d="M60.0 28.4C73.9 33.2 115.6 50.8 143.3 57.2C171.1 63.6 198.9 64.7 226.7 66.8C254.4 68.9 282.2 68.4 310.0 70.0C337.8 71.6 365.6 66.3 393.3 76.4C421.1 86.5 448.9 118.5 476.7 130.8C504.4 143.1 546.1 146.8 560.0 150.0L560.0 206L60.0 206Z" fill="#F8DADF"></path>
<path d="M60.0 71.6C73.9 71.6 115.6 71.6 143.3 71.6C171.1 71.6 198.9 71.6 226.7 71.6C254.4 71.6 282.2 71.1 310.0 71.6C337.8 72.1 365.6 65.7 393.3 74.8C421.1 83.9 448.9 113.2 476.7 126.0C504.4 138.8 546.1 147.3 560.0 151.6" fill="none" stroke="#E8705F" stroke-width="2.1" stroke-linejoin="round" stroke-dasharray="7 5" class="pp-fadein"></path>
<path class="pp-drawl" d="M60.0 39.6C73.9 44.4 115.6 62.0 143.3 68.4C171.1 74.8 198.9 75.9 226.7 78.0C254.4 80.1 282.2 79.6 310.0 81.2C337.8 82.8 365.6 77.5 393.3 87.6C421.1 97.7 448.9 129.7 476.7 142.0C504.4 154.3 546.1 158.0 560.0 161.2" pathLength="1" fill="none" stroke="#2A8AA8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
<path class="pp-drawl pp-late" d="M60.0 28.4C73.9 33.2 115.6 50.8 143.3 57.2C171.1 63.6 198.9 64.7 226.7 66.8C254.4 68.9 282.2 68.4 310.0 70.0C337.8 71.6 365.6 66.3 393.3 76.4C421.1 86.5 448.9 118.5 476.7 130.8C504.4 143.1 546.1 146.8 560.0 150.0" pathLength="1" fill="none" stroke="#D7263D" stroke-width="2.3" stroke-linejoin="round" stroke-linecap="round"></path>
<g class="pp-fadein pp-note"><line x1="60.0" x2="60.0" y1="71.6" y2="39.6" stroke="#4A4F57" stroke-width="1.6" stroke-dasharray="3 3"></line><line x1="60.0" x2="60.0" y1="77.6" y2="152.4" stroke="#4A4F57" stroke-width="1" opacity=".35"></line><circle cx="60.0" cy="39.6" r="4.5" fill="#2A8AA8" stroke="#FFFFFF" stroke-width="2"></circle><circle cx="60.0" cy="71.6" r="4.5" fill="#E8705F" stroke="#FFFFFF" stroke-width="2"></circle><rect x="40.0" y="152.4" width="126.2" height="22" rx="11" fill="#111111"></rect><text x="103.1" y="167.4" text-anchor="middle" font-family="Inter,system-ui,sans-serif" font-size="11" font-weight="600" fill="#FFFFFF">Monday: 20 h short</text></g>
</svg>
<div style="display:flex;justify-content:center;gap:16px;padding:0 0 14px;font:400 11px/1 Inter,system-ui,sans-serif;color:#4A4F57"><span style="display:inline-flex;align-items:center;gap:6px"><i style="width:16px;height:2.5px;background:#D7263D;display:inline-block"></i>Optimized Actual</span><span style="display:inline-flex;align-items:center;gap:6px"><i style="width:16px;height:0;border-top:2.5px dashed #E8705F;display:inline-block"></i>Actual</span><span style="display:inline-flex;align-items:center;gap:6px"><i style="width:16px;height:2.5px;background:#2A8AA8;display:inline-block"></i>Need</span></div>
</div>
<div class="pp-ui pp-c2 pp-glass2" style="left:58.5%;width:36.5%">
<div class="pp-h" style="color:#FFFFFF"><span>Recommendation</span><span class="pp-rec-suggested"><i></i>Suggested by Workofo</span></div>
<div style="padding:0 16px 16px;display:flex;flex-direction:column;gap:10px;flex:1">
<div class="pp-rec pp-rec--data"><span class="pp-rec__label">Data shows</span><span class="pp-rec__body">Calls peak on Mondays. The roster is the same every weekday.</span></div>
<div class="pp-open"><div style="min-height:0;overflow:hidden;display:flex;flex-direction:column;gap:10px">
<div class="pp-rec pp-rec--fix"><span class="pp-rec__label">Workofo fixes</span><span class="pp-rec__body">Moves agent hours to Monday, trims Thursday and Friday.</span></div>
<div style="display:flex;justify-content:flex-end;margin-top:auto"><span class="pp-rec-ready"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7ED39A" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"></path></svg>Ready to apply in one click</span></div>
</div></div>
</div>
</div>
</div></div>
<div class="uc-scene" data-k="1" hidden><div class="pp-scene">
<div class="pp-ui pp-c1" style="left:5%;width:52%">
<div class="pp-h" style="padding-bottom:4px"><span style="display:inline-flex;align-items:center;gap:8px">Workload coverage<span style="display:inline-flex;align-items:center;min-height:20px;padding:0 7px;border-radius:5px;background:#F2F2EE;color:#4A4F57;font:600 10.5px/1 Inter,system-ui,sans-serif">Chat &amp; messaging · Example week</span></span></div>
<svg viewBox="0 0 600 236" style="width:100%;height:auto;display:block;padding:0 6px 8px;box-sizing:border-box" aria-hidden="true"><g font-family="Inter,system-ui,sans-serif" font-size="10.5" fill="#9A9FA8"><line x1="36" x2="580" y1="206.0" y2="206.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="206.0" y2="206.0" stroke="#2B2F36"></line><text x="28" y="209.5" text-anchor="end" fill="#4A4F57">0.0</text><line x1="36" x2="580" y1="142.0" y2="142.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="142.0" y2="142.0" stroke="#2B2F36"></line><text x="28" y="145.5" text-anchor="end" fill="#4A4F57">40.0</text><line x1="36" x2="580" y1="78.0" y2="78.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="78.0" y2="78.0" stroke="#2B2F36"></line><text x="28" y="81.5" text-anchor="end" fill="#4A4F57">80.0</text><line x1="36" x2="580" y1="14.0" y2="14.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="14.0" y2="14.0" stroke="#2B2F36"></line><text x="28" y="17.5" text-anchor="end" fill="#4A4F57">120.0</text><line x1="36" x2="36" y1="14" y2="206" stroke="#2B2F36"></line><line x1="36" x2="580" y1="206" y2="206" stroke="#2B2F36"></line><text x="60.0" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Mon</text><text x="143.3" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Tue</text><text x="226.7" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Wed</text><text x="310.0" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Thu</text><text x="393.3" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Fri</text><text x="476.7" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Sat</text><text x="560.0" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Sun</text></g>
<path class="pp-fadein" d="M60.0 95.6C73.9 94.5 115.6 98.8 143.3 89.2C171.1 79.6 198.9 39.1 226.7 38.0C254.4 36.9 282.2 73.7 310.0 82.8C337.8 91.9 365.6 86.0 393.3 92.4C421.1 98.8 448.9 114.8 476.7 121.2C504.4 127.6 546.1 129.2 560.0 130.8L560.0 206L60.0 206Z" fill="#F8DADF"></path>
<path d="M60.0 100.4C73.9 100.4 115.6 100.4 143.3 100.4C171.1 100.4 198.9 100.4 226.7 100.4C254.4 100.4 282.2 100.4 310.0 100.4C337.8 100.4 365.6 93.5 393.3 100.4C421.1 107.3 448.9 135.1 476.7 142.0C504.4 148.9 546.1 142.0 560.0 142.0" fill="none" stroke="#E8705F" stroke-width="2.1" stroke-linejoin="round" stroke-dasharray="7 5" class="pp-fadein"></path>
<path class="pp-drawl" d="M60.0 106.8C73.9 105.7 115.6 110.0 143.3 100.4C171.1 90.8 198.9 50.3 226.7 49.2C254.4 48.1 282.2 84.9 310.0 94.0C337.8 103.1 365.6 97.2 393.3 103.6C421.1 110.0 448.9 126.0 476.7 132.4C504.4 138.8 546.1 140.4 560.0 142.0" pathLength="1" fill="none" stroke="#2A8AA8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
<path class="pp-drawl pp-late" d="M60.0 95.6C73.9 94.5 115.6 98.8 143.3 89.2C171.1 79.6 198.9 39.1 226.7 38.0C254.4 36.9 282.2 73.7 310.0 82.8C337.8 91.9 365.6 86.0 393.3 92.4C421.1 98.8 448.9 114.8 476.7 121.2C504.4 127.6 546.1 129.2 560.0 130.8" pathLength="1" fill="none" stroke="#D7263D" stroke-width="2.3" stroke-linejoin="round" stroke-linecap="round"></path>
<g class="pp-fadein pp-note"><line x1="226.7" x2="226.7" y1="100.4" y2="49.2" stroke="#4A4F57" stroke-width="1.6" stroke-dasharray="3 3"></line><line x1="226.7" x2="226.7" y1="106.4" y2="152.4" stroke="#4A4F57" stroke-width="1" opacity=".35"></line><circle cx="226.7" cy="49.2" r="4.5" fill="#2A8AA8" stroke="#FFFFFF" stroke-width="2"></circle><circle cx="226.7" cy="100.4" r="4.5" fill="#E8705F" stroke="#FFFFFF" stroke-width="2"></circle><rect x="154.7" y="152.4" width="143.9" height="22" rx="11" fill="#111111"></rect><text x="226.7" y="167.4" text-anchor="middle" font-family="Inter,system-ui,sans-serif" font-size="11" font-weight="600" fill="#FFFFFF">Wednesday: 32 h short</text></g>
</svg>
<div style="display:flex;justify-content:center;gap:16px;padding:0 0 14px;font:400 11px/1 Inter,system-ui,sans-serif;color:#4A4F57"><span style="display:inline-flex;align-items:center;gap:6px"><i style="width:16px;height:2.5px;background:#D7263D;display:inline-block"></i>Optimized Actual</span><span style="display:inline-flex;align-items:center;gap:6px"><i style="width:16px;height:0;border-top:2.5px dashed #E8705F;display:inline-block"></i>Actual</span><span style="display:inline-flex;align-items:center;gap:6px"><i style="width:16px;height:2.5px;background:#2A8AA8;display:inline-block"></i>Need</span></div>
</div>
<div class="pp-ui pp-c2 pp-glass2" style="left:58.5%;width:36.5%">
<div class="pp-h" style="color:#FFFFFF"><span>Recommendation</span><span class="pp-rec-suggested"><i></i>Suggested by Workofo</span></div>
<div style="padding:0 16px 16px;display:flex;flex-direction:column;gap:10px;flex:1">
<div class="pp-rec pp-rec--data"><span class="pp-rec__label">Data shows</span><span class="pp-rec__body">A campaign doubles chats on Wednesday. Staffing stays flat.</span></div>
<div class="pp-open"><div style="min-height:0;overflow:hidden;display:flex;flex-direction:column;gap:10px">
<div class="pp-rec pp-rec--fix"><span class="pp-rec__label">Workofo fixes</span><span class="pp-rec__body">Adds chat-skilled agents on campaign day.</span></div>
<div style="display:flex;justify-content:flex-end;margin-top:auto"><span class="pp-rec-ready"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7ED39A" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"></path></svg>Ready to apply in one click</span></div>
</div></div>
</div>
</div>
</div></div>
<div class="uc-scene" data-k="2" hidden><div class="pp-scene">
<div class="pp-ui pp-c1" style="left:5%;width:52%">
<div class="pp-h" style="padding-bottom:4px"><span style="display:inline-flex;align-items:center;gap:8px">Workload coverage<span style="display:inline-flex;align-items:center;min-height:20px;padding:0 7px;border-radius:5px;background:#F2F2EE;color:#4A4F57;font:600 10.5px/1 Inter,system-ui,sans-serif">Email &amp; back office · Example week</span></span></div>
<svg viewBox="0 0 600 236" style="width:100%;height:auto;display:block;padding:0 6px 8px;box-sizing:border-box" aria-hidden="true"><g font-family="Inter,system-ui,sans-serif" font-size="10.5" fill="#9A9FA8"><line x1="36" x2="580" y1="206.0" y2="206.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="206.0" y2="206.0" stroke="#2B2F36"></line><text x="28" y="209.5" text-anchor="end" fill="#4A4F57">0.0</text><line x1="36" x2="580" y1="142.0" y2="142.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="142.0" y2="142.0" stroke="#2B2F36"></line><text x="28" y="145.5" text-anchor="end" fill="#4A4F57">40.0</text><line x1="36" x2="580" y1="78.0" y2="78.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="78.0" y2="78.0" stroke="#2B2F36"></line><text x="28" y="81.5" text-anchor="end" fill="#4A4F57">80.0</text><line x1="36" x2="580" y1="14.0" y2="14.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="14.0" y2="14.0" stroke="#2B2F36"></line><text x="28" y="17.5" text-anchor="end" fill="#4A4F57">120.0</text><line x1="36" x2="36" y1="14" y2="206" stroke="#2B2F36"></line><line x1="36" x2="580" y1="206" y2="206" stroke="#2B2F36"></line><text x="60.0" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Mon</text><text x="143.3" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Tue</text><text x="226.7" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Wed</text><text x="310.0" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Thu</text><text x="393.3" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Fri</text><text x="476.7" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Sat</text><text x="560.0" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Sun</text></g>
<path class="pp-fadein" d="M60.0 105.2C73.9 104.7 115.6 103.1 143.3 102.0C171.1 100.9 198.9 107.3 226.7 98.8C254.4 90.3 282.2 57.2 310.0 50.8C337.8 44.4 365.6 43.3 393.3 60.4C421.1 77.5 448.9 136.1 476.7 153.2C504.4 170.3 546.1 161.2 560.0 162.8L560.0 206L60.0 206Z" fill="#F8DADF"></path>
<path d="M60.0 103.6C73.9 103.6 115.6 103.6 143.3 103.6C171.1 103.6 198.9 103.6 226.7 103.6C254.4 103.6 282.2 103.6 310.0 103.6C337.8 103.6 365.6 92.9 393.3 103.6C421.1 114.3 448.9 156.9 476.7 167.6C504.4 178.3 546.1 167.6 560.0 167.6" fill="none" stroke="#E8705F" stroke-width="2.1" stroke-linejoin="round" stroke-dasharray="7 5" class="pp-fadein"></path>
<path class="pp-drawl" d="M60.0 116.4C73.9 115.9 115.6 114.3 143.3 113.2C171.1 112.1 198.9 118.5 226.7 110.0C254.4 101.5 282.2 68.4 310.0 62.0C337.8 55.6 365.6 54.5 393.3 71.6C421.1 88.7 448.9 147.3 476.7 164.4C504.4 181.5 546.1 172.4 560.0 174.0" pathLength="1" fill="none" stroke="#2A8AA8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
<path class="pp-drawl pp-late" d="M60.0 105.2C73.9 104.7 115.6 103.1 143.3 102.0C171.1 100.9 198.9 107.3 226.7 98.8C254.4 90.3 282.2 57.2 310.0 50.8C337.8 44.4 365.6 43.3 393.3 60.4C421.1 77.5 448.9 136.1 476.7 153.2C504.4 170.3 546.1 161.2 560.0 162.8" pathLength="1" fill="none" stroke="#D7263D" stroke-width="2.3" stroke-linejoin="round" stroke-linecap="round"></path>
<g class="pp-fadein pp-note"><line x1="310.0" x2="310.0" y1="103.6" y2="62.0" stroke="#4A4F57" stroke-width="1.6" stroke-dasharray="3 3"></line><line x1="310.0" x2="310.0" y1="109.6" y2="152.4" stroke="#4A4F57" stroke-width="1" opacity=".35"></line><circle cx="310.0" cy="62.0" r="4.5" fill="#2A8AA8" stroke="#FFFFFF" stroke-width="2"></circle><circle cx="310.0" cy="103.6" r="4.5" fill="#E8705F" stroke="#FFFFFF" stroke-width="2"></circle><rect x="241.0" y="152.4" width="138.0" height="22" rx="11" fill="#111111"></rect><text x="310.0" y="167.4" text-anchor="middle" font-family="Inter,system-ui,sans-serif" font-size="11" font-weight="600" fill="#FFFFFF">Thursday: 26 h short</text></g>
</svg>
<div style="display:flex;justify-content:center;gap:16px;padding:0 0 14px;font:400 11px/1 Inter,system-ui,sans-serif;color:#4A4F57"><span style="display:inline-flex;align-items:center;gap:6px"><i style="width:16px;height:2.5px;background:#D7263D;display:inline-block"></i>Optimized Actual</span><span style="display:inline-flex;align-items:center;gap:6px"><i style="width:16px;height:0;border-top:2.5px dashed #E8705F;display:inline-block"></i>Actual</span><span style="display:inline-flex;align-items:center;gap:6px"><i style="width:16px;height:2.5px;background:#2A8AA8;display:inline-block"></i>Need</span></div>
</div>
<div class="pp-ui pp-c2 pp-glass2" style="left:58.5%;width:36.5%">
<div class="pp-h" style="color:#FFFFFF"><span>Recommendation</span><span class="pp-rec-suggested"><i></i>Suggested by Workofo</span></div>
<div style="padding:0 16px 16px;display:flex;flex-direction:column;gap:10px;flex:1">
<div class="pp-rec pp-rec--data"><span class="pp-rec__label">Data shows</span><span class="pp-rec__body">Invoices go out Thursday. Billing emails pile up Thu-Fri.</span></div>
<div class="pp-open"><div style="min-height:0;overflow:hidden;display:flex;flex-direction:column;gap:10px">
<div class="pp-rec pp-rec--fix"><span class="pp-rec__label">Workofo fixes</span><span class="pp-rec__body">Moves back-office hours to Thursday and Friday.</span></div>
<div style="display:flex;justify-content:flex-end;margin-top:auto"><span class="pp-rec-ready"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7ED39A" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"></path></svg>Ready to apply in one click</span></div>
</div></div>
</div>
</div>
</div></div>
<div class="uc-scene" data-k="3" hidden><div class="pp-scene">
<div class="pp-ui pp-c1" style="left:5%;width:52%">
<div class="pp-h" style="padding-bottom:4px"><span style="display:inline-flex;align-items:center;gap:8px">Workload coverage<span style="display:inline-flex;align-items:center;min-height:20px;padding:0 7px;border-radius:5px;background:#F2F2EE;color:#4A4F57;font:600 10.5px/1 Inter,system-ui,sans-serif">Outbound &amp; sales · Example week</span></span></div>
<svg viewBox="0 0 600 236" style="width:100%;height:auto;display:block;padding:0 6px 8px;box-sizing:border-box" aria-hidden="true"><g font-family="Inter,system-ui,sans-serif" font-size="10.5" fill="#9A9FA8"><line x1="36" x2="580" y1="206.0" y2="206.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="206.0" y2="206.0" stroke="#2B2F36"></line><text x="28" y="209.5" text-anchor="end" fill="#4A4F57">0.0</text><line x1="36" x2="580" y1="142.0" y2="142.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="142.0" y2="142.0" stroke="#2B2F36"></line><text x="28" y="145.5" text-anchor="end" fill="#4A4F57">40.0</text><line x1="36" x2="580" y1="78.0" y2="78.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="78.0" y2="78.0" stroke="#2B2F36"></line><text x="28" y="81.5" text-anchor="end" fill="#4A4F57">80.0</text><line x1="36" x2="580" y1="14.0" y2="14.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="14.0" y2="14.0" stroke="#2B2F36"></line><text x="28" y="17.5" text-anchor="end" fill="#4A4F57">120.0</text><line x1="36" x2="36" y1="14" y2="206" stroke="#2B2F36"></line><line x1="36" x2="580" y1="206" y2="206" stroke="#2B2F36"></line><text x="60.0" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Mon</text><text x="143.3" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Tue</text><text x="226.7" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Wed</text><text x="310.0" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Thu</text><text x="393.3" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Fri</text><text x="476.7" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Sat</text><text x="560.0" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Sun</text></g>
<path class="pp-fadein" d="M60.0 102.0C73.9 101.5 115.6 99.9 143.3 98.8C171.1 97.7 198.9 96.7 226.7 95.6C254.4 94.5 282.2 94.0 310.0 92.4C337.8 90.8 365.6 89.2 393.3 86.0C421.1 82.8 448.9 59.9 476.7 73.2C504.4 86.5 546.1 150.5 560.0 166.0L560.0 206L60.0 206Z" fill="#F8DADF"></path>
<path d="M60.0 97.2C73.9 97.2 115.6 97.2 143.3 97.2C171.1 97.2 198.9 97.2 226.7 97.2C254.4 97.2 282.2 97.2 310.0 97.2C337.8 97.2 365.6 89.7 393.3 97.2C421.1 104.7 448.9 129.2 476.7 142.0C504.4 154.8 546.1 168.7 560.0 174.0" fill="none" stroke="#E8705F" stroke-width="2.1" stroke-linejoin="round" stroke-dasharray="7 5" class="pp-fadein"></path>
<path class="pp-drawl" d="M60.0 113.2C73.9 112.7 115.6 111.1 143.3 110.0C171.1 108.9 198.9 107.9 226.7 106.8C254.4 105.7 282.2 105.2 310.0 103.6C337.8 102.0 365.6 100.4 393.3 97.2C421.1 94.0 448.9 71.1 476.7 84.4C504.4 97.7 546.1 161.7 560.0 177.2" pathLength="1" fill="none" stroke="#2A8AA8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
<path class="pp-drawl pp-late" d="M60.0 102.0C73.9 101.5 115.6 99.9 143.3 98.8C171.1 97.7 198.9 96.7 226.7 95.6C254.4 94.5 282.2 94.0 310.0 92.4C337.8 90.8 365.6 89.2 393.3 86.0C421.1 82.8 448.9 59.9 476.7 73.2C504.4 86.5 546.1 150.5 560.0 166.0" pathLength="1" fill="none" stroke="#D7263D" stroke-width="2.3" stroke-linejoin="round" stroke-linecap="round"></path>
<g class="pp-fadein pp-note"><line x1="476.7" x2="476.7" y1="142.0" y2="84.4" stroke="#4A4F57" stroke-width="1.6" stroke-dasharray="3 3"></line><line x1="476.7" x2="476.7" y1="148.0" y2="152.4" stroke="#4A4F57" stroke-width="1" opacity=".35"></line><circle cx="476.7" cy="84.4" r="4.5" fill="#2A8AA8" stroke="#FFFFFF" stroke-width="2"></circle><circle cx="476.7" cy="142.0" r="4.5" fill="#E8705F" stroke="#FFFFFF" stroke-width="2"></circle><rect x="407.7" y="152.4" width="138.0" height="22" rx="11" fill="#111111"></rect><text x="476.7" y="167.4" text-anchor="middle" font-family="Inter,system-ui,sans-serif" font-size="11" font-weight="600" fill="#FFFFFF">Saturday: 36 h short</text></g>
</svg>
<div style="display:flex;justify-content:center;gap:16px;padding:0 0 14px;font:400 11px/1 Inter,system-ui,sans-serif;color:#4A4F57"><span style="display:inline-flex;align-items:center;gap:6px"><i style="width:16px;height:2.5px;background:#D7263D;display:inline-block"></i>Optimized Actual</span><span style="display:inline-flex;align-items:center;gap:6px"><i style="width:16px;height:0;border-top:2.5px dashed #E8705F;display:inline-block"></i>Actual</span><span style="display:inline-flex;align-items:center;gap:6px"><i style="width:16px;height:2.5px;background:#2A8AA8;display:inline-block"></i>Need</span></div>
</div>
<div class="pp-ui pp-c2 pp-glass2" style="left:58.5%;width:36.5%">
<div class="pp-h" style="color:#FFFFFF"><span>Recommendation</span><span class="pp-rec-suggested"><i></i>Suggested by Workofo</span></div>
<div style="padding:0 16px 16px;display:flex;flex-direction:column;gap:10px;flex:1">
<div class="pp-rec pp-rec--data"><span class="pp-rec__label">Data shows</span><span class="pp-rec__body">Customers answer most on Saturdays. The team is staffed for weekdays.</span></div>
<div class="pp-open"><div style="min-height:0;overflow:hidden;display:flex;flex-direction:column;gap:10px">
<div class="pp-rec pp-rec--fix"><span class="pp-rec__label">Workofo fixes</span><span class="pp-rec__body">Moves outbound hours from early week to Saturday.</span></div>
<div style="display:flex;justify-content:flex-end;margin-top:auto"><span class="pp-rec-ready"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7ED39A" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"></path></svg>Ready to apply in one click</span></div>
</div></div>
</div>
</div>
</div></div>
</div>
<div class="pp-nav">
<div style="display:flex;align-items:center;gap:10px">
<button type="button" class="navbtn" data-nav="-1" aria-label="Previous example"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"></path></svg></button>
<button type="button" class="navbtn" data-nav="1" aria-label="Next example"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></button>
</div>
</div>
</div>`;

export default function ContactCentrePanel() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    host.innerHTML = ARTBOARD_HTML;
    const root = host.querySelector('#uc') as HTMLElement | null;
    if (!root) return;

    const tabs = Array.prototype.slice.call(root.querySelectorAll('.tab[data-k]')) as HTMLElement[];
    const label = root.querySelector('#ucl') as HTMLElement | null;
    let cur = 0;

    const show = (k: number) => {
      cur = (k + 4) % 4;
      root.querySelectorAll('.uc-scene').forEach((s) => {
        const on = Number(s.getAttribute('data-k')) === cur;
        if (on) {
          const fresh = s.cloneNode(true) as HTMLElement;
          fresh.hidden = false;
          s.parentNode?.replaceChild(fresh, s);
        } else {
          (s as HTMLElement).hidden = true;
        }
      });
      tabs.forEach((t, i) => {
        t.setAttribute('aria-pressed', i === cur ? 'true' : 'false');
        t.setAttribute('tabindex', i === cur ? '0' : '-1');
        const old = t.querySelector('.pp-prog');
        if (old) old.remove();
      });
      if (label) label.textContent = `${cur + 1} / 4`;
    };

    const onTabClick = tabs.map((t, i) => {
      const fn = () => show(i);
      t.addEventListener('click', fn);
      return fn;
    });

    const onTabKey = tabs.map((t) => {
      const fn = (e: KeyboardEvent) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
          e.preventDefault();
          show(cur + (e.key === 'ArrowRight' ? 1 : -1));
          tabs[cur]?.focus();
        }
      };
      t.addEventListener('keydown', fn);
      return fn;
    });

    const navBtns = Array.prototype.slice.call(root.querySelectorAll('[data-nav]')) as HTMLElement[];
    const onNav = navBtns.map((b) => {
      const fn = () => show(cur + Number(b.getAttribute('data-nav')));
      b.addEventListener('click', fn);
      return fn;
    });

    const start = () => {
      root.classList.remove('wait');
      show(0);
    };

    let io: IntersectionObserver | null = null;
    if (!('IntersectionObserver' in window)) {
      start();
    } else {
      io = new IntersectionObserver(
        (es) => {
          es.forEach((e) => {
            if (e.isIntersecting) {
              start();
              io?.disconnect();
            }
          });
        },
        { threshold: 0.35 },
      );
      io.observe(root);
    }

    return () => {
      io?.disconnect();
      tabs.forEach((t, i) => {
        t.removeEventListener('click', onTabClick[i]);
        t.removeEventListener('keydown', onTabKey[i]);
      });
      navBtns.forEach((b, i) => b.removeEventListener('click', onNav[i]));
      host.innerHTML = '';
    };
  }, []);

  return <div className="retail-teams-artboard" ref={hostRef} />;
}
