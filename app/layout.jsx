"use client"
import { useState, useRef } from "react";
import SVGButton from "./components/DarkMode.jsx";
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import { inter } from '@/app/ui/fonts';
import "./index.css";
import { ThemeProvider } from 'next-themes'
config.autoAddCss = false;

export default function RootLayout({children }) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-mainbkgcolorlight dark:bg-mainbkgcolor`}>
      <ThemeProvider attribute="class" defaultTheme="system">{children}</ThemeProvider>
      </body>
    </html>
  );
}
