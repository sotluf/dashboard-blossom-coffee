"use client";

import { format } from "date-fns";

export default function CurrentDate() {
  const today = format(new Date(), "EEE, d MMM yyyy");
  return <span>Today — {today}</span>;
}