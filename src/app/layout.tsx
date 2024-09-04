import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ weight: ["300", "400", "400"], subsets: ["latin"]});

export const metadata: Metadata = {
  title: "OnePage Login",
  description: "OnePage Login",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
