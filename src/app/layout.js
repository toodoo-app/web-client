import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { inter } from "@/lib/fonts";

const fontSize = "text-base";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={cn("h-full", fontSize)}>
      <body className={cn(inter.className, "h-full")}>{children}</body>
    </html>
  );
}
