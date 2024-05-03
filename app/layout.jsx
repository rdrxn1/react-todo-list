import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import { inter } from '@/app/ui/fonts';
import "./index.css";
config.autoAddCss = false;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#F2F7FF]`}>{children}</body>
    </html>
  );
}
