"use client";
import "../main.css";

const base = "https://raw.githubusercontent.com/kotru21/Vendetta-discord-theme/main/theme.json";

const Clipboard = (e) => {
  navigator.clipboard.writeText(base);
};

export default function Home() {
  return (
    <main>
      <div className="header">
        <div className="headerPromoFirst">
          <div className="headerPromoSecond">
            <div className="darkGradientShade">
              <div className="textContainer pt-48 lg:pl-48 pl-8">
                <h1 className="pb-4">
                  Work in
                  <br className="mobileWordWrap" />
                  <purple> progress..</purple>
                </h1>
                <h2 className="lg:text-right pb-6">This page isn&apos;t done yet</h2>
                <div className="lg:text-right">
                  <button
                    className="w-max focus:outline-none focus:ring-4 focus:ring-purple-600 focus:ring-opacity-50"
                    onClick={Clipboard}
                  >
                    Copy link
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
