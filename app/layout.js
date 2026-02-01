import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Derek Malone: Personal Bio Site",
  description: `Derek Malone's Personal Bio Site`
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
