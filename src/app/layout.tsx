import type { Metadata } from "next";
import { Poiret_One, Bellota } from "next/font/google";
import "./globals.scss";

const pangolinSans = Poiret_One({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-poiret-one-sans",
});

const caveat = Bellota({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bellota",
});

export const metadata: Metadata = {
  title: "СПО «Высота» | МПГУ",
  keywords: "СПО, Высота, МПГУ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pangolinSans.variable} ${caveat.variable}`}>
        <div className="page">{children}</div>
      </body>
    </html>
  );
}
