import { Order, MenuItem, DailySales, HourlyData } from "@/types";

// Menu items
export const menuItems: MenuItem[] = [
  // coffee
  {
    id: "m1",
    name: "Dalgona coffee",
    price: 5.5,
    soldToday: 16,
    category: "coffee",
  },
  {
    id: "m2",
    name: "Cold brew",
    price: 6.0,
    soldToday: 14,
    category: "coffee",
  },
  {
    id: "m3",
    name: "Vanilla latte",
    price: 5.2,
    soldToday: 11,
    category: "coffee",
  },
  {
    id: "m4",
    name: "Oat flat white",
    price: 5.8,
    soldToday: 9,
    category: "coffee",
  },

  // non-coffee
  {
    id: "m5",
    name: "Matcha latte",
    price: 5.8,
    soldToday: 18,
    category: "non-coffee",
  },
  {
    id: "m6",
    name: "Strawberry matcha",
    price: 6.5,
    soldToday: 13,
    category: "non-coffee",
  },
  {
    id: "m7",
    name: "Brown sugar milk",
    price: 5.0,
    soldToday: 10,
    category: "non-coffee",
  },
  {
    id: "m8",
    name: "Boba milk tea",
    price: 6.2,
    soldToday: 8,
    category: "non-coffee",
  },

  // tea
  {
    id: "m9",
    name: "Roasted tea latte",
    price: 5.5,
    soldToday: 7,
    category: "tea",
  },
  {
    id: "m10",
    name: "Tangerine tea",
    price: 4.8,
    soldToday: 5,
    category: "tea",
  },
  { id: "m11", name: "Barley tea", price: 3.5, soldToday: 4, category: "tea" },

  // dessert
  {
    id: "m12",
    name: "Matcha basque cake",
    price: 6.8,
    soldToday: 9,
    category: "dessert",
  },
  {
    id: "m13",
    name: "Strawberry mochi",
    price: 4.5,
    soldToday: 11,
    category: "dessert",
  },
  {
    id: "m14",
    name: "Tiramisu",
    price: 3.8,
    soldToday: 7,
    category: "dessert",
  },
  {
    id: "m15",
    name: "Flower cookie",
    price: 2.5,
    soldToday: 6,
    category: "dessert",
  },
];

