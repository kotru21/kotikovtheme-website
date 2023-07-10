import Image from "next/image";
import Header from "./components/header.js";
import Card from "./components/card.js";
import "./main.css";

export default function Home() {
  return (
    <main>
      <div className="header">
        <div className="headerPromoFirst">
          <div className="headerPromoSecond">
            <div className="DarkGradientShade">
              <Header />
              <div className="textContainer pt-48 lg:pl-48 pl-8">
                <h1 className="pb-2">
                  Kotikov
                  <br className="mobileWordWrap" />
                  <purpleColor>theme</purpleColor>
                </h1>
                <h2 className="lg:text-right pb-4">Just some purple thing idk</h2>
                <div className="lg:text-right">
                  <button className="w-max">Copy link</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fullscreenContainer">
        <div className="themeFeatures">
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
    </main>
  );
}
