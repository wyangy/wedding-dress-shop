import { describe, expect, it } from "vitest";
import { dresses } from "./dresses";

describe("dresses data", () => {
  it("has at least one dress", () => {
    expect(dresses.length).toBeGreaterThan(0);
  });

  it("has the required fields for each dress", () => {
    dresses.forEach((dress) => {
      expect(dress.id).toBeDefined();
      expect(dress.name.trim().length).toBeGreaterThan(0);
      expect(String(dress.size).trim().length).toBeGreaterThan(0);
      expect(dress.description.trim().length).toBeGreaterThan(0);
    });
  });

  it("stores measurements as numbers, not strings", () => {
    dresses.forEach((dress) => {
      expect(typeof dress.bust).toBe("number");
      expect(typeof dress.waist).toBe("number");
      expect(typeof dress.hip).toBe("number");
      expect(typeof dress.hollowToHem).toBe("number");
    });
  });

  it("has positive measurement values", () => {
    dresses.forEach((dress) => {
      expect(dress.bust).toBeGreaterThan(0);
      expect(dress.waist).toBeGreaterThan(0);
      expect(dress.hip).toBeGreaterThan(0);
      expect(dress.hollowToHem).toBeGreaterThan(0);
    });
  });
});
