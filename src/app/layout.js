import "public/static/css/globals.css";
import { Unbounded } from "next/font/google";

const unbounded = Unbounded({ subsets: ["latin"] });

export const metadata = {
  title: "Kotikovtheme",
  description: "A Discord theme by Arsenij Kotikov.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ background: "#0a0a0a" }} className={unbounded.className}>
        {children}
      </body>
    </html>
  );
}
