/** Only special events belong in Upcoming Events; daily classes have their own schedule. */
export function isSpecialEvent(event: Record<string, unknown>): boolean {
  return event["type"] === "Workshop" || event["type"] === "Course event";
}