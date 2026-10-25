/**
 * Retail One platform graphic - faithful extract of workofo-retail-teams-v4.html.
 * Markup/CSS/motion pasted from the artboard; manual tabs only (no auto-advance); US spelling fulfillment only.
 */

import { useEffect, useRef } from 'react';

const ARTBOARD_HTML = `<div class="pp-panel wait" id="uc" style="aspect-ratio:2.4 / 1" aria-label="Retail examples: demand compared with scheduled staff for one team, and how Workofo adjusts the schedule.">
<span class="pp-blob pp-b1"></span><span class="pp-blob pp-b2"></span><span class="pp-blob pp-b3"></span><span class="pp-blob pp-b4"></span><span class="pp-grain"></span>
<div class="pp-tabs" role="tablist" aria-label="Choose a retail team"><button type="button" class="tab" data-k="0" aria-pressed="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 9l1.5-5h15L21 9v1a3 3 0 01-6 0 3 3 0 01-6 0 3 3 0 01-6 0V9z"></path><path d="M5 13v7h14v-7"></path></svg>Store floor</button><button type="button" class="tab" data-k="1" aria-pressed="false"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="3" width="16" height="6" rx="1"></rect><path d="M6 9v11h12V9"></path><path d="M9 14h6"></path></svg>Checkout &amp; service</button><button type="button" class="tab" data-k="2" aria-pressed="false"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 7l9-4 9 4v10l-9 4-9-4z"></path><path d="M3 7l9 4 9-4"></path><path d="M12 11v10"></path></svg>Replenishment</button><button type="button" class="tab" data-k="3" aria-pressed="false"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 6h12v10H2z"></path><path d="M14 9h4l4 4v3h-8"></path><circle cx="7" cy="18" r="2"></circle><circle cx="18" cy="18" r="2"></circle></svg>Online fulfillment</button></div>
<div aria-live="polite">
<div class="uc-scene" data-k="0">
<div class="pp-scene">
<div class="pp-ui pp-c1" style="left:5%;width:52%">
<div class="pp-h" style="padding-bottom:4px"><span style="display:inline-flex;align-items:center;gap:8px">Workload coverage<span style="display:inline-flex;align-items:center;min-height:20px;padding:0 7px;border-radius:5px;background:#F2F2EE;color:#4A4F57;font:600 10.5px/1 Inter,system-ui,sans-serif">Store floor · Example week</span></span></div>
<svg viewBox="0 0 600 236" style="width:100%;height:auto;display:block;padding:0 6px 8px;box-sizing:border-box" aria-hidden="true"><g font-family="Inter,system-ui,sans-serif" font-size="10.5" fill="#9A9FA8"><line x1="36" x2="580" y1="206.0" y2="206.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="206.0" y2="206.0" stroke="#2B2F36"></line><text x="28" y="209.5" text-anchor="end" fill="#4A4F57">0.0</text><line x1="36" x2="580" y1="142.0" y2="142.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="142.0" y2="142.0" stroke="#2B2F36"></line><text x="28" y="145.5" text-anchor="end" fill="#4A4F57">40.0</text><line x1="36" x2="580" y1="78.0" y2="78.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="78.0" y2="78.0" stroke="#2B2F36"></line><text x="28" y="81.5" text-anchor="end" fill="#4A4F57">80.0</text><line x1="36" x2="580" y1="14.0" y2="14.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="14.0" y2="14.0" stroke="#2B2F36"></line><text x="28" y="17.5" text-anchor="end" fill="#4A4F57">120.0</text><line x1="36" x2="36" y1="14" y2="206" stroke="#2B2F36"></line><line x1="36" x2="580" y1="206" y2="206" stroke="#2B2F36"></line><text x="60.0" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Mon</text><text x="143.3" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Tue</text><text x="226.7" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Wed</text><text x="310.0" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Thu</text><text x="393.3" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Fri</text><text x="476.7" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Sat</text><text x="560.0" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Sun</text></g>
<path class="pp-fadein" d="M60.0 95.6C73.9 96.7 115.6 102.5 143.3 102.0C171.1 101.5 198.9 95.6 226.7 92.4C254.4 89.2 282.2 88.7 310.0 82.8C337.8 76.9 365.6 67.3 393.3 57.2C421.1 47.1 448.9 18.8 476.7 22.0C504.4 25.2 546.1 67.3 560.0 76.4L560.0 206L60.0 206Z" fill="#F8DADF"></path>
<path d="M60.0 78.0C73.9 78.0 115.6 78.0 143.3 78.0C171.1 78.0 198.9 78.0 226.7 78.0C254.4 78.0 282.2 78.0 310.0 78.0C337.8 78.0 365.6 78.0 393.3 78.0C421.1 78.0 448.9 78.0 476.7 78.0C504.4 78.0 546.1 78.0 560.0 78.0" fill="none" stroke="#E8705F" stroke-width="2.1" stroke-linejoin="round" stroke-dasharray="7 5" class="pp-fadein"></path>
<path class="pp-drawl" d="M60.0 106.8C73.9 107.9 115.6 113.7 143.3 113.2C171.1 112.7 198.9 106.8 226.7 103.6C254.4 100.4 282.2 99.9 310.0 94.0C337.8 88.1 365.6 78.5 393.3 68.4C421.1 58.3 448.9 30.0 476.7 33.2C504.4 36.4 546.1 78.5 560.0 87.6" pathLength="1" fill="none" stroke="#2A8AA8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
<path class="pp-drawl pp-late" d="M60.0 95.6C73.9 96.7 115.6 102.5 143.3 102.0C171.1 101.5 198.9 95.6 226.7 92.4C254.4 89.2 282.2 88.7 310.0 82.8C337.8 76.9 365.6 67.3 393.3 57.2C421.1 47.1 448.9 18.8 476.7 22.0C504.4 25.2 546.1 67.3 560.0 76.4" pathLength="1" fill="none" stroke="#D7263D" stroke-width="2.3" stroke-linejoin="round" stroke-linecap="round"></path>
<g class="pp-fadein pp-note"><line x1="476.7" x2="476.7" y1="78.0" y2="33.2" stroke="#4A4F57" stroke-width="1.6" stroke-dasharray="3 3"></line><line x1="476.7" x2="476.7" y1="84.0" y2="152.4" stroke="#4A4F57" stroke-width="1" opacity=".35"></line><circle cx="476.7" cy="33.2" r="4.5" fill="#2A8AA8" stroke="#FFFFFF" stroke-width="2"></circle><circle cx="476.7" cy="78.0" r="4.5" fill="#E8705F" stroke="#FFFFFF" stroke-width="2"></circle><rect x="407.7" y="152.4" width="138.0" height="22" rx="11" fill="#111111"></rect><text x="476.7" y="167.4" text-anchor="middle" font-family="Inter,system-ui,sans-serif" font-size="11" font-weight="600" fill="#FFFFFF">Saturday: 28 h short</text></g>
</svg>
<div style="display:flex;justify-content:center;gap:16px;padding:2px 0 6px;font:400 11px/1 Inter,system-ui,sans-serif;color:#4A4F57"><span style="display:inline-flex;align-items:center;gap:6px"><i style="width:16px;height:2.5px;background:#D7263D;display:inline-block"></i>Optimized Actual</span><span style="display:inline-flex;align-items:center;gap:6px"><i style="width:16px;height:0;border-top:2.5px dashed #E8705F;display:inline-block"></i>Actual</span><span style="display:inline-flex;align-items:center;gap:6px"><i style="width:16px;height:2.5px;background:#2A8AA8;display:inline-block"></i>Need</span></div>
</div>
<div class="pp-ui pp-c2 pp-glass2" style="left:58.5%;width:36.5%">
<div class="pp-h" style="color:#FFFFFF"><span>Recommendation</span><span class="pp-rec-suggested"><i></i>Suggested by Workofo</span></div>
<div style="padding:0 16px 16px;display:flex;flex-direction:column;gap:10px;flex:1">
<div class="pp-rec pp-rec--data"><span class="pp-rec__label">Data shows</span><span class="pp-rec__body">Saturdays are busiest. The floor is two people short.</span></div>
<div class="pp-open"><div style="min-height:0;overflow:hidden;display:flex;flex-direction:column;gap:10px">
<div class="pp-rec pp-rec--fix"><span class="pp-rec__label">Workofo fixes</span><span class="pp-rec__body">Adds staff on Saturday, trims quiet weekdays.</span></div>
<div style="display:flex;justify-content:flex-end;margin-top:auto"><span class="pp-rec-ready"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7ED39A" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"></path></svg>Ready to apply in one click</span></div>
</div></div>
</div>
</div>
</div>
</div>
<div class="uc-scene" data-k="1" hidden>
<div class="pp-scene">
<div class="pp-ui pp-c1" style="left:5%;width:52%">
<div class="pp-h" style="padding-bottom:4px"><span style="display:inline-flex;align-items:center;gap:8px">Workload coverage<span style="display:inline-flex;align-items:center;min-height:20px;padding:0 7px;border-radius:5px;background:#F2F2EE;color:#4A4F57;font:600 10.5px/1 Inter,system-ui,sans-serif">Checkout &amp; service · Example week</span></span></div>
<svg viewBox="0 0 600 236" style="width:100%;height:auto;display:block;padding:0 6px 8px;box-sizing:border-box" aria-hidden="true"><g font-family="Inter,system-ui,sans-serif" font-size="10.5" fill="#9A9FA8"><line x1="36" x2="580" y1="206.0" y2="206.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="206.0" y2="206.0" stroke="#2B2F36"></line><text x="28" y="209.5" text-anchor="end" fill="#4A4F57">0.0</text><line x1="36" x2="580" y1="142.0" y2="142.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="142.0" y2="142.0" stroke="#2B2F36"></line><text x="28" y="145.5" text-anchor="end" fill="#4A4F57">40.0</text><line x1="36" x2="580" y1="78.0" y2="78.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="78.0" y2="78.0" stroke="#2B2F36"></line><text x="28" y="81.5" text-anchor="end" fill="#4A4F57">80.0</text><line x1="36" x2="580" y1="14.0" y2="14.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="14.0" y2="14.0" stroke="#2B2F36"></line><text x="28" y="17.5" text-anchor="end" fill="#4A4F57">120.0</text><line x1="36" x2="36" y1="14" y2="206" stroke="#2B2F36"></line><line x1="36" x2="580" y1="206" y2="206" stroke="#2B2F36"></line><text x="60.0" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Mon</text><text x="143.3" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Tue</text><text x="226.7" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Wed</text><text x="310.0" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Thu</text><text x="393.3" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Fri</text><text x="476.7" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Sat</text><text x="560.0" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Sun</text></g>
<path class="pp-fadein" d="M60.0 108.4C73.9 109.5 115.6 115.3 143.3 114.8C171.1 114.3 198.9 107.9 226.7 105.2C254.4 102.5 282.2 104.7 310.0 98.8C337.8 92.9 365.6 80.1 393.3 70.0C421.1 59.9 448.9 35.3 476.7 38.0C504.4 40.7 546.1 78.0 560.0 86.0L560.0 206L60.0 206Z" fill="#F8DADF"></path>
<path d="M60.0 90.8C73.9 90.8 115.6 90.8 143.3 90.8C171.1 90.8 198.9 90.8 226.7 90.8C254.4 90.8 282.2 90.8 310.0 90.8C337.8 90.8 365.6 91.3 393.3 90.8C421.1 90.3 448.9 87.6 476.7 87.6C504.4 87.6 546.1 90.3 560.0 90.8" fill="none" stroke="#E8705F" stroke-width="2.1" stroke-linejoin="round" stroke-dasharray="7 5" class="pp-fadein"></path>
<path class="pp-drawl" d="M60.0 119.6C73.9 120.7 115.6 126.5 143.3 126.0C171.1 125.5 198.9 119.1 226.7 116.4C254.4 113.7 282.2 115.9 310.0 110.0C337.8 104.1 365.6 91.3 393.3 81.2C421.1 71.1 448.9 46.5 476.7 49.2C504.4 51.9 546.1 89.2 560.0 97.2" pathLength="1" fill="none" stroke="#2A8AA8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
<path class="pp-drawl pp-late" d="M60.0 108.4C73.9 109.5 115.6 115.3 143.3 114.8C171.1 114.3 198.9 107.9 226.7 105.2C254.4 102.5 282.2 104.7 310.0 98.8C337.8 92.9 365.6 80.1 393.3 70.0C421.1 59.9 448.9 35.3 476.7 38.0C504.4 40.7 546.1 78.0 560.0 86.0" pathLength="1" fill="none" stroke="#D7263D" stroke-width="2.3" stroke-linejoin="round" stroke-linecap="round"></path>
<g class="pp-fadein pp-note"><line x1="476.7" x2="476.7" y1="87.6" y2="49.2" stroke="#4A4F57" stroke-width="1.6" stroke-dasharray="3 3"></line><line x1="476.7" x2="476.7" y1="93.6" y2="152.4" stroke="#4A4F57" stroke-width="1" opacity=".35"></line><circle cx="476.7" cy="49.2" r="4.5" fill="#2A8AA8" stroke="#FFFFFF" stroke-width="2"></circle><circle cx="476.7" cy="87.6" r="4.5" fill="#E8705F" stroke="#FFFFFF" stroke-width="2"></circle><rect x="407.7" y="152.4" width="138.0" height="22" rx="11" fill="#111111"></rect><text x="476.7" y="167.4" text-anchor="middle" font-family="Inter,system-ui,sans-serif" font-size="11" font-weight="600" fill="#FFFFFF">Saturday: 24 h short</text></g>
</svg>
<div style="display:flex;justify-content:center;gap:16px;padding:2px 0 6px;font:400 11px/1 Inter,system-ui,sans-serif;color:#4A4F57"><span style="display:inline-flex;align-items:center;gap:6px"><i style="width:16px;height:2.5px;background:#D7263D;display:inline-block"></i>Optimized Actual</span><span style="display:inline-flex;align-items:center;gap:6px"><i style="width:16px;height:0;border-top:2.5px dashed #E8705F;display:inline-block"></i>Actual</span><span style="display:inline-flex;align-items:center;gap:6px"><i style="width:16px;height:2.5px;background:#2A8AA8;display:inline-block"></i>Need</span></div>
</div>
<div class="pp-ui pp-c2 pp-glass2" style="left:58.5%;width:36.5%">
<div class="pp-h" style="color:#FFFFFF"><span>Recommendation</span><span class="pp-rec-suggested"><i></i>Suggested by Workofo</span></div>
<div style="padding:0 16px 16px;display:flex;flex-direction:column;gap:10px;flex:1">
<div class="pp-rec pp-rec--data"><span class="pp-rec__label">Data shows</span><span class="pp-rec__body">Queues peak Fri-Sat. The till is staffed the same every day.</span></div>
<div class="pp-open"><div style="min-height:0;overflow:hidden;display:flex;flex-direction:column;gap:10px">
<div class="pp-rec pp-rec--fix"><span class="pp-rec__label">Workofo fixes</span><span class="pp-rec__body">Moves till hours to the weekend.</span></div>
<div style="display:flex;justify-content:flex-end;margin-top:auto"><span class="pp-rec-ready"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7ED39A" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"></path></svg>Ready to apply in one click</span></div>
</div></div>
</div>
</div>
</div>
</div>
<div class="uc-scene" data-k="2" hidden>
<div class="pp-scene">
<div class="pp-ui pp-c1" style="left:5%;width:52%">
<div class="pp-h" style="padding-bottom:4px"><span style="display:inline-flex;align-items:center;gap:8px">Workload coverage<span style="display:inline-flex;align-items:center;min-height:20px;padding:0 7px;border-radius:5px;background:#F2F2EE;color:#4A4F57;font:600 10.5px/1 Inter,system-ui,sans-serif">Replenishment · Example week</span></span></div>
<svg viewBox="0 0 600 236" style="width:100%;height:auto;display:block;padding:0 6px 8px;box-sizing:border-box" aria-hidden="true"><g font-family="Inter,system-ui,sans-serif" font-size="10.5" fill="#9A9FA8"><line x1="36" x2="580" y1="206.0" y2="206.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="206.0" y2="206.0" stroke="#2B2F36"></line><text x="28" y="209.5" text-anchor="end" fill="#4A4F57">0.0</text><line x1="36" x2="580" y1="142.0" y2="142.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="142.0" y2="142.0" stroke="#2B2F36"></line><text x="28" y="145.5" text-anchor="end" fill="#4A4F57">40.0</text><line x1="36" x2="580" y1="78.0" y2="78.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="78.0" y2="78.0" stroke="#2B2F36"></line><text x="28" y="81.5" text-anchor="end" fill="#4A4F57">80.0</text><line x1="36" x2="580" y1="14.0" y2="14.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="14.0" y2="14.0" stroke="#2B2F36"></line><text x="28" y="17.5" text-anchor="end" fill="#4A4F57">120.0</text><line x1="36" x2="36" y1="14" y2="206" stroke="#2B2F36"></line><line x1="36" x2="580" y1="206" y2="206" stroke="#2B2F36"></line><text x="60.0" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Mon</text><text x="143.3" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Tue</text><text x="226.7" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Wed</text><text x="310.0" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Thu</text><text x="393.3" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Fri</text><text x="476.7" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Sat</text><text x="560.0" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Sun</text></g>
<path class="pp-fadein" d="M60.0 73.2C73.9 83.3 115.6 132.4 143.3 134.0C171.1 135.6 198.9 82.3 226.7 82.8C254.4 83.3 282.2 137.7 310.0 137.2C337.8 136.7 365.6 78.0 393.3 79.6C421.1 81.2 448.9 132.4 476.7 146.8C504.4 161.2 546.1 162.8 560.0 166.0L560.0 206L60.0 206Z" fill="#F8DADF"></path>
<path d="M60.0 126.0C73.9 126.0 115.6 126.0 143.3 126.0C171.1 126.0 198.9 126.0 226.7 126.0C254.4 126.0 282.2 126.0 310.0 126.0C337.8 126.0 365.6 126.0 393.3 126.0C421.1 126.0 448.9 118.0 476.7 126.0C504.4 134.0 546.1 166.0 560.0 174.0" fill="none" stroke="#E8705F" stroke-width="2.1" stroke-linejoin="round" stroke-dasharray="7 5" class="pp-fadein"></path>
<path class="pp-drawl" d="M60.0 84.4C73.9 94.5 115.6 143.6 143.3 145.2C171.1 146.8 198.9 93.5 226.7 94.0C254.4 94.5 282.2 148.9 310.0 148.4C337.8 147.9 365.6 89.2 393.3 90.8C421.1 92.4 448.9 143.6 476.7 158.0C504.4 172.4 546.1 174.0 560.0 177.2" pathLength="1" fill="none" stroke="#2A8AA8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
<path class="pp-drawl pp-late" d="M60.0 73.2C73.9 83.3 115.6 132.4 143.3 134.0C171.1 135.6 198.9 82.3 226.7 82.8C254.4 83.3 282.2 137.7 310.0 137.2C337.8 136.7 365.6 78.0 393.3 79.6C421.1 81.2 448.9 132.4 476.7 146.8C504.4 161.2 546.1 162.8 560.0 166.0" pathLength="1" fill="none" stroke="#D7263D" stroke-width="2.3" stroke-linejoin="round" stroke-linecap="round"></path>
<g class="pp-fadein pp-note"><line x1="60.0" x2="60.0" y1="126.0" y2="84.4" stroke="#4A4F57" stroke-width="1.6" stroke-dasharray="3 3"></line><line x1="60.0" x2="60.0" y1="132.0" y2="152.4" stroke="#4A4F57" stroke-width="1" opacity=".35"></line><circle cx="60.0" cy="84.4" r="4.5" fill="#2A8AA8" stroke="#FFFFFF" stroke-width="2"></circle><circle cx="60.0" cy="126.0" r="4.5" fill="#E8705F" stroke="#FFFFFF" stroke-width="2"></circle><rect x="40.0" y="152.4" width="179.3" height="22" rx="11" fill="#111111"></rect><text x="129.7" y="167.4" text-anchor="middle" font-family="Inter,system-ui,sans-serif" font-size="11" font-weight="600" fill="#FFFFFF">Monday delivery: 26 h short</text></g>
</svg>
<div style="display:flex;justify-content:center;gap:16px;padding:2px 0 6px;font:400 11px/1 Inter,system-ui,sans-serif;color:#4A4F57"><span style="display:inline-flex;align-items:center;gap:6px"><i style="width:16px;height:2.5px;background:#D7263D;display:inline-block"></i>Optimized Actual</span><span style="display:inline-flex;align-items:center;gap:6px"><i style="width:16px;height:0;border-top:2.5px dashed #E8705F;display:inline-block"></i>Actual</span><span style="display:inline-flex;align-items:center;gap:6px"><i style="width:16px;height:2.5px;background:#2A8AA8;display:inline-block"></i>Need</span></div>
</div>
<div class="pp-ui pp-c2 pp-glass2" style="left:58.5%;width:36.5%">
<div class="pp-h" style="color:#FFFFFF"><span>Recommendation</span><span class="pp-rec-suggested"><i></i>Suggested by Workofo</span></div>
<div style="padding:0 16px 16px;display:flex;flex-direction:column;gap:10px;flex:1">
<div class="pp-rec pp-rec--data"><span class="pp-rec__label">Data shows</span><span class="pp-rec__body">Deliveries come Mon, Wed and Fri. Stock hours are spread evenly.</span></div>
<div class="pp-open"><div style="min-height:0;overflow:hidden;display:flex;flex-direction:column;gap:10px">
<div class="pp-rec pp-rec--fix"><span class="pp-rec__label">Workofo fixes</span><span class="pp-rec__body">Puts stock hours on delivery days.</span></div>
<div style="display:flex;justify-content:flex-end;margin-top:auto"><span class="pp-rec-ready"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7ED39A" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"></path></svg>Ready to apply in one click</span></div>
</div></div>
</div>
</div>
</div>
</div>
<div class="uc-scene" data-k="3" hidden>
<div class="pp-scene">
<div class="pp-ui pp-c1" style="left:5%;width:52%">
<div class="pp-h" style="padding-bottom:4px"><span style="display:inline-flex;align-items:center;gap:8px">Workload coverage<span style="display:inline-flex;align-items:center;min-height:20px;padding:0 7px;border-radius:5px;background:#F2F2EE;color:#4A4F57;font:600 10.5px/1 Inter,system-ui,sans-serif">Online fulfillment · Example week</span></span></div>
<svg viewBox="0 0 600 236" style="width:100%;height:auto;display:block;padding:0 6px 8px;box-sizing:border-box" aria-hidden="true"><g font-family="Inter,system-ui,sans-serif" font-size="10.5" fill="#9A9FA8"><line x1="36" x2="580" y1="206.0" y2="206.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="206.0" y2="206.0" stroke="#2B2F36"></line><text x="28" y="209.5" text-anchor="end" fill="#4A4F57">0.0</text><line x1="36" x2="580" y1="142.0" y2="142.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="142.0" y2="142.0" stroke="#2B2F36"></line><text x="28" y="145.5" text-anchor="end" fill="#4A4F57">40.0</text><line x1="36" x2="580" y1="78.0" y2="78.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="78.0" y2="78.0" stroke="#2B2F36"></line><text x="28" y="81.5" text-anchor="end" fill="#4A4F57">80.0</text><line x1="36" x2="580" y1="14.0" y2="14.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="14.0" y2="14.0" stroke="#2B2F36"></line><text x="28" y="17.5" text-anchor="end" fill="#4A4F57">120.0</text><line x1="36" x2="36" y1="14" y2="206" stroke="#2B2F36"></line><line x1="36" x2="580" y1="206" y2="206" stroke="#2B2F36"></line><text x="60.0" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Mon</text><text x="143.3" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Tue</text><text x="226.7" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Wed</text><text x="310.0" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Thu</text><text x="393.3" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Fri</text><text x="476.7" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Sat</text><text x="560.0" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Sun</text></g>
<path class="pp-fadein" d="M60.0 102.0C73.9 100.9 115.6 96.1 143.3 95.6C171.1 95.1 198.9 99.9 226.7 98.8C254.4 97.7 282.2 95.1 310.0 89.2C337.8 83.3 365.6 64.7 393.3 63.6C421.1 62.5 448.9 86.5 476.7 82.8C504.4 79.1 546.1 48.1 560.0 41.2L560.0 206L60.0 206Z" fill="#F8DADF"></path>
<path d="M60.0 90.8C73.9 90.8 115.6 90.8 143.3 90.8C171.1 90.8 198.9 90.8 226.7 90.8C254.4 90.8 282.2 90.8 310.0 90.8C337.8 90.8 365.6 90.8 393.3 90.8C421.1 90.8 448.9 90.8 476.7 90.8C504.4 90.8 546.1 90.8 560.0 90.8" fill="none" stroke="#E8705F" stroke-width="2.1" stroke-linejoin="round" stroke-dasharray="7 5" class="pp-fadein"></path>
<path class="pp-drawl" d="M60.0 113.2C73.9 112.1 115.6 107.3 143.3 106.8C171.1 106.3 198.9 111.1 226.7 110.0C254.4 108.9 282.2 106.3 310.0 100.4C337.8 94.5 365.6 75.9 393.3 74.8C421.1 73.7 448.9 97.7 476.7 94.0C504.4 90.3 546.1 59.3 560.0 52.4" pathLength="1" fill="none" stroke="#2A8AA8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
<path class="pp-drawl pp-late" d="M60.0 102.0C73.9 100.9 115.6 96.1 143.3 95.6C171.1 95.1 198.9 99.9 226.7 98.8C254.4 97.7 282.2 95.1 310.0 89.2C337.8 83.3 365.6 64.7 393.3 63.6C421.1 62.5 448.9 86.5 476.7 82.8C504.4 79.1 546.1 48.1 560.0 41.2" pathLength="1" fill="none" stroke="#D7263D" stroke-width="2.3" stroke-linejoin="round" stroke-linecap="round"></path>
<g class="pp-fadein pp-note"><line x1="560.0" x2="560.0" y1="90.8" y2="52.4" stroke="#4A4F57" stroke-width="1.6" stroke-dasharray="3 3"></line><line x1="560.0" x2="560.0" y1="96.8" y2="152.4" stroke="#4A4F57" stroke-width="1" opacity=".35"></line><circle cx="560.0" cy="52.4" r="4.5" fill="#2A8AA8" stroke="#FFFFFF" stroke-width="2"></circle><circle cx="560.0" cy="90.8" r="4.5" fill="#E8705F" stroke="#FFFFFF" stroke-width="2"></circle><rect x="453.8" y="152.4" width="126.2" height="22" rx="11" fill="#111111"></rect><text x="516.9" y="167.4" text-anchor="middle" font-family="Inter,system-ui,sans-serif" font-size="11" font-weight="600" fill="#FFFFFF">Sunday: 24 h short</text></g>
</svg>
<div style="display:flex;justify-content:center;gap:16px;padding:2px 0 6px;font:400 11px/1 Inter,system-ui,sans-serif;color:#4A4F57"><span style="display:inline-flex;align-items:center;gap:6px"><i style="width:16px;height:2.5px;background:#D7263D;display:inline-block"></i>Optimized Actual</span><span style="display:inline-flex;align-items:center;gap:6px"><i style="width:16px;height:0;border-top:2.5px dashed #E8705F;display:inline-block"></i>Actual</span><span style="display:inline-flex;align-items:center;gap:6px"><i style="width:16px;height:2.5px;background:#2A8AA8;display:inline-block"></i>Need</span></div>
</div>
<div class="pp-ui pp-c2 pp-glass2" style="left:58.5%;width:36.5%">
<div class="pp-h" style="color:#FFFFFF"><span>Recommendation</span><span class="pp-rec-suggested"><i></i>Suggested by Workofo</span></div>
<div style="padding:0 16px 16px;display:flex;flex-direction:column;gap:10px;flex:1">
<div class="pp-rec pp-rec--data"><span class="pp-rec__label">Data shows</span><span class="pp-rec__body">Orders peak Fri and Sun. Staffing stays flat.</span></div>
<div class="pp-open"><div style="min-height:0;overflow:hidden;display:flex;flex-direction:column;gap:10px">
<div class="pp-rec pp-rec--fix"><span class="pp-rec__label">Workofo fixes</span><span class="pp-rec__body">Staffs pick and pack around the peaks.</span></div>
<div style="display:flex;justify-content:flex-end;margin-top:auto"><span class="pp-rec-ready"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7ED39A" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"></path></svg>Ready to apply in one click</span></div>
</div></div>
</div>
</div>
</div>
</div>
</div>
<div class="pp-nav">
<div style="display:flex;align-items:center;gap:10px">

<button type="button" class="navbtn" data-nav="-1" aria-label="Previous example"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"></path></svg></button>
<button type="button" class="navbtn" data-nav="1" aria-label="Next example"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></button>
</div>
</div>
</div>`;

export default function RetailPanel() {
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
