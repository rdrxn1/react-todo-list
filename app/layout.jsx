"use client";
import { useState, useRef, useEffect } from "react";
import { Toaster } from 'sonner'; 
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import { inter } from '@/app/ui/fonts';
import "./index.css";
import { ThemeProvider } from 'next-themes'
config.autoAddCss = false;

export default function RootLayout({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(document.documentElement.classList.contains('dark'));
    const htmlElement = document.documentElement;
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          setIsDarkMode(htmlElement.classList.contains('dark'));
        }
      });
    });

    mutationObserver.observe(htmlElement, { attributes: true });

    // Cleanup function for the observer
    return () => mutationObserver.disconnect();
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-mainbkgcolorlight dark:bg-mainbkgcolor`}>
       {isDarkMode ? ( 
         <Toaster
          toastOptions={{
            style: {
              background: '#131720',
              color: 'white',
              border: '0px',
              borderRadius: '24px',
              width: '209px',
            },
            className: 'class',
          }}
        />
       ) : (
         <Toaster
          toastOptions={{
            style: {
              background: '#D6E4FF', 
              color: 'black', 
              border: '0px',
              borderRadius: '24px',
              width: '209px',
            },
            className: 'class',
          }}
        />
       )}
       <ThemeProvider attribute="class" defaultTheme="system">
         {children}
       </ThemeProvider>
      </body>
    </html>
  );
}
