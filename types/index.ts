export interface Order {
  id: string;
  items: string[];
  totalAmount: number;
  status: "preparing" | "done" | "cancelled";
  time: string;
}

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  soldToday: number;
  category: "coffee" | "non-coffee" | "dessert" | "brunch";
}

export interface DailySales {
  date: string;
  revenue: number;
  orders: number;
  bestSellingItem: MenuItem;
}

export interface HourlyData {
  hour: string;
  orders: number;
}

export interface KpiCardProps {
  label: string;
  value: string;
  delta?: string;
  accent?: boolean;
}
