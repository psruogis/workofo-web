export type RuleOption = 0 | 1 | 2;
export function capacityEstimate(monthlyHours: number, hourlyRate: number, share: number, shift: RuleOption, days: RuleOption, mobility: RuleOption) {
  const positive = (n: number) => Number.isFinite(n) ? Math.max(0, n) : 0;
  const base = 17 - shift - [0, 2, 3][days] - [0, 2, 3][mobility];
  // Match the original: round percentage first, then hours, then monthly EUR.
  const percent = Math.round(base * Math.min(100, positive(share)) / 100);
  const hours = Math.round(positive(monthlyHours) * percent / 100);
  const value = Math.round(hours * positive(hourlyRate));
  return { percent, hours, value };
}
