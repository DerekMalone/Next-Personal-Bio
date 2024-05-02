import Footer from "./components/footer";
import Navigation from "./components/navigation";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Derek Malone: Personal Bio Site",
  description: `Derek Malone's Personal Bio Site`
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
