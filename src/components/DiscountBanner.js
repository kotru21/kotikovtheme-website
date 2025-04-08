import React from "react";
import Link from "next/link";

export default function DiscountBanner() {
  return (
    <div className="fixed bottom-16 right-[-6rem] transform -rotate-45 z-50 ">
      <div className="relative py-2 px-6 font-bold pl-28 pr-36">
        <Link href="https://github.com/vendetta-mod/Vendetta">
          <span className="relative z-10 text-white select-none">
            Vendetta is <p> discounted</p>
          </span>
          <div className="absolute inset-0 bg-red-600 shadow-red-600 shadow-md "></div>
        </Link>
      </div>
    </div>
  );
}
