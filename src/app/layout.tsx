import type { Metadata } from "next";
import "./globals.css";
import { Quicksand } from 'next/font/google';
import { Poppins } from "next/font/google";

const quicksand = Quicksand({
    subsets: ["latin"],
    display: "swap",
    weight: "700",
    variable: '--font-quicksand'
})

const poppins = Poppins({
    subsets: ["latin"],
    display: "swap",
    weight: ["300", "500"],
    variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: "John Pioc",
  description: "Computer Science Student @ University of Queensland | Web Development Freelancer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
