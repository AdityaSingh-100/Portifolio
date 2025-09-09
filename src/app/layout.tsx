import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Portifolio Website",
  description:
    "A perfect portifolio website that showcase my skills,minimal and smooth microinteractions , perfect for developers and designers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-neutral-100 antialiased dark:bg-neutral-700`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
