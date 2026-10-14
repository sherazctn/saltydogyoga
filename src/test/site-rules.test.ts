import { describe, expect, it } from "vitest";
import { CLASS_POLICIES, TRAINING } from "@/lib/site-rules";

describe("Client class policies", () => {
  it("requires two hours for mat cancellations", () => expect(CLASS_POLICIES.matCancellationHours).toBe(2));
  it("requires 24 hours for workshops", () => expect(CLASS_POLICIES.workshopCancellationHours).toBe(24));
  it("makes all sales final", () => expect(CLASS_POLICIES.allSalesFinal).toBe(true));
});
describe("Training investment", () => {
  it("costs $3000", () => expect(TRAINING.price).toBe(3000));
  it("requires a $400 deposit", () => expect(TRAINING.deposit).toBe(400));
  it("makes the deposit nonrefundable", () => expect(TRAINING.depositRefundable).toBe(false));
  it("adds a 3.5 percent card fee", () => expect(TRAINING.cardFeePercent).toBe(3.5));
  it("includes 160 live hours", () => expect(TRAINING.liveHours).toBe(160));
  it("includes 40 recorded hours", () => expect(TRAINING.recordedHours).toBe(40));
  it("includes ten classes", () => expect(TRAINING.includedClassPass).toBe(10));
  it("offers ten percent membership discount", () => expect(TRAINING.membershipDiscountPercent).toBe(10));
});