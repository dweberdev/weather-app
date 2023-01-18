export function KtoF(tempKevlin: number) {
  if (!tempKevlin) {
    return 0;
  } else {
    return ((tempKevlin - 273.15) * 9) / 5 + 32;
  }
}
