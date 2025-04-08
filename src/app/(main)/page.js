"use client";
import Link from "next/link";
import Image from "next/image";
import Card from "./components/card.js";
import { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

import "@/styles/main.css";
import headerStyles from "@/styles/header.module.css";
import gradientStyles from "@/styles/gradient.module.css";
import footerStyles from "@/styles/footer.module.css";

const Purple = ({ children }) => {
  return <span className="text-[#9472d5] ; text-4xl">{children}</span>;
};

export default function Home() {
  const [copied, setCopied] = useState(false);

  const Clipboard = () => {
    navigator.clipboard.writeText(
      '"https://raw.githubusercontent.com/kotru21/Vendetta-discord-theme/main/theme.json'
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main>
      <div className={headerStyles.background}>
        <div className={headerStyles.promoFirst}>
          <div className={headerStyles.promoSecond}>
            <div className={gradientStyles.shade}>
              <div className="textContainer pt-48 lg:pl-48 pl-8">
                <h1 className="pb-4 ">
                  Kotikov
                  <br className="mobileWordWrap" />
                  <Purple>theme</Purple>
                </h1>
                <h2 className="lg:text-right pb-6 ">
                  Just some purple thing idk
                </h2>
                <div className="lg:text-right">
                  <button
                    className="w-max focus:outline-none focus:ring-4 focus:ring-purple-600 focus:ring-opacity-50"
                    onClick={Clipboard}>
                    {copied ? (
                      <>
                        <CheckCircleIcon className="w-5 h-5 mr-2 inline" />
                        Copied!
                      </>
                    ) : (
                      "Copy link"
                    )}
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
            <div className="lg:pr-64 pr-8 lg:pt-64 md:pl-16 pt-8 text-right">
              <h1 className="pb-2 ">
                focused
                <br className="mobileWordWrap" />
                <Purple> on</Purple>
              </h1>
              <h2 className="text-right lg:text-right pb-12">productivity</h2>
              <Card
                title="Amoled look"
                description="Looks confident and powerful"
              />
              <Card
                title="Open Source"
                description="You can customize this for yourself!"
              />
              <Card
                title="Purple color"
                description="purple-themed things just lookscool, aren’t them?"
              />
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
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCABdAF0DASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAQIDBAD/xAAYEAEBAQEBAAAAAAAAAAAAAAAAAgEREv/EABgBAAMBAQAAAAAAAAAAAAAAAAABAgMF/8QAGBEBAQEBAQAAAAAAAAAAAAAAAAERAhL/2gAMAwEAAhEDEQA/ANLhHMbuYHB4bJNkkrCcHimQPgHiXA3FvAbILENwNxXZJuGWJ6BtwASmYfMDMPOAQZlTJGZVmUtZC5A+Fsk3gl4z7Bdhp2CVIGMtSlUtVSjeGzsZ6wnFawnFM6pisYnisCjlWMXnEoXhFb8nmT+XSYmhNklStqdAVnvGe8arZ7VGXTNeJ6raeqjCnxWEcUnRT5aY1eNZY1aaRW/LTOm6jNG9E0U3U6120SqBUl6z3qt0heqjPpK09NWk6pjRzTzqfRzSONE0rNMuUfLJpK1ZZvbLlj7LFemnbJVo+w2xg09UjVO2k6o0WhWk67dDpopndBwM3XeiOMtU9j7S67oL0r7D0n13Rg0+0XdAAeu3Qc4jf//Z"
                src="/images/Vendetta-logo.png"
                className="mx-auto mt-8"
                width={300}
                height={300}
                alt="Vendetta logo"
              />
            </div>
            <div className="lg:absolute lg:right-0 lg:top-36  text-center lg:pr-24 pt-8 lg:mt-24">
              <h2>My GitHub</h2>
              <Link href="https://github.com/kotru21">
                <button className="w-max mt-6">Check</button>
              </Link>
            </div>
            <div className="lg:absolute lg:left-0 lg:top-36  text-center lg:pl-24 pt-8 lg:mt-24">
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
