"use client";

import { Bar, BarChart, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { menuItems } from "@/data/mockData";

const topDrinks = [...menuItems]
  .sort((a, b) => b.soldToday - a.soldToday)
  .slice(0, 6);

const maxSold = topDrinks[0].soldToday;

export default function TopDrinkChart() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart
        data={topDrinks}
        layout="vertical"
        margin={{ top: 0, right: 10, left: 10, bottom: 0 }}
        barSize={8}
      >
        <XAxis
          type="number"
          tick={{ fontSize: 11, fill: "#9e8a78" }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          type="category"
          dataKey="name"
          width={110}
          tick={{ fontSize: 11, fill: "#9e8a78" }}
          axisLine={false}
          tickLine={false}
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
          formatter={(value) => [value, "Sold today"]}
        />
        <Bar dataKey="soldToday" radius={[0, 6, 6, 0]}>
          {topDrinks.map((entry) => {
            const opacity = (entry.soldToday / maxSold);
            return (
              <Cell
                key={entry.id}
                fill={`rgba(107, 143, 94, ${opacity})`}
              />
            );
          })}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}