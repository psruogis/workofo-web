# Optimisation calculator

The page at `/calculator` (Swedish `/se/kalkylator`) follows the existing
calculator at https://www.workofo.com/calculator, checked 10 November 2026.

Inputs: monthly employee hours, EUR hourly rate, proportion of time above
minimum staffing (0–100%), shift length, consecutive working days and mobility
between departments/sites.

Base percentage is 17 minus penalties for the selected rules:

| Rule | First option | Second option | Third option |
| --- | --- | --- | --- |
| Shift length: 4–12.5, 6–10, 7–9 hours | 0 | 1 | 2 |
| Consecutive days: up to 6, 5, 4 | 0 | 2 | 3 |
| Mobility: most staff, a few, exceptional | 0 | 2 | 3 |

Round base × staffing proportion to a whole percent, then round monthly hours
× that percent to whole hours, then round those hours × hourly rate to euros.
Preserving this order matters: 1,005 hours × 9% rounds to 90 hours, and
90 × EUR 8.75 rounds to EUR 788, matching the reference.

All 27 combinations were checked at a staffing proportion of 100%. Additional
checks cover the default 3,000 hours / EUR 8 / 70% (12%, 360 h, EUR 2,880),
50% staffing (9%, 270 h, EUR 2,160), restrictive rules, and zero values.
The typical 5–15% interval is explanatory, not a numerical cap: the original
can return 0–17%. Outputs are indicative redistribution/optimisation potential.
