import type { Metadata } from "next";
import { Pangolin, Caveat } from "next/font/google";
import "./globals.scss";

const pangolinSans = Pangolin({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-pangolin-sans",
});

const caveat = Caveat({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-caveat",
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
