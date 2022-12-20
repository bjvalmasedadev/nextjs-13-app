import Navigation from "./../components/Navigation";
import "../styles/globals.css";

import { Space_Grotesk as SpaceGrotesk } from "@next/font/google";

const font = SpaceGrotesk({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-grotesk",
});

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className={font.variable}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
