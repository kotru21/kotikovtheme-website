"use client";
import "./main.css";
import Image from "next/image";
import Header from "./components/header.js";
import Card from "./components/card.js";

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
              <Header />
              <div className="textContainer pt-48 lg:pl-48 pl-8">
                <h1 className="pb-2">
                  Kotikov
                  <br className="mobileWordWrap" />
                  <purpleColor>theme</purpleColor>
                </h1>
                <h2 className="lg:text-right pb-4">Just some purple thing idk</h2>
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
      <div className="fullscreenContainer">
        <div className="themeFeatures" id="themeFeatures">
          <div className="darkGradientShadeSecond">
            <div className="lg:pr-64 pr-8 lg:pt-64 pt-8 text-right">
              <h1 className="pb-2 ">
                focused
                <br className="mobileWordWrap" />
                <purpleColor> on</purpleColor>
              </h1>
              <h2 className="text-right lg:text-right pb-12">productivity</h2>
              <Card title="Amoled look" description="Looks confident and powerful" />
              <Card title="Open Source" description="You can customize this for yourself!" />
              <Card title="Purple color" description="purple-themed things just lookscool, aren’t them?" />
            </div>
          </div>
        </div>
      </div>
      <div className="fullscreenContainer relative">
        <div className="footerPromoFirst">
          <div className="footerPromoSecond">
            <div className="lg:absolute m-auto lg:left-0 lg:right-0 textContainer lg:pt-36 pt-16">
              <p className="text-left">based on</p>
              <h1>Vendetta</h1>
              <p className="text-right">Discord client</p>
              <Image
                src="/public/Vendetta-logo.png"
                className="mx-auto mt-8"
                width={300}
                height={300}
                alt="Vendetta logo"
              />
            </div>
            <div className="lg:absolute lg:right-0 lg:top-36 lg:pr-8 text-right pr-24 pt-8 lg:mt-24">
              <h2>My GitHub</h2>
              <a href="https://github.com/kotru21">
                <button className="w-max mt-6">Check</button>
              </a>
            </div>
            <div className="lg:absolute lg:left-0 lg:top-36 lg:pl-8 text-left pl-24 pt-8 lg:mt-24">
              <h2>Get Vendetta</h2>
              <a href="https://github.com/vendetta-mod/VendettaManager/releases/latest">
                <button className="w-max mt-6">Get it</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
