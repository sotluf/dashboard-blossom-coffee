"use client";

import { orders } from "@/data/mockData";

const recentOrders = orders.reverse();

export default function OrdersTable() {
  return (
    <div className="overflow-y-auto max-h-48 scrollbar-hide">
      <table className="w-full">
        <tbody>
          {recentOrders.map((order) => (
            <tr
              key={order.id}
              className="border-b border-cafe-border last:border-0"
            >
              <td className="py-2 w-4">
                <span
                  className="w-2 h-2 rounded-full block"
                  style={{
                    background:
                      order.status === "done"
                        ? "#6b8f5e"
                        : order.status === "preparing"
                          ? "#c4aa6a"
                          : "#c47a6a",
                  }}
                />
              </td>
              <td className="py-2">
                <p className="text-sm text-cafe-brown-dark font-medium">
                  {order.items.join(", ")}
                </p>
                <p className="text-xs text-cafe-brown-light">{order.time}</p>
              </td>
              <td className="py-2 text-right text-sm text-cafe-sage font-medium">
                € {order.totalAmount.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
