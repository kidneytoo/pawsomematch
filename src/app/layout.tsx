import type {Metadata} from "next"

import "./globals.css"
import {notoSans} from "@/styles/fonts/fonts"

export const metadata: Metadata = {
  title: "Pawsome Match",
  description: "Pawsome Match",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSans.variable} font-noto-sans`}>
        {children}
      </body>
    </html>
  )
}