// Orders
export const orders: Order[] = [
  {
    id: "o1",
    items: ["Matcha latte"],
    totalAmount: 5.8,
    status: "done",
    time: "10:02",
  },
  {
    id: "o2",
    items: ["Cold brew", "Matcha basque cake"],
    totalAmount: 12.8,
    status: "done",
    time: "10:08",
  },
  {
    id: "o3",
    items: ["Dalgona coffee"],
    totalAmount: 5.5,
    status: "done",
    time: "10:15",
  },
  {
    id: "o4",
    items: ["Strawberry matcha", "Strawberry mochi"],
    totalAmount: 11.0,
    status: "done",
    time: "10:21",
  },
  {
    id: "o5",
    items: ["Brown sugar milk", "Tiramisu"],
    totalAmount: 8.8,
    status: "done",
    time: "10:29",
  },
  {
    id: "o6",
    items: ["Roasted tea latte", "Flower cookie"],
    totalAmount: 8.0,
    status: "done",
    time: "10:34",
  },
  {
    id: "o7",
    items: ["Vanilla latte"],
    totalAmount: 5.2,
    status: "cancelled",
    time: "10:39",
  },
  {
    id: "o8",
    items: ["Matcha latte", "Matcha basque cake"],
    totalAmount: 12.6,
    status: "done",
    time: "10:45",
  },
  {
    id: "o9",
    items: ["Tangerine tea", "Tiramisu"],
    totalAmount: 8.6,
    status: "done",
    time: "10:51",
  },
  {
    id: "o10",
    items: ["Oat flat white"],
    totalAmount: 5.8,
    status: "cancelled",
    time: "10:58",
  },
  {
    id: "o11",
    items: ["Boba milk tea", "Strawberry mochi"],
    totalAmount: 10.7,
    status: "done",
    time: "11:04",
  },
  {
    id: "o12",
    items: ["Cold brew"],
    totalAmount: 6.0,
    status: "done",
    time: "11:09",
  },
  {
    id: "o13",
    items: ["Dalgona coffee", "Flower cookie"],
    totalAmount: 8.0,
    status: "done",
    time: "11:14",
  },
  {
    id: "o14",
    items: ["Strawberry matcha"],
    totalAmount: 6.5,
    status: "done",
    time: "11:20",
  },
  {
    id: "o15",
    items: ["Barley tea", "Tiramisu"],
    totalAmount: 7.3,
    status: "done",
    time: "11:27",
  },
  {
    id: "o16",
    items: ["Matcha latte", "Flower cookie"],
    totalAmount: 8.3,
    status: "preparing",
    time: "11:33",
  },
  {
    id: "o17",
    items: ["Roasted tea latte"],
    totalAmount: 5.5,
    status: "cancelled",
    time: "11:38",
  },
  {
    id: "o18",
    items: ["Strawberry matcha", "Matcha basque cake"],
    totalAmount: 13.3,
    status: "preparing",
    time: "11:42",
  },
  {
    id: "o19",
    items: ["Brown sugar milk", "Strawberry mochi"],
    totalAmount: 9.5,
    status: "preparing",
    time: "11:46",
  },
  {
    id: "o20",
    items: ["Vanilla latte", "Tiramisu"],
    totalAmount: 9.0,
    status: "preparing",
    time: "11:50",
  },
];

// Daily sales - weekly data
export const weeklySales: DailySales[] = [
  {
    date: "2026-04-07",
    revenue: 198,
    orders: 34,
    bestSellingItem: menuItems[4],
  },
  {
    date: "2026-04-08",
    revenue: 224,
    orders: 38,
    bestSellingItem: menuItems[4],
  },
  {
    date: "2026-04-09",
    revenue: 187,
    orders: 31,
    bestSellingItem: menuItems[0],
  },
  {
    date: "2026-04-10",
    revenue: 256,
    orders: 43,
    bestSellingItem: menuItems[5],
  },
  {
    date: "2026-04-11",
    revenue: 312,
    orders: 52,
    bestSellingItem: menuItems[4],
  },
  {
    date: "2026-04-12",
    revenue: 289,
    orders: 48,
    bestSellingItem: menuItems[5],
  },
  {
    date: "2026-04-13",
    revenue: 284,
    orders: 47,
    bestSellingItem: menuItems[4],
  },
];

// Hourly data
export const hourlyData: HourlyData[] = [
  { hour: "08:00", orders: 3 },
  { hour: "09:00", orders: 8 },
  { hour: "10:00", orders: 15 },
  { hour: "11:00", orders: 12 },
  { hour: "12:00", orders: 9 },
  { hour: "13:00", orders: 7 },
  { hour: "14:00", orders: 6 },
  { hour: "15:00", orders: 10 },
  { hour: "16:00", orders: 13 },
  { hour: "17:00", orders: 11 },
  { hour: "18:00", orders: 5 },
  { hour: "19:00", orders: 3 },
];

// KPIs
export const todayStats = {
  revenue: weeklySales[weeklySales.length - 1].revenue,
  orders: weeklySales[weeklySales.length - 1].orders,
  avgCheck: +(
    weeklySales[weeklySales.length - 1].revenue /
    weeklySales[weeklySales.length - 1].orders
  ).toFixed(2),
  topItem: menuItems.reduce((a, b) => (a.soldToday > b.soldToday ? a : b)),
};

// Function to calculate percentage change
export function calcDelta(today: number, yesterday: number): string {
  const diff = ((today - yesterday) / yesterday) * 100;
  return diff.toFixed(1);
}
