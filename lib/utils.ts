import { formatDistanceToNow, parse } from "date-fns";

export function timeAgo(time: string): string {
  const newDate = parse(time, "HH:mm", new Date());
  const result = formatDistanceToNow(newDate, { addSuffix: true });
  return result;
}
