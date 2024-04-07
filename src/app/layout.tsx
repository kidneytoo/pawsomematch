import type { Metadata } from "next";
import "./globals.css";
import { chulaCharas, chulalongkorn } from "@/styles/fonts/fonts";



export const metadata: Metadata = {
  title: "Pawsome Match",
  description: "Pawsome Match",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${chulaCharas.variable} ${chulalongkorn.variable} font-chulacharas`}>{children}</body>
    </html>
  );
}
