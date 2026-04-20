"use client"

import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { weeklySales } from "@/data/mockData";
import { format, parseISO } from "date-fns";

export default function RevenueChart() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <AreaChart data={weeklySales} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
        <defs>
          <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#6b8f5e" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#6b8f5e" stopOpacity={0} />
          </linearGradient>
        </defs>

        <XAxis
          dataKey="date"
          tickFormatter={(date) => format(parseISO(date), "EEE")}
          tick={{ fontSize: 11, fill: "#9e8a78" }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          tick={{ fontSize: 11, fill: "#9e8a78" }}
          axisLine={false}
          tickLine={false}
          tickFormatter={(v) => `€${v}`}
        />
        <Tooltip
          contentStyle={{
            background: "#f0ebe3",
            border: "none",
            borderRadius: "12px",
            boxShadow: "3px 3px 6px #d9d4cc, -3px -3px 6px #ffffff",
            fontSize: "12px",
            color: "#4a3728",
          }}
          formatter={(value) => [`€ ${value}`, "Revenue"]}
          labelFormatter={(date) => format(parseISO(date), "EEE, d MMM")}
        />
        <Area
          type="monotone"
          dataKey="revenue"
          stroke="#6b8f5e"
          strokeWidth={2}
          fill="url(#revenueGradient)"
          dot={{ fill: "#6b8f5e", r: 3, strokeWidth: 0 }}
          activeDot={{ r: 5, fill: "#6b8f5e" }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}