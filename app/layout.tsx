import type { Metadata } from "next";
import "./globals.css";
import { Cursor } from "@/components/cursor";
import { SmoothScroll } from "@/components/smooth-scroll";

export const metadata: Metadata = {
  title: "Jude Alkhudiri — Designer & Illustrator",
  description: "Portfolio of Jude Alkhudiri, designer and illustrator.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
