import "@/styles/globals.css";
import { Unbounded } from "next/font/google";

const unbounded = Unbounded({ subsets: ["latin"] });
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import DiscountBanner from "@/components/DiscountBanner";

export const metadata = {
  title: "Kotikovtheme",
  description: "A Discord theme by Arsenij Kotikov.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ background: "#0a0a0a" }} className={unbounded.className}>
        <Header />
        {children}
        <Footer />
        <DiscountBanner />
      </body>
    </html>
  );
}
