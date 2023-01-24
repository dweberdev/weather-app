import { KtoF } from "./convert-temp-k-to-f";

test("should return true", () => {
  expect(KtoF(279.37).toFixed(0)).toBe("43");
});
