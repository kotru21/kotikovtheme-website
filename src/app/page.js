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
        <div className="themeFeatures ">
          <div className="textContainer pr-64 pt-64">
            <h1 className="pb-2">
              focused
              <br className="mobileWordWrap" />
              <purpleColor> on</purpleColor>
            </h1>
            <h2 className="lg:text-right pb-4">productivity</h2>
            <Card title="a" description="a" />
          </div>
        </div>
      </div>
    </main>
  );
}
