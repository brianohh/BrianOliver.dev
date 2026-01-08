import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brian Oliver | Web Developer & Designer",
  description: "Portfolio of Brian Oliver - Web Developer and Designer specializing in creating beautiful, functional web experiences.",
  keywords: ["web developer", "designer", "portfolio", "frontend", "React", "Next.js"],
  authors: [{ name: "Brian Oliver" }],
  openGraph: {
    title: "Brian Oliver | Web Developer & Designer",
    description: "Portfolio of Brian Oliver - Web Developer and Designer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
