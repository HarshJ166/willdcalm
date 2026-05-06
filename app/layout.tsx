import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const poppins = localFont({
  src: [
    { path: "../public/fonts/Poppins-Thin.ttf", weight: "100", style: "normal" },
    { path: "../public/fonts/Poppins-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "../public/fonts/Poppins-Light.ttf", weight: "300", style: "normal" },
    { path: "../public/fonts/Poppins-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/Poppins-Medium.ttf", weight: "500", style: "normal" },
  ],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "WildCalm — Sasan Gir",
  description:
    "Wild Calm retreat near Sasan Gir offers a refined nature experience, surrounded by forest and countryside.",
  icons: {
    icon: "/design/Fevicon.svg",
    shortcut: "/design/Fevicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full w-full antialiased bg-[#5f7058]`}>
      <body className="min-h-full flex flex-col overflow-x-clip bg-[var(--sage-hero)] text-[var(--text-cream)] font-poppins">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
