// Default Imports
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

// Page Imports
import { ThemeProvider } from "./components/theme-provider";

// Component Sections
import Navbar from "./components/section/Navbar";
import Hero from "./components/section/Hero";

const defaultFont = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata = {
  title: "FRNZ | Personal Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={defaultFont.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
          <Hero />
        </ThemeProvider>
      </body>
    </html>
  );
}
