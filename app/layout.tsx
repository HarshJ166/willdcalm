import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "WildCalm — Sasan Gir",
  description:
    "Wild Calm retreat near Sasan Gir offers a refined nature experience, surrounded by forest and countryside.",
  icons: {
    icon: "/design/Fevicon.svg",
    shortcut: "/design/Fevicon.svg",
    apple: "/apple-touch-icon.png", // mobile fix
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
