import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drewpark.dev"),

  title: "Drew Kyungjin Park | CAELUM",

  description:
    "Portfolio of Drew Kyungjin Park — autonomous systems, UAVs, robotics, software, and validation.",

  openGraph: {
    title: "Drew Kyungjin Park | CAELUM",
    description:
      "Autonomous systems, UAVs, robotics, software, and validation.",
    url: "https://drewpark.dev",
    siteName: "CAELUM",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Drew Kyungjin Park | CAELUM",
    description:
      "Autonomous systems, UAVs, robotics, software, and validation.",
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {children}
      </body>
    </html>
  );
}