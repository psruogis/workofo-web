/**
 * Aviation teams graphic - adapted from Aviation.dc.html / aviation-panel extract.
 * Markup/CSS/motion from the artboard; manual tabs only (no auto-advance); US spelling labor.
 */

import { useEffect, useRef } from 'react';

const ARTBOARD_HTML = `<div class="pp-panel wait" id="uc" style="aspect-ratio:2.4 / 1" aria-label="Aviation examples: demand compared with scheduled staff for one team, and how Workofo adjusts the schedule.">
<span class="pp-blob pp-b1"></span><span class="pp-blob pp-b2"></span><span class="pp-blob pp-b3"></span><span class="pp-blob pp-b4"></span><span class="pp-grain"></span>
<div class="pp-tabs" role="tablist" aria-label="Choose a team"><button type="button" class="tab" data-k="0" aria-pressed="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 16l20-8-6 10-3-3-4 3 1-5z"></path></svg>Ramp services</button><button type="button" class="tab" data-k="1" aria-pressed="false"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="6" width="18" height="12" rx="2"></rect><path d="M7 10h6M7 14h4"></path><circle cx="17" cy="12" r="1.5"></circle></svg>Check-in</button><button type="button" class="tab" data-k="2" aria-pressed="false"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z"></path></svg>Security</button><button type="button" class="tab" data-k="3" aria-pressed="false"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="6" y="7" width="12" height="13" rx="2"></rect><path d="M9 7V4h6v3M9 20v1M15 20v1"></path></svg>Baggage handling</button></div>
<div aria-live="polite">
<div class="uc-scene" data-k="0"><div class="pp-scene">
<div class="pp-ui pp-c1" style="left:5%;width:52%">
<div class="pp-h" style="padding-bottom:4px"><span style="display:inline-flex;align-items:center;gap:8px">Workload coverage<span style="display:inline-flex;align-items:center;min-height:20px;padding:0 7px;border-radius:5px;background:#F2F2EE;color:#4A4F57;font:600 10.5px/1 Inter,system-ui,sans-serif">Ramp services · Example week</span></span></div>
<svg viewBox="0 0 600 236" style="width:100%;height:auto;display:block;padding:0 6px 8px;box-sizing:border-box" aria-hidden="true"><g font-family="Inter,system-ui,sans-serif" font-size="10.5" fill="#9A9FA8"><line x1="36" x2="580" y1="206.0" y2="206.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="206.0" y2="206.0" stroke="#2B2F36"></line><text x="28" y="209.5" text-anchor="end" fill="#4A4F57">0.0</text><line x1="36" x2="580" y1="142.0" y2="142.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="142.0" y2="142.0" stroke="#2B2F36"></line><text x="28" y="145.5" text-anchor="end" fill="#4A4F57">40.0</text><line x1="36" x2="580" y1="78.0" y2="78.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="78.0" y2="78.0" stroke="#2B2F36"></line><text x="28" y="81.5" text-anchor="end" fill="#4A4F57">80.0</text><line x1="36" x2="580" y1="14.0" y2="14.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="14.0" y2="14.0" stroke="#2B2F36"></line><text x="28" y="17.5" text-anchor="end" fill="#4A4F57">120.0</text><line x1="36" x2="36" y1="14" y2="206" stroke="#2B2F36"></line><line x1="36" x2="580" y1="206" y2="206" stroke="#2B2F36"></line><text x="60.0" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Mon</text><text x="143.3" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Tue</text><text x="226.7" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Wed</text><text x="310.0" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Thu</text><text x="393.3" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Fri</text><text x="476.7" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Sat</text><text x="560.0" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Sun</text></g>
<path class="pp-fadein" d="M60.0 87.6C73.9 89.7 115.6 98.8 143.3 100.4C171.1 102.0 198.9 99.9 226.7 97.2C254.4 94.5 282.2 93.5 310.0 84.4C337.8 75.3 365.6 44.9 393.3 42.8C421.1 40.7 448.9 71.1 476.7 71.6C504.4 72.1 546.1 50.3 560.0 46.0L560.0 206L60.0 206Z" fill="#F8DADF"></path>
<path d="M60.0 74.8C73.9 74.8 115.6 74.8 143.3 74.8C171.1 74.8 198.9 74.8 226.7 74.8C254.4 74.8 282.2 74.8 310.0 74.8C337.8 74.8 365.6 74.3 393.3 74.8C421.1 75.3 448.9 77.5 476.7 78.0C504.4 78.5 546.1 78.0 560.0 78.0" fill="none" stroke="#E8705F" stroke-width="2.1" stroke-linejoin="round" stroke-dasharray="7 5" class="pp-fadein"></path>
<path class="pp-drawl" d="M60.0 94.0C73.9 96.1 115.6 105.2 143.3 106.8C171.1 108.4 198.9 106.3 226.7 103.6C254.4 100.9 282.2 99.9 310.0 90.8C337.8 81.7 365.6 51.3 393.3 49.2C421.1 47.1 448.9 77.5 476.7 78.0C504.4 78.5 546.1 56.7 560.0 52.4" pathLength="1" fill="none" stroke="#2A8AA8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
<path class="pp-drawl pp-late" d="M60.0 87.6C73.9 89.7 115.6 98.8 143.3 100.4C171.1 102.0 198.9 99.9 226.7 97.2C254.4 94.5 282.2 93.5 310.0 84.4C337.8 75.3 365.6 44.9 393.3 42.8C421.1 40.7 448.9 71.1 476.7 71.6C504.4 72.1 546.1 50.3 560.0 46.0" pathLength="1" fill="none" stroke="#D7263D" stroke-width="2.3" stroke-linejoin="round" stroke-linecap="round"></path>
<g class="pp-fadein pp-note"><line x1="393.3" x2="393.3" y1="74.8" y2="49.2" stroke="#4A4F57" stroke-width="1.6" stroke-dasharray="3 3"></line><line x1="393.3" x2="393.3" y1="80.8" y2="152.4" stroke="#4A4F57" stroke-width="1" opacity=".35"></line><circle cx="393.3" cy="49.2" r="4.5" fill="#2A8AA8" stroke="#FFFFFF" stroke-width="2"></circle><circle cx="393.3" cy="74.8" r="4.5" fill="#E8705F" stroke="#FFFFFF" stroke-width="2"></circle><rect x="330.2" y="152.4" width="126.2" height="22" rx="11" fill="#111111"></rect><text x="393.3" y="167.4" text-anchor="middle" font-family="Inter,system-ui,sans-serif" font-size="11" font-weight="600" fill="#FFFFFF">Friday: 16 h short</text></g>
</svg>
<div style="display:flex;justify-content:center;gap:16px;padding:0 0 14px;font:400 11px/1 Inter,system-ui,sans-serif;color:#4A4F57"><span style="display:inline-flex;align-items:center;gap:6px"><i style="width:16px;height:2.5px;background:#D7263D;display:inline-block"></i>Optimized Actual</span><span style="display:inline-flex;align-items:center;gap:6px"><i style="width:16px;height:0;border-top:2.5px dashed #E8705F;display:inline-block"></i>Actual</span><span style="display:inline-flex;align-items:center;gap:6px"><i style="width:16px;height:2.5px;background:#2A8AA8;display:inline-block"></i>Need</span></div>
</div>
<div class="pp-ui pp-c2 pp-glass2" style="left:58.5%;width:36.5%">
<div class="pp-h" style="color:#FFFFFF"><span>Recommendation</span><span class="pp-rec-suggested"><i></i>Suggested by Workofo</span></div>
<div style="padding:0 16px 16px;display:flex;flex-direction:column;gap:10px;flex:1">
<div class="pp-rec pp-rec--data"><span class="pp-rec__label">Data shows</span><span class="pp-rec__body">Leisure flights peak on Fridays and Sundays. Friday needs 98 h, 82 h are scheduled.</span></div>
<div class="pp-open"><div style="min-height:0;overflow:hidden;display:flex;flex-direction:column;gap:10px">
<div class="pp-rec pp-rec--fix"><span class="pp-rec__label">Workofo fixes</span><span class="pp-rec__body">Adds 40 h on Friday and Sunday, taken from Monday to Thursday. Total hours stay the same.</span></div>
<div style="display:flex;justify-content:flex-end;margin-top:auto"><span class="pp-rec-ready"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7ED39A" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"></path></svg>Ready to apply in one click</span></div>
</div></div>
</div>
</div>
</div></div>
<div class="uc-scene" data-k="1" hidden><div class="pp-scene">
<div class="pp-ui pp-c1" style="left:5%;width:52%">
<div class="pp-h" style="padding-bottom:4px"><span style="display:inline-flex;align-items:center;gap:8px">Workload coverage<span style="display:inline-flex;align-items:center;min-height:20px;padding:0 7px;border-radius:5px;background:#F2F2EE;color:#4A4F57;font:600 10.5px/1 Inter,system-ui,sans-serif">Check-in · Example week</span></span></div>
<svg viewBox="0 0 600 236" style="width:100%;height:auto;display:block;padding:0 6px 8px;box-sizing:border-box" aria-hidden="true"><g font-family="Inter,system-ui,sans-serif" font-size="10.5" fill="#9A9FA8"><line x1="36" x2="580" y1="206.0" y2="206.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="206.0" y2="206.0" stroke="#2B2F36"></line><text x="28" y="209.5" text-anchor="end" fill="#4A4F57">0.0</text><line x1="36" x2="580" y1="142.0" y2="142.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="142.0" y2="142.0" stroke="#2B2F36"></line><text x="28" y="145.5" text-anchor="end" fill="#4A4F57">40.0</text><line x1="36" x2="580" y1="78.0" y2="78.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="78.0" y2="78.0" stroke="#2B2F36"></line><text x="28" y="81.5" text-anchor="end" fill="#4A4F57">80.0</text><line x1="36" x2="580" y1="14.0" y2="14.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="14.0" y2="14.0" stroke="#2B2F36"></line><text x="28" y="17.5" text-anchor="end" fill="#4A4F57">120.0</text><line x1="36" x2="36" y1="14" y2="206" stroke="#2B2F36"></line><line x1="36" x2="580" y1="206" y2="206" stroke="#2B2F36"></line><text x="60.0" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Mon</text><text x="143.3" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Tue</text><text x="226.7" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Wed</text><text x="310.0" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Thu</text><text x="393.3" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Fri</text><text x="476.7" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Sat</text><text x="560.0" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Sun</text></g>
<path class="pp-fadein" d="M60.0 46.0C73.9 51.9 115.6 74.3 143.3 81.2C171.1 88.1 198.9 87.1 226.7 87.6C254.4 88.1 282.2 89.7 310.0 84.4C337.8 79.1 365.6 51.9 393.3 55.6C421.1 59.3 448.9 100.4 476.7 106.8C504.4 113.2 546.1 96.1 560.0 94.0L560.0 206L60.0 206Z" fill="#F8DADF"></path>
<path d="M60.0 71.6C73.9 71.6 115.6 71.6 143.3 71.6C171.1 71.6 198.9 71.6 226.7 71.6C254.4 71.6 282.2 71.6 310.0 71.6C337.8 71.6 365.6 65.7 393.3 71.6C421.1 77.5 448.9 103.6 476.7 106.8C504.4 110.0 546.1 93.5 560.0 90.8" fill="none" stroke="#E8705F" stroke-width="2.1" stroke-linejoin="round" stroke-dasharray="7 5" class="pp-fadein"></path>
<path class="pp-drawl" d="M60.0 52.4C73.9 58.3 115.6 80.7 143.3 87.6C171.1 94.5 198.9 93.5 226.7 94.0C254.4 94.5 282.2 96.1 310.0 90.8C337.8 85.5 365.6 58.3 393.3 62.0C421.1 65.7 448.9 106.8 476.7 113.2C504.4 119.6 546.1 102.5 560.0 100.4" pathLength="1" fill="none" stroke="#2A8AA8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
<path class="pp-drawl pp-late" d="M60.0 46.0C73.9 51.9 115.6 74.3 143.3 81.2C171.1 88.1 198.9 87.1 226.7 87.6C254.4 88.1 282.2 89.7 310.0 84.4C337.8 79.1 365.6 51.9 393.3 55.6C421.1 59.3 448.9 100.4 476.7 106.8C504.4 113.2 546.1 96.1 560.0 94.0" pathLength="1" fill="none" stroke="#D7263D" stroke-width="2.3" stroke-linejoin="round" stroke-linecap="round"></path>
<g class="pp-fadein pp-note"><line x1="60.0" x2="60.0" y1="71.6" y2="52.4" stroke="#4A4F57" stroke-width="1.6" stroke-dasharray="3 3"></line><line x1="60.0" x2="60.0" y1="77.6" y2="152.4" stroke="#4A4F57" stroke-width="1" opacity=".35"></line><circle cx="60.0" cy="52.4" r="4.5" fill="#2A8AA8" stroke="#FFFFFF" stroke-width="2"></circle><circle cx="60.0" cy="71.6" r="4.5" fill="#E8705F" stroke="#FFFFFF" stroke-width="2"></circle><rect x="40.0" y="152.4" width="126.2" height="22" rx="11" fill="#111111"></rect><text x="103.1" y="167.4" text-anchor="middle" font-family="Inter,system-ui,sans-serif" font-size="11" font-weight="600" fill="#FFFFFF">Monday: 12 h short</text></g>
</svg>
<div style="display:flex;justify-content:center;gap:16px;padding:0 0 14px;font:400 11px/1 Inter,system-ui,sans-serif;color:#4A4F57"><span style="display:inline-flex;align-items:center;gap:6px"><i style="width:16px;height:2.5px;background:#D7263D;display:inline-block"></i>Optimized Actual</span><span style="display:inline-flex;align-items:center;gap:6px"><i style="width:16px;height:0;border-top:2.5px dashed #E8705F;display:inline-block"></i>Actual</span><span style="display:inline-flex;align-items:center;gap:6px"><i style="width:16px;height:2.5px;background:#2A8AA8;display:inline-block"></i>Need</span></div>
</div>
<div class="pp-ui pp-c2 pp-glass2" style="left:58.5%;width:36.5%">
<div class="pp-h" style="color:#FFFFFF"><span>Recommendation</span><span class="pp-rec-suggested"><i></i>Suggested by Workofo</span></div>
<div style="padding:0 16px 16px;display:flex;flex-direction:column;gap:10px;flex:1">
<div class="pp-rec pp-rec--data"><span class="pp-rec__label">Data shows</span><span class="pp-rec__body">Business travel peaks on Monday mornings. Monday needs 96 h, 84 h are scheduled.</span></div>
<div class="pp-open"><div style="min-height:0;overflow:hidden;display:flex;flex-direction:column;gap:10px">
<div class="pp-rec pp-rec--fix"><span class="pp-rec__label">Workofo fixes</span><span class="pp-rec__body">Adds 26 h on Monday and Friday, taken from Tuesday to Thursday. Total hours stay the same.</span></div>
<div style="display:flex;justify-content:flex-end;margin-top:auto"><span class="pp-rec-ready"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7ED39A" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"></path></svg>Ready to apply in one click</span></div>
</div></div>
</div>
</div>
</div></div>
<div class="uc-scene" data-k="2" hidden><div class="pp-scene">
<div class="pp-ui pp-c1" style="left:5%;width:52%">
<div class="pp-h" style="padding-bottom:4px"><span style="display:inline-flex;align-items:center;gap:8px">Workload coverage<span style="display:inline-flex;align-items:center;min-height:20px;padding:0 7px;border-radius:5px;background:#F2F2EE;color:#4A4F57;font:600 10.5px/1 Inter,system-ui,sans-serif">Security · Example week</span></span></div>
<svg viewBox="0 0 600 236" style="width:100%;height:auto;display:block;padding:0 6px 8px;box-sizing:border-box" aria-hidden="true"><g font-family="Inter,system-ui,sans-serif" font-size="10.5" fill="#9A9FA8"><line x1="36" x2="580" y1="206.0" y2="206.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="206.0" y2="206.0" stroke="#2B2F36"></line><text x="28" y="209.5" text-anchor="end" fill="#4A4F57">0.0</text><line x1="36" x2="580" y1="142.0" y2="142.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="142.0" y2="142.0" stroke="#2B2F36"></line><text x="28" y="145.5" text-anchor="end" fill="#4A4F57">40.0</text><line x1="36" x2="580" y1="78.0" y2="78.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="78.0" y2="78.0" stroke="#2B2F36"></line><text x="28" y="81.5" text-anchor="end" fill="#4A4F57">80.0</text><line x1="36" x2="580" y1="14.0" y2="14.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="14.0" y2="14.0" stroke="#2B2F36"></line><text x="28" y="17.5" text-anchor="end" fill="#4A4F57">120.0</text><line x1="36" x2="36" y1="14" y2="206" stroke="#2B2F36"></line><line x1="36" x2="580" y1="206" y2="206" stroke="#2B2F36"></line><text x="60.0" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Mon</text><text x="143.3" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Tue</text><text x="226.7" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Wed</text><text x="310.0" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Thu</text><text x="393.3" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Fri</text><text x="476.7" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Sat</text><text x="560.0" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Sun</text></g>
<path class="pp-fadein" d="M60.0 71.6C73.9 74.3 115.6 84.4 143.3 87.6C171.1 90.8 198.9 91.3 226.7 90.8C254.4 90.3 282.2 89.7 310.0 84.4C337.8 79.1 365.6 67.3 393.3 58.8C421.1 50.3 448.9 31.6 476.7 33.2C504.4 34.8 546.1 62.5 560.0 68.4L560.0 206L60.0 206Z" fill="#F8DADF"></path>
<path d="M60.0 68.4C73.9 68.4 115.6 68.4 143.3 68.4C171.1 68.4 198.9 68.4 226.7 68.4C254.4 68.4 282.2 68.4 310.0 68.4C337.8 68.4 365.6 67.9 393.3 68.4C421.1 68.9 448.9 69.5 476.7 71.6C504.4 73.7 546.1 79.6 560.0 81.2" fill="none" stroke="#E8705F" stroke-width="2.1" stroke-linejoin="round" stroke-dasharray="7 5" class="pp-fadein"></path>
<path class="pp-drawl" d="M60.0 78.0C73.9 80.7 115.6 90.8 143.3 94.0C171.1 97.2 198.9 97.7 226.7 97.2C254.4 96.7 282.2 96.1 310.0 90.8C337.8 85.5 365.6 73.7 393.3 65.2C421.1 56.7 448.9 38.0 476.7 39.6C504.4 41.2 546.1 68.9 560.0 74.8" pathLength="1" fill="none" stroke="#2A8AA8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
<path class="pp-drawl pp-late" d="M60.0 71.6C73.9 74.3 115.6 84.4 143.3 87.6C171.1 90.8 198.9 91.3 226.7 90.8C254.4 90.3 282.2 89.7 310.0 84.4C337.8 79.1 365.6 67.3 393.3 58.8C421.1 50.3 448.9 31.6 476.7 33.2C504.4 34.8 546.1 62.5 560.0 68.4" pathLength="1" fill="none" stroke="#D7263D" stroke-width="2.3" stroke-linejoin="round" stroke-linecap="round"></path>
<g class="pp-fadein pp-note"><line x1="476.7" x2="476.7" y1="71.6" y2="39.6" stroke="#4A4F57" stroke-width="1.6" stroke-dasharray="3 3"></line><line x1="476.7" x2="476.7" y1="77.6" y2="152.4" stroke="#4A4F57" stroke-width="1" opacity=".35"></line><circle cx="476.7" cy="39.6" r="4.5" fill="#2A8AA8" stroke="#FFFFFF" stroke-width="2"></circle><circle cx="476.7" cy="71.6" r="4.5" fill="#E8705F" stroke="#FFFFFF" stroke-width="2"></circle><rect x="407.7" y="152.4" width="138.0" height="22" rx="11" fill="#111111"></rect><text x="476.7" y="167.4" text-anchor="middle" font-family="Inter,system-ui,sans-serif" font-size="11" font-weight="600" fill="#FFFFFF">Saturday: 20 h short</text></g>
</svg>
<div style="display:flex;justify-content:center;gap:16px;padding:0 0 14px;font:400 11px/1 Inter,system-ui,sans-serif;color:#4A4F57"><span style="display:inline-flex;align-items:center;gap:6px"><i style="width:16px;height:2.5px;background:#D7263D;display:inline-block"></i>Optimized Actual</span><span style="display:inline-flex;align-items:center;gap:6px"><i style="width:16px;height:0;border-top:2.5px dashed #E8705F;display:inline-block"></i>Actual</span><span style="display:inline-flex;align-items:center;gap:6px"><i style="width:16px;height:2.5px;background:#2A8AA8;display:inline-block"></i>Need</span></div>
</div>
<div class="pp-ui pp-c2 pp-glass2" style="left:58.5%;width:36.5%">
<div class="pp-h" style="color:#FFFFFF"><span>Recommendation</span><span class="pp-rec-suggested"><i></i>Suggested by Workofo</span></div>
<div style="padding:0 16px 16px;display:flex;flex-direction:column;gap:10px;flex:1">
<div class="pp-rec pp-rec--data"><span class="pp-rec__label">Data shows</span><span class="pp-rec__body">Holiday departures make Saturday the busiest day. 104 h are needed, 84 h are scheduled.</span></div>
<div class="pp-open"><div style="min-height:0;overflow:hidden;display:flex;flex-direction:column;gap:10px">
<div class="pp-rec pp-rec--fix"><span class="pp-rec__label">Workofo fixes</span><span class="pp-rec__body">Adds 38 h from Friday to Sunday, taken from Monday to Thursday. Total hours stay the same.</span></div>
<div style="display:flex;justify-content:flex-end;margin-top:auto"><span class="pp-rec-ready"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7ED39A" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"></path></svg>Ready to apply in one click</span></div>
</div></div>
</div>
</div>
</div></div>
<div class="uc-scene" data-k="3" hidden><div class="pp-scene">
<div class="pp-ui pp-c1" style="left:5%;width:52%">
<div class="pp-h" style="padding-bottom:4px"><span style="display:inline-flex;align-items:center;gap:8px">Workload coverage<span style="display:inline-flex;align-items:center;min-height:20px;padding:0 7px;border-radius:5px;background:#F2F2EE;color:#4A4F57;font:600 10.5px/1 Inter,system-ui,sans-serif">Baggage handling · Example week</span></span></div>
<svg viewBox="0 0 600 236" style="width:100%;height:auto;display:block;padding:0 6px 8px;box-sizing:border-box" aria-hidden="true"><g font-family="Inter,system-ui,sans-serif" font-size="10.5" fill="#9A9FA8"><line x1="36" x2="580" y1="206.0" y2="206.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="206.0" y2="206.0" stroke="#2B2F36"></line><text x="28" y="209.5" text-anchor="end" fill="#4A4F57">0.0</text><line x1="36" x2="580" y1="142.0" y2="142.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="142.0" y2="142.0" stroke="#2B2F36"></line><text x="28" y="145.5" text-anchor="end" fill="#4A4F57">40.0</text><line x1="36" x2="580" y1="78.0" y2="78.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="78.0" y2="78.0" stroke="#2B2F36"></line><text x="28" y="81.5" text-anchor="end" fill="#4A4F57">80.0</text><line x1="36" x2="580" y1="14.0" y2="14.0" stroke="#E4E4E0"></line><line x1="32" x2="36" y1="14.0" y2="14.0" stroke="#2B2F36"></line><text x="28" y="17.5" text-anchor="end" fill="#4A4F57">120.0</text><line x1="36" x2="36" y1="14" y2="206" stroke="#2B2F36"></line><line x1="36" x2="580" y1="206" y2="206" stroke="#2B2F36"></line><text x="60.0" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Mon</text><text x="143.3" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Tue</text><text x="226.7" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Wed</text><text x="310.0" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Thu</text><text x="393.3" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Fri</text><text x="476.7" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Sat</text><text x="560.0" y="224" text-anchor="middle" font-size="11" fill="#4A4F57">Sun</text></g>
<path class="pp-fadein" d="M60.0 78.0C73.9 82.3 115.6 98.8 143.3 103.6C171.1 108.4 198.9 107.3 226.7 106.8C254.4 106.3 282.2 104.7 310.0 100.4C337.8 96.1 365.6 83.3 393.3 81.2C421.1 79.1 448.9 94.5 476.7 87.6C504.4 80.7 546.1 47.6 560.0 39.6L560.0 206L60.0 206Z" fill="#F8DADF"></path>
<path d="M60.0 84.4C73.9 84.4 115.6 84.4 143.3 84.4C171.1 84.4 198.9 84.4 226.7 84.4C254.4 84.4 282.2 84.4 310.0 84.4C337.8 84.4 365.6 83.9 393.3 84.4C421.1 84.9 448.9 87.1 476.7 87.6C504.4 88.1 546.1 87.6 560.0 87.6" fill="none" stroke="#E8705F" stroke-width="2.1" stroke-linejoin="round" stroke-dasharray="7 5" class="pp-fadein"></path>
<path class="pp-drawl" d="M60.0 84.4C73.9 88.7 115.6 105.2 143.3 110.0C171.1 114.8 198.9 113.7 226.7 113.2C254.4 112.7 282.2 111.1 310.0 106.8C337.8 102.5 365.6 89.7 393.3 87.6C421.1 85.5 448.9 100.9 476.7 94.0C504.4 87.1 546.1 54.0 560.0 46.0" pathLength="1" fill="none" stroke="#2A8AA8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
<path class="pp-drawl pp-late" d="M60.0 78.0C73.9 82.3 115.6 98.8 143.3 103.6C171.1 108.4 198.9 107.3 226.7 106.8C254.4 106.3 282.2 104.7 310.0 100.4C337.8 96.1 365.6 83.3 393.3 81.2C421.1 79.1 448.9 94.5 476.7 87.6C504.4 80.7 546.1 47.6 560.0 39.6" pathLength="1" fill="none" stroke="#D7263D" stroke-width="2.3" stroke-linejoin="round" stroke-linecap="round"></path>
<g class="pp-fadein pp-note"><line x1="560.0" x2="560.0" y1="87.6" y2="46.0" stroke="#4A4F57" stroke-width="1.6" stroke-dasharray="3 3"></line><line x1="560.0" x2="560.0" y1="93.6" y2="152.4" stroke="#4A4F57" stroke-width="1" opacity=".35"></line><circle cx="560.0" cy="46.0" r="4.5" fill="#2A8AA8" stroke="#FFFFFF" stroke-width="2"></circle><circle cx="560.0" cy="87.6" r="4.5" fill="#E8705F" stroke="#FFFFFF" stroke-width="2"></circle><rect x="453.8" y="152.4" width="126.2" height="22" rx="11" fill="#111111"></rect><text x="516.9" y="167.4" text-anchor="middle" font-family="Inter,system-ui,sans-serif" font-size="11" font-weight="600" fill="#FFFFFF">Sunday: 26 h short</text></g>
</svg>
<div style="display:flex;justify-content:center;gap:16px;padding:0 0 14px;font:400 11px/1 Inter,system-ui,sans-serif;color:#4A4F57"><span style="display:inline-flex;align-items:center;gap:6px"><i style="width:16px;height:2.5px;background:#D7263D;display:inline-block"></i>Optimized Actual</span><span style="display:inline-flex;align-items:center;gap:6px"><i style="width:16px;height:0;border-top:2.5px dashed #E8705F;display:inline-block"></i>Actual</span><span style="display:inline-flex;align-items:center;gap:6px"><i style="width:16px;height:2.5px;background:#2A8AA8;display:inline-block"></i>Need</span></div>
</div>
<div class="pp-ui pp-c2 pp-glass2" style="left:58.5%;width:36.5%">
<div class="pp-h" style="color:#FFFFFF"><span>Recommendation</span><span class="pp-rec-suggested"><i></i>Suggested by Workofo</span></div>
<div style="padding:0 16px 16px;display:flex;flex-direction:column;gap:10px;flex:1">
<div class="pp-rec pp-rec--data"><span class="pp-rec__label">Data shows</span><span class="pp-rec__body">Return flights land on Sunday evening. 100 h are needed, 74 h are scheduled.</span></div>
<div class="pp-open"><div style="min-height:0;overflow:hidden;display:flex;flex-direction:column;gap:10px">
<div class="pp-rec pp-rec--fix"><span class="pp-rec__label">Workofo fixes</span><span class="pp-rec__body">Adds 30 h on Sunday, taken from Tuesday to Thursday. Total hours stay the same.</span></div>
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

export default function AviationPanel() {
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
