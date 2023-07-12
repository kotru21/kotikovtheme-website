"use client";
import Link from "next/link";
import Image from "next/image";
import Card from "./components/card.js";

import "public/static/css/main.css";
import headerStyles from "public/static/css/header.module.css";
import gradientStyles from "public/static/css/gradient.module.css";
import footerStyles from "public/static/css/footer.module.css";

const Clipboard = (e) => {
  navigator.clipboard.writeText('"https://raw.githubusercontent.com/kotru21/Vendetta-discord-theme/main/theme.json');
};

export default function Home() {
  return (
    <main>
      <div className={headerStyles.background}>
        <div className={headerStyles.promoFirst}>
          <div className={headerStyles.promoSecond}>
            <div className={gradientStyles.shade}>
              <div className="textContainer pt-48 lg:pl-48 pl-8">
                <h1 className="pb-4">
                  Kotikov
                  <br className="mobileWordWrap" />
                  <purple>theme</purple>
                </h1>
                <h2 className="lg:text-right pb-6">Just some purple thing idk</h2>
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
          <div className={gradientStyles.shadeSecond}>
            <div className="lg:pr-64 pr-8 lg:pt-64 pt-8 text-right">
              <h1 className="pb-2 ">
                focused
                <br className="mobileWordWrap" />
                <purple> on</purple>
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
        <div className={footerStyles.promoFirst}>
          <div className={`${footerStyles.promoSecond} pb-10`}>
            <div className="lg:absolute m-auto lg:left-0 lg:right-0 textContainer lg:pt-36 pt-16">
              <p className="text-left">based on</p>
              <h1>Vendetta</h1>
              <p className="text-right">Discord client</p>
              <Image
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,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"
                src="/static/images/Vendetta-logo.png"
                className="mx-auto mt-8"
                width={300}
                height={300}
                alt="Vendetta logo"
              />
            </div>
            <div className="lg:absolute lg:right-0 lg:top-36 lg:pr-8 text-center lg:pr-24 pt-8 lg:mt-24">
              <h2>My GitHub</h2>
              <Link href="https://github.com/kotru21">
                <button className="w-max mt-6">Check</button>
              </Link>
            </div>
            <div className="lg:absolute lg:left-0 lg:top-36 lg:pl-8 text-center lg:pl-24 pt-8 lg:mt-24">
              <h2>Get Vendetta</h2>
              <Link href="https://github.com/vendetta-mod/VendettaManager/releases/latest">
                <button className="w-max mt-6">Get it</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
