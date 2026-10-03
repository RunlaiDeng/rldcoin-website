export function formatRld(runlai: string): string {
  const value = BigInt(runlai), unit = 10n ** 24n;
  const whole = (value / unit).toLocaleString("en-US");
  const remainder = (value % unit).toString().padStart(24, "0").replace(/0+$/, "");
  return remainder ? `${whole}.${remainder}` : whole;
}
