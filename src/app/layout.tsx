import type { Metadata } from "next";
import "./globals.css";

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
      <body>
        {children}
      </body>
    </html>
  );
}
