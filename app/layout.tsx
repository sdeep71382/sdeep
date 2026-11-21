import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sandeep Singh — Full Stack Developer",
  description:
    "Full Stack Developer with 4+ years of experience building React, Next.js, Node.js, database, e-commerce, and Shopify solutions.",
  keywords: [
    "Sandeep Singh",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Shopify Developer",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
