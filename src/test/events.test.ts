import { expect, it } from "vitest";
import { isSpecialEvent } from "@/lib/events";

it("excludes regular scheduled classes", () => expect(isSpecialEvent({ type: "Regular", name: "Mat Pilates" })).toBe(false));
it("includes workshops", () => expect(isSpecialEvent({ type: "Workshop", name: "Sound Bath" })).toBe(true));
it("includes course events", () => expect(isSpecialEvent({ type: "Course event" })).toBe(true));
it("does not guess that an untyped class is a special event", () => expect(isSpecialEvent({ name: "Yoga Flow" })).toBe(false));