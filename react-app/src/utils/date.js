import { DateTime } from "luxon";

export function prettyDate(dateString, format = "ff") {
  const isoString = new Date(dateString).toISOString();
  return DateTime.fromISO(isoString).toFormat(format);
}
