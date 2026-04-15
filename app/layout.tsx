import type { Metadata } from "next";
import "./globals.css";
import CurrentDate from "@/components/ui/CurrentDate";
import { Lustria, Nunito_Sans } from "next/font/google";

const lustria = Lustria({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lustria",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Blossom Coffee Dashboard",
  description:
    "A dashboard for monitoring sales and performance of Blossom Coffee cafe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${lustria.variable} ${nunitoSans.variable}`}
    >
      <body className="min-h-full flex flex-col">
        <nav
          className="w-full px-8 py-4 flex items-center justify-between bg-cafe-bg "
          style={{ boxShadow: "var(--shadow-neu-navbar)" }}
        >
          <div>
            <h1 className="font-heading text-lg font-medium text-cafe-brown-dark">
              Blossom Coffee
            </h1>
            <p className="text-xs text-cafe-brown-light">Analytics dashboard</p>
          </div>

          <div
            className="text-xs text-cafe-brown-mid px-3 py-1.5 rounded-full"
            style={{ boxShadow: "var(--shadow-neu-badge)" }}
          >
            <CurrentDate />
          </div>
        </nav>

        <main className="flex-1 p-8">{children}</main>
      </body>
    </html>
  );
}
