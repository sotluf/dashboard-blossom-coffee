"use client";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  Cell,
  XAxis,
  YAxis,
} from "recharts";
import { hourlyData } from "@/data/mockData";

const maxOrders = Math.max(...hourlyData.map((d) => d.orders));

export default function HourlyChart() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart
        data={hourlyData}
        margin={{ top: 0, right: 10, left: 0, bottom: 0 }}
        barSize={18}
      >
        <XAxis
          dataKey="hour"
          width={110}
          tick={{ fontSize: 11, fill: "#9e8a78" }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis hide />
        <Tooltip
          contentStyle={{
            background: "#f0ebe3",
            border: "none",
            borderRadius: "12px",
            boxShadow: "3px 3px 6px #d9d4cc, -3px -3px 6px #ffffff",
            fontSize: "12px",
            color: "#4a3728",
          }}
          itemStyle={{ color: "#c47a6a" }}
          formatter={(value) => [value, "Orders"]}
        />
        <Bar dataKey="orders" radius={[4, 4, 0, 0]}>
          {hourlyData.map((entry) => {
            const opacity = 0.25 + (entry.orders / maxOrders) * 0.75;
            return (
              <Cell key={entry.hour} fill={`rgba(196, 122, 106, ${opacity})`} />
            );
          })}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
