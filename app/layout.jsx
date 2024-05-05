"use client"
import { useState, useRef } from "react";
import SVGButton from "./components/DarkMode.jsx";
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import { inter } from '@/app/ui/fonts';
import "./index.css";
config.autoAddCss = false;

export default function RootLayout({ children }) {

  const [theme, setTheme] = useState('dark'); // Default theme is dark
  const mainDivRef = useRef(null);

  function toggleTheme() {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    if (mainDivRef.current) {
        mainDivRef.current.setAttribute('data-theme', newTheme);
    }
}

  return (
    <html lang="en" ref={mainDivRef} className="bg-mainbkgcolor">
      <body className={`${inter.className}`}>{children}
      <SVGButton toggleTheme={toggleTheme}/>
      </body>
    </html>
  );
}
