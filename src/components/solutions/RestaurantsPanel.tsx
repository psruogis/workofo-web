/**
 * Restaurants teams graphic - adapted from Restaurants.dc.html / restaurants-panel extract.
 * Markup/CSS/motion from the artboard; manual tabs only (no auto-advance); US spelling labor.
 */

import { useEffect, useRef } from 'react';

const ARTBOARD_HTML = `<div class="pp-panel wait" id="uc" style="aspect-ratio:2.4 / 1" aria-label="Restaurant examples: demand compared with scheduled staff for one team, and how Workofo adjusts the schedule.">
<span class="pp-blob pp-b1"></span><span class="pp-blob pp-b2"></span><span class="pp-blob pp-b3"></span><span class="pp-blob pp-b4"></span><span class="pp-grain"></span>
<div class="pp-tabs" role="tablist" aria-label="Choose a team"><button type="button" class="tab" data-k="0" aria-pressed="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 9h18M5 9V7a7 7 0 0114 0v2M4 13h16"></path><path d="M8 13v7M16 13v7"></path></svg>Floor</button><button type="button" class="tab" data-k="1" aria-pressed="false"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 13h12v7H6z"></path><path d="M8 13a4 4 0 118 0"></path><path d="M12 4v2"></path></svg>Kitchen</button><button type="button" class="tab" data-k="2" aria-pressed="false"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 4h14l-6 8v6h3v2H8v-2h3v-6z"></path></svg>Bar</button><button type="button" class="tab" data-k="3" aria-pressed="false"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 8h14l-1 12H6z"></path><path d="M9 8V6a3 3 0 016 0v2"></path></svg>Takeaway &amp; delivery</button></div>
<div aria-live="polite">
<div class="uc-scene" data-k="0"><div class="pp-scene">
<div class="pp-ui pp-c1" style="left:5%;width:52%">
<div class="pp-h" style="padding-bottom:4px"><span style="display:inline-flex;align-items:center;gap:8px">Workload coverage<span style="display:inline-flex;align-items:center;min-height:20px;padding:0 7px;border-radius:5px;background:#F2F2EE;color:#4A4F57;font:600 10.5px/1 Inter,system-ui,sans-serif">Floor · Example week</span></span></div>
<svg viewBox="0 0 600 236" style="width:100%;height:auto;display:block;padding:0 6px 8px;box-sizing:border-box" aria-hidden="true"><g font-family="Inter,system-ui,sans-serif" font-size="10.5" fill="#9A9FA8"><line x1="36" x2="580" y1="206.0" y2="206.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="206.0" y2="206.0" stroke="#2B2F36"></line><text x="28" y="209.5" text-anchor="end" fill="#4A4F57">0.0</text><line x1="36" x2="580" y1="142.0" y2="142.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="142.0" y2="142.0" stroke="#2B2F36"></line><text x="28" y="145.5" text-anchor="end" fill="#4A4F57">40.0</text><line x1="36" x2="580" y1="78.0" y2="78.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="78.0" y2="78.0" stroke="#2B2F36"></line><text x="28" y="81.5" text-anchor="end" fill="#4A4F57">80.0</text><line x1="36" x2="580" y1="14.0" y2="14.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="14.0" y2="14.0" stroke="#2B2F36"></line><text x="28" y="17.5" text-anchor="end" fill="#4A4F57">120.0</text><line x1="36" x2="36" y1="14" y2="206" stroke="#2B2F36"></line><line x1="36" x2="580" y1="206" y2="206" stroke="#2B2F36"></line><text x="60.0" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Mon</text><text x="143.3" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Tue</text><text x="226.7" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Wed</text><text x="310.0" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Thu</text><text x="393.3" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Fri</text><text x="476.7" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Sat</text><text x="560.0" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Sun</text></g>
<path class="pp-fadein" d="M60.0 116.4C73.9 116.9 115.6 120.7 143.3 119.6C171.1 118.5 198.9 113.2 226.7 110.0C254.4 106.8 282.2 109.5 310.0 100.4C337.8 91.3 365.6 66.8 393.3 55.6C421.1 44.4 448.9 27.9 476.7 33.2C504.4 38.5 546.1 78.5 560.0 87.6L560.0 206L60.0 206Z" fill="#F8DADF"></path>
<path d="M60.0 84.4C73.9 84.4 115.6 84.4 143.3 84.4C171.1 84.4 198.9 84.4 226.7 84.4C254.4 84.4 282.2 84.4 310.0 84.4C337.8 84.4 365.6 82.8 393.3 84.4C421.1 86.0 448.9 90.3 476.7 94.0C504.4 97.7 546.1 104.7 560.0 106.8" fill="none" stroke="#E8705F" stroke-width="2.1" stroke-linejoin="round" stroke-dasharray="7 5" class="pp-fadein"></path>
<path class="pp-drawl" d="M60.0 122.8C73.9 123.3 115.6 127.1 143.3 126.0C171.1 124.9 198.9 119.6 226.7 116.4C254.4 113.2 282.2 115.9 310.0 106.8C337.8 97.7 365.6 73.2 393.3 62.0C421.1 50.8 448.9 34.3 476.7 39.6C504.4 44.9 546.1 84.9 560.0 94.0" pathLength="1" fill="none" stroke="#2A8AA8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
<path class="pp-drawl pp-late" d="M60.0 116.4C73.9 116.9 115.6 120.7 143.3 119.6C171.1 118.5 198.9 113.2 226.7 110.0C254.4 106.8 282.2 109.5 310.0 100.4C337.8 91.3 365.6 66.8 393.3 55.6C421.1 44.4 448.9 27.9 476.7 33.2C504.4 38.5 546.1 78.5 560.0 87.6" pathLength="1" fill="none" stroke="#D7263D" stroke-width="2.3" stroke-linejoin="round" stroke-linecap="round"></path>
<g class="pp-fadein pp-note"><line x1="476.7" x2="476.7" y1="94.0" y2="39.6" stroke="#4A4F57" stroke-width="1.6" stroke-dasharray="3 3"></line><line x1="476.7" x2="476.7" y1="100.0" y2="152.4" stroke="#4A4F57" stroke-width="1" opacity=".35"></line><circle cx="476.7" cy="39.6" r="4.5" fill="#2A8AA8" stroke="#FFFFFF" stroke-width="2"></circle><circle cx="476.7" cy="94.0" r="4.5" fill="#E8705F" stroke="#FFFFFF" stroke-width="2"></circle><rect x="407.7" y="152.4" width="138.0" height="22" rx="11" fill="#111111"></rect><text x="476.7" y="167.4" text-anchor="middle" font-family="Inter,system-ui,sans-serif" font-size="11" font-weight="600" fill="#FFFFFF">Saturday: 34 h short</text></g>
</svg>
<div style="display:flex;justify-content:center;gap:16px;padding:0 0 14px;font:400 11px/1 Inter,system-ui,sans-serif;color:#4A4F57"><span style="display:inline-flex;align-items:center;gap:6px"><i style="width:16px;height:2.5px;background:#D7263D;display:inline-block"></i>Optimized Actual</span><span style="display:inline-flex;align-items:center;gap:6px"><i style="width:16px;height:0;border-top:2.5px dashed #E8705F;display:inline-block"></i>Actual</span><span style="display:inline-flex;align-items:center;gap:6px"><i style="width:16px;height:2.5px;background:#2A8AA8;display:inline-block"></i>Need</span></div>
</div>
<div class="pp-ui pp-c2 pp-glass2" style="left:58.5%;width:36.5%">
<div class="pp-h" style="color:#FFFFFF"><span>Recommendation</span><span class="pp-rec-suggested"><i></i>Suggested by Workofo</span></div>
<div style="padding:0 16px 16px;display:flex;flex-direction:column;gap:10px;flex:1">
<div class="pp-rec pp-rec--data"><span class="pp-rec__label">Data shows</span><span class="pp-rec__body">Weekend dinners fill the floor. Saturday needs 104 h, 70 h are scheduled.</span></div>
<div class="pp-open"><div style="min-height:0;overflow:hidden;display:flex;flex-direction:column;gap:10px">
<div class="pp-rec pp-rec--fix"><span class="pp-rec__label">Workofo fixes</span><span class="pp-rec__body">Adds 68 h from Friday to Sunday, taken from Monday to Thursday. Total hours stay the same.</span></div>
<div style="display:flex;justify-content:flex-end;margin-top:auto"><span class="pp-rec-ready"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7ED39A" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"></path></svg>Ready to apply in one click</span></div>
</div></div>
</div>
</div>
</div></div>
<div class="uc-scene" data-k="1" hidden><div class="pp-scene">
<div class="pp-ui pp-c1" style="left:5%;width:52%">
<div class="pp-h" style="padding-bottom:4px"><span style="display:inline-flex;align-items:center;gap:8px">Workload coverage<span style="display:inline-flex;align-items:center;min-height:20px;padding:0 7px;border-radius:5px;background:#F2F2EE;color:#4A4F57;font:600 10.5px/1 Inter,system-ui,sans-serif">Kitchen · Example week</span></span></div>
<svg viewBox="0 0 600 236" style="width:100%;height:auto;display:block;padding:0 6px 8px;box-sizing:border-box" aria-hidden="true"><g font-family="Inter,system-ui,sans-serif" font-size="10.5" fill="#9A9FA8"><line x1="36" x2="580" y1="206.0" y2="206.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="206.0" y2="206.0" stroke="#2B2F36"></line><text x="28" y="209.5" text-anchor="end" fill="#4A4F57">0.0</text><line x1="36" x2="580" y1="142.0" y2="142.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="142.0" y2="142.0" stroke="#2B2F36"></line><text x="28" y="145.5" text-anchor="end" fill="#4A4F57">40.0</text><line x1="36" x2="580" y1="78.0" y2="78.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="78.0" y2="78.0" stroke="#2B2F36"></line><text x="28" y="81.5" text-anchor="end" fill="#4A4F57">80.0</text><line x1="36" x2="580" y1="14.0" y2="14.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="14.0" y2="14.0" stroke="#2B2F36"></line><text x="28" y="17.5" text-anchor="end" fill="#4A4F57">120.0</text><line x1="36" x2="36" y1="14" y2="206" stroke="#2B2F36"></line><line x1="36" x2="580" y1="206" y2="206" stroke="#2B2F36"></line><text x="60.0" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Mon</text><text x="143.3" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Tue</text><text x="226.7" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Wed</text><text x="310.0" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Thu</text><text x="393.3" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Fri</text><text x="476.7" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Sat</text><text x="560.0" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Sun</text></g>
<path class="pp-fadein" d="M60.0 106.8C73.9 107.3 115.6 110.5 143.3 110.0C171.1 109.5 198.9 106.3 226.7 103.6C254.4 100.9 282.2 99.3 310.0 94.0C337.8 88.7 365.6 76.4 393.3 71.6C421.1 66.8 448.9 69.5 476.7 65.2C504.4 60.9 546.1 49.2 560.0 46.0L560.0 206L60.0 206Z" fill="#F8DADF"></path>
<path d="M60.0 84.4C73.9 84.4 115.6 84.4 143.3 84.4C171.1 84.4 198.9 84.4 226.7 84.4C254.4 84.4 282.2 84.4 310.0 84.4C337.8 84.4 365.6 84.4 393.3 84.4C421.1 84.4 448.9 83.3 476.7 84.4C504.4 85.5 546.1 89.7 560.0 90.8" fill="none" stroke="#E8705F" stroke-width="2.1" stroke-linejoin="round" stroke-dasharray="7 5" class="pp-fadein"></path>
<path class="pp-drawl" d="M60.0 113.2C73.9 113.7 115.6 116.9 143.3 116.4C171.1 115.9 198.9 112.7 226.7 110.0C254.4 107.3 282.2 105.7 310.0 100.4C337.8 95.1 365.6 82.8 393.3 78.0C421.1 73.2 448.9 75.9 476.7 71.6C504.4 67.3 546.1 55.6 560.0 52.4" pathLength="1" fill="none" stroke="#2A8AA8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
<path class="pp-drawl pp-late" d="M60.0 106.8C73.9 107.3 115.6 110.5 143.3 110.0C171.1 109.5 198.9 106.3 226.7 103.6C254.4 100.9 282.2 99.3 310.0 94.0C337.8 88.7 365.6 76.4 393.3 71.6C421.1 66.8 448.9 69.5 476.7 65.2C504.4 60.9 546.1 49.2 560.0 46.0" pathLength="1" fill="none" stroke="#D7263D" stroke-width="2.3" stroke-linejoin="round" stroke-linecap="round"></path>
<g class="pp-fadein pp-note"><line x1="560.0" x2="560.0" y1="90.8" y2="52.4" stroke="#4A4F57" stroke-width="1.6" stroke-dasharray="3 3"></line><line x1="560.0" x2="560.0" y1="96.8" y2="152.4" stroke="#4A4F57" stroke-width="1" opacity=".35"></line><circle cx="560.0" cy="52.4" r="4.5" fill="#2A8AA8" stroke="#FFFFFF" stroke-width="2"></circle><circle cx="560.0" cy="90.8" r="4.5" fill="#E8705F" stroke="#FFFFFF" stroke-width="2"></circle><rect x="453.8" y="152.4" width="126.2" height="22" rx="11" fill="#111111"></rect><text x="516.9" y="167.4" text-anchor="middle" font-family="Inter,system-ui,sans-serif" font-size="11" font-weight="600" fill="#FFFFFF">Sunday: 24 h short</text></g>
</svg>
<div style="display:flex;justify-content:center;gap:16px;padding:0 0 14px;font:400 11px/1 Inter,system-ui,sans-serif;color:#4A4F57"><span style="display:inline-flex;align-items:center;gap:6px"><i style="width:16px;height:2.5px;background:#D7263D;display:inline-block"></i>Optimized Actual</span><span style="display:inline-flex;align-items:center;gap:6px"><i style="width:16px;height:0;border-top:2.5px dashed #E8705F;display:inline-block"></i>Actual</span><span style="display:inline-flex;align-items:center;gap:6px"><i style="width:16px;height:2.5px;background:#2A8AA8;display:inline-block"></i>Need</span></div>
</div>
<div class="pp-ui pp-c2 pp-glass2" style="left:58.5%;width:36.5%">
<div class="pp-h" style="color:#FFFFFF"><span>Recommendation</span><span class="pp-rec-suggested"><i></i>Suggested by Workofo</span></div>
<div style="padding:0 16px 16px;display:flex;flex-direction:column;gap:10px;flex:1">
<div class="pp-rec pp-rec--data"><span class="pp-rec__label">Data shows</span><span class="pp-rec__body">Weekend brunch makes Sunday the busiest kitchen day. 96 h are needed, 72 h are scheduled.</span></div>
<div class="pp-open"><div style="min-height:0;overflow:hidden;display:flex;flex-direction:column;gap:10px">
<div class="pp-rec pp-rec--fix"><span class="pp-rec__label">Workofo fixes</span><span class="pp-rec__body">Adds 48 h from Friday to Sunday, taken from Monday to Thursday. Total hours stay the same.</span></div>
<div style="display:flex;justify-content:flex-end;margin-top:auto"><span class="pp-rec-ready"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7ED39A" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"></path></svg>Ready to apply in one click</span></div>
</div></div>
</div>
</div>
</div></div>
<div class="uc-scene" data-k="2" hidden><div class="pp-scene">
<div class="pp-ui pp-c1" style="left:5%;width:52%">
<div class="pp-h" style="padding-bottom:4px"><span style="display:inline-flex;align-items:center;gap:8px">Workload coverage<span style="display:inline-flex;align-items:center;min-height:20px;padding:0 7px;border-radius:5px;background:#F2F2EE;color:#4A4F57;font:600 10.5px/1 Inter,system-ui,sans-serif">Bar · Example week</span></span></div>
<svg viewBox="0 0 600 236" style="width:100%;height:auto;display:block;padding:0 6px 8px;box-sizing:border-box" aria-hidden="true"><g font-family="Inter,system-ui,sans-serif" font-size="10.5" fill="#9A9FA8"><line x1="36" x2="580" y1="206.0" y2="206.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="206.0" y2="206.0" stroke="#2B2F36"></line><text x="28" y="209.5" text-anchor="end" fill="#4A4F57">0.0</text><line x1="36" x2="580" y1="142.0" y2="142.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="142.0" y2="142.0" stroke="#2B2F36"></line><text x="28" y="145.5" text-anchor="end" fill="#4A4F57">40.0</text><line x1="36" x2="580" y1="78.0" y2="78.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="78.0" y2="78.0" stroke="#2B2F36"></line><text x="28" y="81.5" text-anchor="end" fill="#4A4F57">80.0</text><line x1="36" x2="580" y1="14.0" y2="14.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="14.0" y2="14.0" stroke="#2B2F36"></line><text x="28" y="17.5" text-anchor="end" fill="#4A4F57">120.0</text><line x1="36" x2="36" y1="14" y2="206" stroke="#2B2F36"></line><line x1="36" x2="580" y1="206" y2="206" stroke="#2B2F36"></line><text x="60.0" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Mon</text><text x="143.3" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Tue</text><text x="226.7" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Wed</text><text x="310.0" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Thu</text><text x="393.3" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Fri</text><text x="476.7" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Sat</text><text x="560.0" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Sun</text></g>
<path class="pp-fadein" d="M60.0 151.6C73.9 151.1 115.6 150.0 143.3 148.4C171.1 146.8 198.9 145.2 226.7 142.0C254.4 138.8 282.2 142.5 310.0 129.2C337.8 115.9 365.6 69.5 393.3 62.0C421.1 54.5 448.9 72.1 476.7 84.4C504.4 96.7 546.1 127.1 560.0 135.6L560.0 206L60.0 206Z" fill="#F8DADF"></path>
<path d="M60.0 113.2C73.9 113.2 115.6 113.2 143.3 113.2C171.1 113.2 198.9 113.2 226.7 113.2C254.4 113.2 282.2 111.6 310.0 113.2C337.8 114.8 365.6 120.1 393.3 122.8C421.1 125.5 448.9 124.9 476.7 129.2C504.4 133.5 546.1 145.2 560.0 148.4" fill="none" stroke="#E8705F" stroke-width="2.1" stroke-linejoin="round" stroke-dasharray="7 5" class="pp-fadein"></path>
<path class="pp-drawl" d="M60.0 158.0C73.9 157.5 115.6 156.4 143.3 154.8C171.1 153.2 198.9 151.6 226.7 148.4C254.4 145.2 282.2 148.9 310.0 135.6C337.8 122.3 365.6 75.9 393.3 68.4C421.1 60.9 448.9 78.5 476.7 90.8C504.4 103.1 546.1 133.5 560.0 142.0" pathLength="1" fill="none" stroke="#2A8AA8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
<path class="pp-drawl pp-late" d="M60.0 151.6C73.9 151.1 115.6 150.0 143.3 148.4C171.1 146.8 198.9 145.2 226.7 142.0C254.4 138.8 282.2 142.5 310.0 129.2C337.8 115.9 365.6 69.5 393.3 62.0C421.1 54.5 448.9 72.1 476.7 84.4C504.4 96.7 546.1 127.1 560.0 135.6" pathLength="1" fill="none" stroke="#D7263D" stroke-width="2.3" stroke-linejoin="round" stroke-linecap="round"></path>
<g class="pp-fadein pp-note"><line x1="393.3" x2="393.3" y1="122.8" y2="68.4" stroke="#4A4F57" stroke-width="1.6" stroke-dasharray="3 3"></line><line x1="393.3" x2="393.3" y1="128.8" y2="152.4" stroke="#4A4F57" stroke-width="1" opacity=".35"></line><circle cx="393.3" cy="68.4" r="4.5" fill="#2A8AA8" stroke="#FFFFFF" stroke-width="2"></circle><circle cx="393.3" cy="122.8" r="4.5" fill="#E8705F" stroke="#FFFFFF" stroke-width="2"></circle><rect x="330.2" y="152.4" width="126.2" height="22" rx="11" fill="#111111"></rect><text x="393.3" y="167.4" text-anchor="middle" font-family="Inter,system-ui,sans-serif" font-size="11" font-weight="600" fill="#FFFFFF">Friday: 34 h short</text></g>
</svg>
<div style="display:flex;justify-content:center;gap:16px;padding:0 0 14px;font:400 11px/1 Inter,system-ui,sans-serif;color:#4A4F57"><span style="display:inline-flex;align-items:center;gap:6px"><i style="width:16px;height:2.5px;background:#D7263D;display:inline-block"></i>Optimized Actual</span><span style="display:inline-flex;align-items:center;gap:6px"><i style="width:16px;height:0;border-top:2.5px dashed #E8705F;display:inline-block"></i>Actual</span><span style="display:inline-flex;align-items:center;gap:6px"><i style="width:16px;height:2.5px;background:#2A8AA8;display:inline-block"></i>Need</span></div>
</div>
<div class="pp-ui pp-c2 pp-glass2" style="left:58.5%;width:36.5%">
<div class="pp-h" style="color:#FFFFFF"><span>Recommendation</span><span class="pp-rec-suggested"><i></i>Suggested by Workofo</span></div>
<div style="padding:0 16px 16px;display:flex;flex-direction:column;gap:10px;flex:1">
<div class="pp-rec pp-rec--data"><span class="pp-rec__label">Data shows</span><span class="pp-rec__body">After-work crowds peak on Friday. 86 h are needed, 52 h are scheduled.</span></div>
<div class="pp-open"><div style="min-height:0;overflow:hidden;display:flex;flex-direction:column;gap:10px">
<div class="pp-rec pp-rec--fix"><span class="pp-rec__label">Workofo fixes</span><span class="pp-rec__body">Adds 74 h from Friday to Sunday, taken from Monday to Thursday. Total hours stay the same.</span></div>
<div style="display:flex;justify-content:flex-end;margin-top:auto"><span class="pp-rec-ready"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7ED39A" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"></path></svg>Ready to apply in one click</span></div>
</div></div>
</div>
</div>
</div></div>
<div class="uc-scene" data-k="3" hidden><div class="pp-scene">
<div class="pp-ui pp-c1" style="left:5%;width:52%">
<div class="pp-h" style="padding-bottom:4px"><span style="display:inline-flex;align-items:center;gap:8px">Workload coverage<span style="display:inline-flex;align-items:center;min-height:20px;padding:0 7px;border-radius:5px;background:#F2F2EE;color:#4A4F57;font:600 10.5px/1 Inter,system-ui,sans-serif">Takeaway &amp; delivery · Example week</span></span></div>
<svg viewBox="0 0 600 236" style="width:100%;height:auto;display:block;padding:0 6px 8px;box-sizing:border-box" aria-hidden="true"><g font-family="Inter,system-ui,sans-serif" font-size="10.5" fill="#9A9FA8"><line x1="36" x2="580" y1="206.0" y2="206.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="206.0" y2="206.0" stroke="#2B2F36"></line><text x="28" y="209.5" text-anchor="end" fill="#4A4F57">0.0</text><line x1="36" x2="580" y1="142.0" y2="142.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="142.0" y2="142.0" stroke="#2B2F36"></line><text x="28" y="145.5" text-anchor="end" fill="#4A4F57">40.0</text><line x1="36" x2="580" y1="78.0" y2="78.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="78.0" y2="78.0" stroke="#2B2F36"></line><text x="28" y="81.5" text-anchor="end" fill="#4A4F57">80.0</text><line x1="36" x2="580" y1="14.0" y2="14.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="14.0" y2="14.0" stroke="#2B2F36"></line><text x="28" y="17.5" text-anchor="end" fill="#4A4F57">120.0</text><line x1="36" x2="36" y1="14" y2="206" stroke="#2B2F36"></line><line x1="36" x2="580" y1="206" y2="206" stroke="#2B2F36"></line><text x="60.0" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Mon</text><text x="143.3" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Tue</text><text x="226.7" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Wed</text><text x="310.0" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Thu</text><text x="393.3" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Fri</text><text x="476.7" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Sat</text><text x="560.0" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Sun</text></g>
<path class="pp-fadein" d="M60.0 129.2C73.9 128.7 115.6 127.6 143.3 126.0C171.1 124.4 198.9 128.1 226.7 119.6C254.4 111.1 282.2 77.5 310.0 74.8C337.8 72.1 365.6 96.7 393.3 103.6C421.1 110.5 448.9 115.3 476.7 116.4C504.4 117.5 546.1 111.1 560.0 110.0L560.0 206L60.0 206Z" fill="#F8DADF"></path>
<path d="M60.0 106.8C73.9 106.8 115.6 106.8 143.3 106.8C171.1 106.8 198.9 106.8 226.7 106.8C254.4 106.8 282.2 106.8 310.0 106.8C337.8 106.8 365.6 104.1 393.3 106.8C421.1 109.5 448.9 120.1 476.7 122.8C504.4 125.5 546.1 122.8 560.0 122.8" fill="none" stroke="#E8705F" stroke-width="2.1" stroke-linejoin="round" stroke-dasharray="7 5" class="pp-fadein"></path>
<path class="pp-drawl" d="M60.0 135.6C73.9 135.1 115.6 134.0 143.3 132.4C171.1 130.8 198.9 134.5 226.7 126.0C254.4 117.5 282.2 83.9 310.0 81.2C337.8 78.5 365.6 103.1 393.3 110.0C421.1 116.9 448.9 121.7 476.7 122.8C504.4 123.9 546.1 117.5 560.0 116.4" pathLength="1" fill="none" stroke="#2A8AA8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
<path class="pp-drawl pp-late" d="M60.0 129.2C73.9 128.7 115.6 127.6 143.3 126.0C171.1 124.4 198.9 128.1 226.7 119.6C254.4 111.1 282.2 77.5 310.0 74.8C337.8 72.1 365.6 96.7 393.3 103.6C421.1 110.5 448.9 115.3 476.7 116.4C504.4 117.5 546.1 111.1 560.0 110.0" pathLength="1" fill="none" stroke="#D7263D" stroke-width="2.3" stroke-linejoin="round" stroke-linecap="round"></path>
<g class="pp-fadein pp-note"><line x1="310.0" x2="310.0" y1="106.8" y2="81.2" stroke="#4A4F57" stroke-width="1.6" stroke-dasharray="3 3"></line><line x1="310.0" x2="310.0" y1="112.8" y2="152.4" stroke="#4A4F57" stroke-width="1" opacity=".35"></line><circle cx="310.0" cy="81.2" r="4.5" fill="#2A8AA8" stroke="#FFFFFF" stroke-width="2"></circle><circle cx="310.0" cy="106.8" r="4.5" fill="#E8705F" stroke="#FFFFFF" stroke-width="2"></circle><rect x="241.0" y="152.4" width="138.0" height="22" rx="11" fill="#111111"></rect><text x="310.0" y="167.4" text-anchor="middle" font-family="Inter,system-ui,sans-serif" font-size="11" font-weight="600" fill="#FFFFFF">Thursday: 16 h short</text></g>
</svg>
<div style="display:flex;justify-content:center;gap:16px;padding:0 0 14px;font:400 11px/1 Inter,system-ui,sans-serif;color:#4A4F57"><span style="display:inline-flex;align-items:center;gap:6px"><i style="width:16px;height:2.5px;background:#D7263D;display:inline-block"></i>Optimized Actual</span><span style="display:inline-flex;align-items:center;gap:6px"><i style="width:16px;height:0;border-top:2.5px dashed #E8705F;display:inline-block"></i>Actual</span><span style="display:inline-flex;align-items:center;gap:6px"><i style="width:16px;height:2.5px;background:#2A8AA8;display:inline-block"></i>Need</span></div>
</div>
<div class="pp-ui pp-c2 pp-glass2" style="left:58.5%;width:36.5%">
<div class="pp-h" style="color:#FFFFFF"><span>Recommendation</span><span class="pp-rec-suggested"><i></i>Suggested by Workofo</span></div>
<div style="padding:0 16px 16px;display:flex;flex-direction:column;gap:10px;flex:1">
<div class="pp-rec pp-rec--data"><span class="pp-rec__label">Data shows</span><span class="pp-rec__body">A weekly app promotion lifts Thursday orders. 78 h are needed, 62 h are scheduled.</span></div>
<div class="pp-open"><div style="min-height:0;overflow:hidden;display:flex;flex-direction:column;gap:10px">
<div class="pp-rec pp-rec--fix"><span class="pp-rec__label">Workofo fixes</span><span class="pp-rec__body">Adds 34 h from Thursday to Sunday, taken from Monday to Wednesday. Total hours stay the same.</span></div>
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

export default function RestaurantsPanel() {
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
