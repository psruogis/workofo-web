/**
 * Logistics zones graphic - adapted from Logistics.dc.html / logistics-panel extract.
 * Markup/CSS/motion from the artboard; manual tabs only (no auto-advance); US spelling labor.
 */

import { useEffect, useRef } from 'react';

const ARTBOARD_HTML = `<div class="pp-panel wait" id="uc" style="aspect-ratio:2.4 / 1" aria-label="Logistics examples: demand compared with scheduled staff for one zone, and how Workofo adjusts the schedule.">
<span class="pp-blob pp-b1"></span><span class="pp-blob pp-b2"></span><span class="pp-blob pp-b3"></span><span class="pp-blob pp-b4"></span><span class="pp-grain"></span>
<div class="pp-tabs" role="tablist" aria-label="Choose a team"><button type="button" class="tab" data-k="0" aria-pressed="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 7h11v9H3z"></path><path d="M14 10h4l3 3v3h-7"></path><circle cx="7" cy="18" r="1.6"></circle><circle cx="17" cy="18" r="1.6"></circle></svg>Inbound</button><button type="button" class="tab" data-k="1" aria-pressed="false"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 20V8l8-4 8 4v12"></path><path d="M8 20v-8h8v8"></path><path d="M8 16h8"></path></svg>Picking</button><button type="button" class="tab" data-k="2" aria-pressed="false"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 8l-9-5-9 5 9 5 9-5z"></path><path d="M3 8v8l9 5 9-5V8"></path><path d="M12 13v8"></path></svg>Packing</button><button type="button" class="tab" data-k="3" aria-pressed="false"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 7H3v9h7"></path><path d="M10 7h4l3 3v6h-7z"></path><path d="M17 12h5M20 9l3 3-3 3"></path></svg>Outbound</button></div>
<div aria-live="polite">
<div class="uc-scene" data-k="0"><div class="pp-scene">
<div class="pp-ui pp-c1" style="left:5%;width:52%">
<div class="pp-h" style="padding-bottom:4px"><span style="display:inline-flex;align-items:center;gap:8px">Workload coverage<span style="display:inline-flex;align-items:center;min-height:20px;padding:0 7px;border-radius:5px;background:#F2F2EE;color:#4A4F57;font:600 10.5px/1 Inter,system-ui,sans-serif">Inbound · Example week</span></span></div>
<svg viewBox="0 0 600 236" style="width:100%;height:auto;display:block;padding:0 6px 8px;box-sizing:border-box" aria-hidden="true"><g font-family="Inter,system-ui,sans-serif" font-size="10.5" fill="#9A9FA8"><line x1="36" x2="580" y1="206.0" y2="206.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="206.0" y2="206.0" stroke="#2B2F36"></line><text x="28" y="209.5" text-anchor="end" fill="#4A4F57">0.0</text><line x1="36" x2="580" y1="142.0" y2="142.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="142.0" y2="142.0" stroke="#2B2F36"></line><text x="28" y="145.5" text-anchor="end" fill="#4A4F57">40.0</text><line x1="36" x2="580" y1="78.0" y2="78.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="78.0" y2="78.0" stroke="#2B2F36"></line><text x="28" y="81.5" text-anchor="end" fill="#4A4F57">80.0</text><line x1="36" x2="580" y1="14.0" y2="14.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="14.0" y2="14.0" stroke="#2B2F36"></line><text x="28" y="17.5" text-anchor="end" fill="#4A4F57">120.0</text><line x1="36" x2="36" y1="14" y2="206" stroke="#2B2F36"></line><line x1="36" x2="580" y1="206" y2="206" stroke="#2B2F36"></line><text x="60.0" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Mon</text><text x="143.3" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Tue</text><text x="226.7" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Wed</text><text x="310.0" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Thu</text><text x="393.3" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Fri</text><text x="476.7" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Sat</text><text x="560.0" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Sun</text></g>
<path class="pp-fadein" d="M60.0 87.6C73.9 89.7 115.6 97.2 143.3 100.4C171.1 103.6 198.9 106.3 226.7 106.8C254.4 107.3 282.2 105.2 310.0 103.6C337.8 102.0 365.6 91.9 393.3 97.2C421.1 102.5 448.9 126.5 476.7 135.6C504.4 144.7 546.1 148.9 560.0 151.6L560.0 206L60.0 206Z" fill="#F8DADF"></path>
<path d="M60.0 113.2C73.9 112.1 115.6 107.9 143.3 106.8C171.1 105.7 198.9 106.8 226.7 106.8C254.4 106.8 282.2 106.8 310.0 106.8C337.8 106.8 365.6 105.7 393.3 106.8C421.1 107.9 448.9 109.5 476.7 113.2C504.4 116.9 546.1 126.5 560.0 129.2" fill="none" stroke="#E8705F" stroke-width="2.1" stroke-linejoin="round" stroke-dasharray="7 5" class="pp-fadein"></path>
<path class="pp-drawl" d="M60.0 94.0C73.9 96.1 115.6 103.6 143.3 106.8C171.1 110.0 198.9 112.7 226.7 113.2C254.4 113.7 282.2 111.6 310.0 110.0C337.8 108.4 365.6 98.3 393.3 103.6C421.1 108.9 448.9 132.9 476.7 142.0C504.4 151.1 546.1 155.3 560.0 158.0" pathLength="1" fill="none" stroke="#2A8AA8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
<path class="pp-drawl pp-late" d="M60.0 87.6C73.9 89.7 115.6 97.2 143.3 100.4C171.1 103.6 198.9 106.3 226.7 106.8C254.4 107.3 282.2 105.2 310.0 103.6C337.8 102.0 365.6 91.9 393.3 97.2C421.1 102.5 448.9 126.5 476.7 135.6C504.4 144.7 546.1 148.9 560.0 151.6" pathLength="1" fill="none" stroke="#D7263D" stroke-width="2.3" stroke-linejoin="round" stroke-linecap="round"></path>
<g class="pp-fadein pp-note"><line x1="60.0" x2="60.0" y1="113.2" y2="94.0" stroke="#4A4F57" stroke-width="1.6" stroke-dasharray="3 3"></line><line x1="60.0" x2="60.0" y1="119.2" y2="152.4" stroke="#4A4F57" stroke-width="1" opacity=".35"></line><circle cx="60.0" cy="94.0" r="4.5" fill="#2A8AA8" stroke="#FFFFFF" stroke-width="2"></circle><circle cx="60.0" cy="113.2" r="4.5" fill="#E8705F" stroke="#FFFFFF" stroke-width="2"></circle><rect x="40.0" y="152.4" width="126.2" height="22" rx="11" fill="#111111"></rect><text x="103.1" y="167.4" text-anchor="middle" font-family="Inter,system-ui,sans-serif" font-size="11" font-weight="600" fill="#FFFFFF">Monday: 12 h short</text></g>
</svg>
<div style="display:flex;justify-content:center;gap:16px;padding:0 0 14px;font:400 11px/1 Inter,system-ui,sans-serif;color:#4A4F57"><span style="display:inline-flex;align-items:center;gap:6px"><i style="width:16px;height:2.5px;background:#D7263D;display:inline-block"></i>Optimized Actual</span><span style="display:inline-flex;align-items:center;gap:6px"><i style="width:16px;height:0;border-top:2.5px dashed #E8705F;display:inline-block"></i>Actual</span><span style="display:inline-flex;align-items:center;gap:6px"><i style="width:16px;height:2.5px;background:#2A8AA8;display:inline-block"></i>Need</span></div>
</div>
<div class="pp-ui pp-c2 pp-glass2" style="left:58.5%;width:36.5%">
<div class="pp-h" style="color:#FFFFFF"><span>Recommendation</span><span class="pp-rec-suggested"><i></i>Suggested by Workofo</span></div>
<div style="padding:0 16px 16px;display:flex;flex-direction:column;gap:10px;flex:1">
<div class="pp-rec pp-rec--data"><span class="pp-rec__label">Data shows</span><span class="pp-rec__body">Weekend deliveries pile up for Monday. 70 h are needed, 58 h are scheduled.</span></div>
<div class="pp-open"><div style="min-height:0;overflow:hidden;display:flex;flex-direction:column;gap:10px">
<div class="pp-rec pp-rec--fix"><span class="pp-rec__label">Workofo fixes</span><span class="pp-rec__body">Adds 28 h from Monday to Friday, taken from the weekend. Total hours stay the same.</span></div>
<div style="display:flex;justify-content:flex-end;margin-top:auto"><span class="pp-rec-ready"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7ED39A" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"></path></svg>Ready to apply in one click</span></div>
</div></div>
</div>
</div>
</div></div>
<div class="uc-scene" data-k="1" hidden><div class="pp-scene">
<div class="pp-ui pp-c1" style="left:5%;width:52%">
<div class="pp-h" style="padding-bottom:4px"><span style="display:inline-flex;align-items:center;gap:8px">Workload coverage<span style="display:inline-flex;align-items:center;min-height:20px;padding:0 7px;border-radius:5px;background:#F2F2EE;color:#4A4F57;font:600 10.5px/1 Inter,system-ui,sans-serif">Picking · Example week</span></span></div>
<svg viewBox="0 0 600 236" style="width:100%;height:auto;display:block;padding:0 6px 8px;box-sizing:border-box" aria-hidden="true"><g font-family="Inter,system-ui,sans-serif" font-size="10.5" fill="#9A9FA8"><line x1="36" x2="580" y1="206.0" y2="206.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="206.0" y2="206.0" stroke="#2B2F36"></line><text x="28" y="209.5" text-anchor="end" fill="#4A4F57">0.0</text><line x1="36" x2="580" y1="142.0" y2="142.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="142.0" y2="142.0" stroke="#2B2F36"></line><text x="28" y="145.5" text-anchor="end" fill="#4A4F57">40.0</text><line x1="36" x2="580" y1="78.0" y2="78.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="78.0" y2="78.0" stroke="#2B2F36"></line><text x="28" y="81.5" text-anchor="end" fill="#4A4F57">80.0</text><line x1="36" x2="580" y1="14.0" y2="14.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="14.0" y2="14.0" stroke="#2B2F36"></line><text x="28" y="17.5" text-anchor="end" fill="#4A4F57">120.0</text><line x1="36" x2="36" y1="14" y2="206" stroke="#2B2F36"></line><line x1="36" x2="580" y1="206" y2="206" stroke="#2B2F36"></line><text x="60.0" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Mon</text><text x="143.3" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Tue</text><text x="226.7" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Wed</text><text x="310.0" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Thu</text><text x="393.3" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Fri</text><text x="476.7" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Sat</text><text x="560.0" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Sun</text></g>
<path class="pp-fadein" d="M60.0 97.2C73.9 96.7 115.6 95.6 143.3 94.0C171.1 92.4 198.9 90.3 226.7 87.6C254.4 84.9 282.2 84.9 310.0 78.0C337.8 71.1 365.6 39.6 393.3 46.0C421.1 52.4 448.9 100.4 476.7 116.4C504.4 132.4 546.1 137.7 560.0 142.0L560.0 206L60.0 206Z" fill="#F8DADF"></path>
<path d="M60.0 90.8C73.9 90.8 115.6 90.8 143.3 90.8C171.1 90.8 198.9 90.8 226.7 90.8C254.4 90.8 282.2 90.8 310.0 90.8C337.8 90.8 365.6 90.8 393.3 90.8C421.1 90.8 448.9 86.5 476.7 90.8C504.4 95.1 546.1 112.1 560.0 116.4" fill="none" stroke="#E8705F" stroke-width="2.1" stroke-linejoin="round" stroke-dasharray="7 5" class="pp-fadein"></path>
<path class="pp-drawl" d="M60.0 103.6C73.9 103.1 115.6 102.0 143.3 100.4C171.1 98.8 198.9 96.7 226.7 94.0C254.4 91.3 282.2 91.3 310.0 84.4C337.8 77.5 365.6 46.0 393.3 52.4C421.1 58.8 448.9 106.8 476.7 122.8C504.4 138.8 546.1 144.1 560.0 148.4" pathLength="1" fill="none" stroke="#2A8AA8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
<path class="pp-drawl pp-late" d="M60.0 97.2C73.9 96.7 115.6 95.6 143.3 94.0C171.1 92.4 198.9 90.3 226.7 87.6C254.4 84.9 282.2 84.9 310.0 78.0C337.8 71.1 365.6 39.6 393.3 46.0C421.1 52.4 448.9 100.4 476.7 116.4C504.4 132.4 546.1 137.7 560.0 142.0" pathLength="1" fill="none" stroke="#D7263D" stroke-width="2.3" stroke-linejoin="round" stroke-linecap="round"></path>
<g class="pp-fadein pp-note"><line x1="393.3" x2="393.3" y1="90.8" y2="52.4" stroke="#4A4F57" stroke-width="1.6" stroke-dasharray="3 3"></line><line x1="393.3" x2="393.3" y1="96.8" y2="152.4" stroke="#4A4F57" stroke-width="1" opacity=".35"></line><circle cx="393.3" cy="52.4" r="4.5" fill="#2A8AA8" stroke="#FFFFFF" stroke-width="2"></circle><circle cx="393.3" cy="90.8" r="4.5" fill="#E8705F" stroke="#FFFFFF" stroke-width="2"></circle><rect x="330.2" y="152.4" width="126.2" height="22" rx="11" fill="#111111"></rect><text x="393.3" y="167.4" text-anchor="middle" font-family="Inter,system-ui,sans-serif" font-size="11" font-weight="600" fill="#FFFFFF">Friday: 24 h short</text></g>
</svg>
<div style="display:flex;justify-content:center;gap:16px;padding:0 0 14px;font:400 11px/1 Inter,system-ui,sans-serif;color:#4A4F57"><span style="display:inline-flex;align-items:center;gap:6px"><i style="width:16px;height:2.5px;background:#D7263D;display:inline-block"></i>Optimized Actual</span><span style="display:inline-flex;align-items:center;gap:6px"><i style="width:16px;height:0;border-top:2.5px dashed #E8705F;display:inline-block"></i>Actual</span><span style="display:inline-flex;align-items:center;gap:6px"><i style="width:16px;height:2.5px;background:#2A8AA8;display:inline-block"></i>Need</span></div>
</div>
<div class="pp-ui pp-c2 pp-glass2" style="left:58.5%;width:36.5%">
<div class="pp-h" style="color:#FFFFFF"><span>Recommendation</span><span class="pp-rec-suggested"><i></i>Suggested by Workofo</span></div>
<div style="padding:0 16px 16px;display:flex;flex-direction:column;gap:10px;flex:1">
<div class="pp-rec pp-rec--data"><span class="pp-rec__label">Data shows</span><span class="pp-rec__body">Orders for weekend delivery peak on Friday. 96 h are needed, 72 h are scheduled.</span></div>
<div class="pp-open"><div style="min-height:0;overflow:hidden;display:flex;flex-direction:column;gap:10px">
<div class="pp-rec pp-rec--fix"><span class="pp-rec__label">Workofo fixes</span><span class="pp-rec__body">Adds 38 h from Wednesday to Friday, taken from the other days. Total hours stay the same.</span></div>
<div style="display:flex;justify-content:flex-end;margin-top:auto"><span class="pp-rec-ready"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7ED39A" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"></path></svg>Ready to apply in one click</span></div>
</div></div>
</div>
</div>
</div></div>
<div class="uc-scene" data-k="2" hidden><div class="pp-scene">
<div class="pp-ui pp-c1" style="left:5%;width:52%">
<div class="pp-h" style="padding-bottom:4px"><span style="display:inline-flex;align-items:center;gap:8px">Workload coverage<span style="display:inline-flex;align-items:center;min-height:20px;padding:0 7px;border-radius:5px;background:#F2F2EE;color:#4A4F57;font:600 10.5px/1 Inter,system-ui,sans-serif">Packing · Example week</span></span></div>
<svg viewBox="0 0 600 236" style="width:100%;height:auto;display:block;padding:0 6px 8px;box-sizing:border-box" aria-hidden="true"><g font-family="Inter,system-ui,sans-serif" font-size="10.5" fill="#9A9FA8"><line x1="36" x2="580" y1="206.0" y2="206.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="206.0" y2="206.0" stroke="#2B2F36"></line><text x="28" y="209.5" text-anchor="end" fill="#4A4F57">0.0</text><line x1="36" x2="580" y1="142.0" y2="142.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="142.0" y2="142.0" stroke="#2B2F36"></line><text x="28" y="145.5" text-anchor="end" fill="#4A4F57">40.0</text><line x1="36" x2="580" y1="78.0" y2="78.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="78.0" y2="78.0" stroke="#2B2F36"></line><text x="28" y="81.5" text-anchor="end" fill="#4A4F57">80.0</text><line x1="36" x2="580" y1="14.0" y2="14.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="14.0" y2="14.0" stroke="#2B2F36"></line><text x="28" y="17.5" text-anchor="end" fill="#4A4F57">120.0</text><line x1="36" x2="36" y1="14" y2="206" stroke="#2B2F36"></line><line x1="36" x2="580" y1="206" y2="206" stroke="#2B2F36"></line><text x="60.0" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Mon</text><text x="143.3" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Tue</text><text x="226.7" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Wed</text><text x="310.0" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Thu</text><text x="393.3" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Fri</text><text x="476.7" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Sat</text><text x="560.0" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Sun</text></g>
<path class="pp-fadein" d="M60.0 119.6C73.9 119.1 115.6 118.0 143.3 116.4C171.1 114.8 198.9 118.5 226.7 110.0C254.4 101.5 282.2 66.8 310.0 65.2C337.8 63.6 365.6 89.7 393.3 100.4C421.1 111.1 448.9 120.7 476.7 129.2C504.4 137.7 546.1 147.9 560.0 151.6L560.0 206L60.0 206Z" fill="#F8DADF"></path>
<path d="M60.0 106.8C73.9 106.8 115.6 106.8 143.3 106.8C171.1 106.8 198.9 106.8 226.7 106.8C254.4 106.8 282.2 106.8 310.0 106.8C337.8 106.8 365.6 104.1 393.3 106.8C421.1 109.5 448.9 118.0 476.7 122.8C504.4 127.6 546.1 133.5 560.0 135.6" fill="none" stroke="#E8705F" stroke-width="2.1" stroke-linejoin="round" stroke-dasharray="7 5" class="pp-fadein"></path>
<path class="pp-drawl" d="M60.0 126.0C73.9 125.5 115.6 124.4 143.3 122.8C171.1 121.2 198.9 124.9 226.7 116.4C254.4 107.9 282.2 73.2 310.0 71.6C337.8 70.0 365.6 96.1 393.3 106.8C421.1 117.5 448.9 127.1 476.7 135.6C504.4 144.1 546.1 154.3 560.0 158.0" pathLength="1" fill="none" stroke="#2A8AA8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
<path class="pp-drawl pp-late" d="M60.0 119.6C73.9 119.1 115.6 118.0 143.3 116.4C171.1 114.8 198.9 118.5 226.7 110.0C254.4 101.5 282.2 66.8 310.0 65.2C337.8 63.6 365.6 89.7 393.3 100.4C421.1 111.1 448.9 120.7 476.7 129.2C504.4 137.7 546.1 147.9 560.0 151.6" pathLength="1" fill="none" stroke="#D7263D" stroke-width="2.3" stroke-linejoin="round" stroke-linecap="round"></path>
<g class="pp-fadein pp-note"><line x1="310.0" x2="310.0" y1="106.8" y2="71.6" stroke="#4A4F57" stroke-width="1.6" stroke-dasharray="3 3"></line><line x1="310.0" x2="310.0" y1="112.8" y2="152.4" stroke="#4A4F57" stroke-width="1" opacity=".35"></line><circle cx="310.0" cy="71.6" r="4.5" fill="#2A8AA8" stroke="#FFFFFF" stroke-width="2"></circle><circle cx="310.0" cy="106.8" r="4.5" fill="#E8705F" stroke="#FFFFFF" stroke-width="2"></circle><rect x="241.0" y="152.4" width="138.0" height="22" rx="11" fill="#111111"></rect><text x="310.0" y="167.4" text-anchor="middle" font-family="Inter,system-ui,sans-serif" font-size="11" font-weight="600" fill="#FFFFFF">Thursday: 22 h short</text></g>
</svg>
<div style="display:flex;justify-content:center;gap:16px;padding:0 0 14px;font:400 11px/1 Inter,system-ui,sans-serif;color:#4A4F57"><span style="display:inline-flex;align-items:center;gap:6px"><i style="width:16px;height:2.5px;background:#D7263D;display:inline-block"></i>Optimized Actual</span><span style="display:inline-flex;align-items:center;gap:6px"><i style="width:16px;height:0;border-top:2.5px dashed #E8705F;display:inline-block"></i>Actual</span><span style="display:inline-flex;align-items:center;gap:6px"><i style="width:16px;height:2.5px;background:#2A8AA8;display:inline-block"></i>Need</span></div>
</div>
<div class="pp-ui pp-c2 pp-glass2" style="left:58.5%;width:36.5%">
<div class="pp-h" style="color:#FFFFFF"><span>Recommendation</span><span class="pp-rec-suggested"><i></i>Suggested by Workofo</span></div>
<div style="padding:0 16px 16px;display:flex;flex-direction:column;gap:10px;flex:1">
<div class="pp-rec pp-rec--data"><span class="pp-rec__label">Data shows</span><span class="pp-rec__body">A weekly campaign lifts Thursday orders. 84 h are needed, 62 h are scheduled.</span></div>
<div class="pp-open"><div style="min-height:0;overflow:hidden;display:flex;flex-direction:column;gap:10px">
<div class="pp-rec pp-rec--fix"><span class="pp-rec__label">Workofo fixes</span><span class="pp-rec__body">Adds 30 h to Thursday and Friday, taken from the other days. Total hours stay the same.</span></div>
<div style="display:flex;justify-content:flex-end;margin-top:auto"><span class="pp-rec-ready"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7ED39A" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"></path></svg>Ready to apply in one click</span></div>
</div></div>
</div>
</div>
</div></div>
<div class="uc-scene" data-k="3" hidden><div class="pp-scene">
<div class="pp-ui pp-c1" style="left:5%;width:52%">
<div class="pp-h" style="padding-bottom:4px"><span style="display:inline-flex;align-items:center;gap:8px">Workload coverage<span style="display:inline-flex;align-items:center;min-height:20px;padding:0 7px;border-radius:5px;background:#F2F2EE;color:#4A4F57;font:600 10.5px/1 Inter,system-ui,sans-serif">Outbound · Example week</span></span></div>
<svg viewBox="0 0 600 236" style="width:100%;height:auto;display:block;padding:0 6px 8px;box-sizing:border-box" aria-hidden="true"><g font-family="Inter,system-ui,sans-serif" font-size="10.5" fill="#9A9FA8"><line x1="36" x2="580" y1="206.0" y2="206.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="206.0" y2="206.0" stroke="#2B2F36"></line><text x="28" y="209.5" text-anchor="end" fill="#4A4F57">0.0</text><line x1="36" x2="580" y1="142.0" y2="142.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="142.0" y2="142.0" stroke="#2B2F36"></line><text x="28" y="145.5" text-anchor="end" fill="#4A4F57">40.0</text><line x1="36" x2="580" y1="78.0" y2="78.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="78.0" y2="78.0" stroke="#2B2F36"></line><text x="28" y="81.5" text-anchor="end" fill="#4A4F57">80.0</text><line x1="36" x2="580" y1="14.0" y2="14.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="14.0" y2="14.0" stroke="#2B2F36"></line><text x="28" y="17.5" text-anchor="end" fill="#4A4F57">120.0</text><line x1="36" x2="36" y1="14" y2="206" stroke="#2B2F36"></line><line x1="36" x2="580" y1="206" y2="206" stroke="#2B2F36"></line><text x="60.0" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Mon</text><text x="143.3" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Tue</text><text x="226.7" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Wed</text><text x="310.0" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Thu</text><text x="393.3" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Fri</text><text x="476.7" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Sat</text><text x="560.0" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Sun</text></g>
<path class="pp-fadein" d="M60.0 103.6C73.9 97.7 115.6 69.5 143.3 68.4C171.1 67.3 198.9 91.9 226.7 97.2C254.4 102.5 282.2 102.0 310.0 100.4C337.8 98.8 365.6 81.7 393.3 87.6C421.1 93.5 448.9 124.4 476.7 135.6C504.4 146.8 546.1 151.6 560.0 154.8L560.0 206L60.0 206Z" fill="#F8DADF"></path>
<path d="M60.0 100.4C73.9 100.4 115.6 100.4 143.3 100.4C171.1 100.4 198.9 100.4 226.7 100.4C254.4 100.4 282.2 100.4 310.0 100.4C337.8 100.4 365.6 97.7 393.3 100.4C421.1 103.1 448.9 111.6 476.7 116.4C504.4 121.2 546.1 127.1 560.0 129.2" fill="none" stroke="#E8705F" stroke-width="2.1" stroke-linejoin="round" stroke-dasharray="7 5" class="pp-fadein"></path>
<path class="pp-drawl" d="M60.0 110.0C73.9 104.1 115.6 75.9 143.3 74.8C171.1 73.7 198.9 98.3 226.7 103.6C254.4 108.9 282.2 108.4 310.0 106.8C337.8 105.2 365.6 88.1 393.3 94.0C421.1 99.9 448.9 130.8 476.7 142.0C504.4 153.2 546.1 158.0 560.0 161.2" pathLength="1" fill="none" stroke="#2A8AA8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
<path class="pp-drawl pp-late" d="M60.0 103.6C73.9 97.7 115.6 69.5 143.3 68.4C171.1 67.3 198.9 91.9 226.7 97.2C254.4 102.5 282.2 102.0 310.0 100.4C337.8 98.8 365.6 81.7 393.3 87.6C421.1 93.5 448.9 124.4 476.7 135.6C504.4 146.8 546.1 151.6 560.0 154.8" pathLength="1" fill="none" stroke="#D7263D" stroke-width="2.3" stroke-linejoin="round" stroke-linecap="round"></path>
<g class="pp-fadein pp-note"><line x1="143.3" x2="143.3" y1="100.4" y2="74.8" stroke="#4A4F57" stroke-width="1.6" stroke-dasharray="3 3"></line><line x1="143.3" x2="143.3" y1="106.4" y2="152.4" stroke="#4A4F57" stroke-width="1" opacity=".35"></line><circle cx="143.3" cy="74.8" r="4.5" fill="#2A8AA8" stroke="#FFFFFF" stroke-width="2"></circle><circle cx="143.3" cy="100.4" r="4.5" fill="#E8705F" stroke="#FFFFFF" stroke-width="2"></circle><rect x="77.3" y="152.4" width="132.1" height="22" rx="11" fill="#111111"></rect><text x="143.3" y="167.4" text-anchor="middle" font-family="Inter,system-ui,sans-serif" font-size="11" font-weight="600" fill="#FFFFFF">Tuesday: 16 h short</text></g>
</svg>
<div style="display:flex;justify-content:center;gap:16px;padding:0 0 14px;font:400 11px/1 Inter,system-ui,sans-serif;color:#4A4F57"><span style="display:inline-flex;align-items:center;gap:6px"><i style="width:16px;height:2.5px;background:#D7263D;display:inline-block"></i>Optimized Actual</span><span style="display:inline-flex;align-items:center;gap:6px"><i style="width:16px;height:0;border-top:2.5px dashed #E8705F;display:inline-block"></i>Actual</span><span style="display:inline-flex;align-items:center;gap:6px"><i style="width:16px;height:2.5px;background:#2A8AA8;display:inline-block"></i>Need</span></div>
</div>
<div class="pp-ui pp-c2 pp-glass2" style="left:58.5%;width:36.5%">
<div class="pp-h" style="color:#FFFFFF"><span>Recommendation</span><span class="pp-rec-suggested"><i></i>Suggested by Workofo</span></div>
<div style="padding:0 16px 16px;display:flex;flex-direction:column;gap:10px;flex:1">
<div class="pp-rec pp-rec--data"><span class="pp-rec__label">Data shows</span><span class="pp-rec__body">Store replenishment ships on Tuesday. 82 h are needed, 66 h are scheduled.</span></div>
<div class="pp-open"><div style="min-height:0;overflow:hidden;display:flex;flex-direction:column;gap:10px">
<div class="pp-rec pp-rec--fix"><span class="pp-rec__label">Workofo fixes</span><span class="pp-rec__body">Adds 30 h to Tuesday, Wednesday and Friday, taken from Monday and the weekend. Total hours stay the same.</span></div>
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
</div>
`;

export default function LogisticsPanel() {
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
