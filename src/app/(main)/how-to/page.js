"use client";
import "@/styles/main.css";
import { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const Purple = ({ children }) => {
  return <span className="text-[#9472d5] ; text-4xl">{children}</span>;
};

const base =
  "https://raw.githubusercontent.com/kotru21/Vendetta-discord-theme/main/theme.json";

export default function Home() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(base);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main>
      <div className="header">
        <div className="headerPromoFirst">
          <div className="headerPromoSecond">
            <div className="darkGradientShade">
              <div className="textContainer pt-24 lg:pt-32 lg:px-48 px-8">
                <h1 className="pb-4">
                  Installation
                  <br className="mobileWordWrap" />
                  <Purple> Kotikovtheme</Purple>
                </h1>
                <h2 className="pb-6">
                  Follow these simple steps to install the theme
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className=" rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-8">
            Step-by-step Guide
          </h2>

          <ol className="relative border-l border-purple-500 space-y-8 ml-4">
            <li className="ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-purple-900 rounded-full -left-4 ring-4 ring-gray-900">
                <span className="text-purple-300">1</span>
              </span>
              <h3 className="text-xl font-semibold text-white">
                Install Vendetta
              </h3>
              <p className="text-gray-300 my-2">
                Before installing the theme, make sure you have Vendetta
                installed for Discord. If not, download it from the official
                website.
              </p>
              <a
                href="https://vendetta.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 mt-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 focus:ring-4 focus:ring-purple-900">
                Download Vendetta
              </a>
            </li>

            <li className="ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-purple-900 rounded-full -left-4 ring-4 ring-gray-900">
                <span className="text-purple-300">2</span>
              </span>
              <h3 className="text-xl font-semibold text-white">
                Copy the Theme Link
              </h3>
              <p className="text-gray-300 my-2">
                Click the button below to copy the theme&apos;s JSON file link.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-2">
                <code className="px-3 py-2 text-sm font-mono bg-gray-800 rounded-lg text-gray-300 w-full sm:w-auto overflow-auto">
                  {base}
                </code>
                <button
                  onClick={copyToClipboard}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 focus:ring-4 focus:ring-purple-900 transition-colors">
                  {copied ? (
                    <>
                      <CheckCircleIcon className="w-5 h-5 mr-2" />
                      Copied!
                    </>
                  ) : (
                    "Copy Link"
                  )}
                </button>
              </div>
            </li>

            <li className="ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-purple-900 rounded-full -left-4 ring-4 ring-gray-900">
                <span className="text-purple-300">3</span>
              </span>
              <h3 className="text-xl font-semibold text-white">
                Add the Theme to Vendetta
              </h3>
              <p className="text-gray-300 my-2">
                Open Discord with Vendetta installed. Go to Settings → Vendetta
                → Themes → Click on the &quot;+&quot; in the top right corner
                and paste the copied link.
              </p>
            </li>

            <li className="ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-purple-900 rounded-full -left-4 ring-4 ring-gray-900">
                <span className="text-purple-300">4</span>
              </span>
              <h3 className="text-xl font-semibold text-white">
                Activate the Theme
              </h3>
              <p className="text-gray-300 my-2">
                After adding the theme, activate it by toggling the
                corresponding switch in Vendetta&apos;s theme settings. Discord
                will instantly update its appearance using Kotikovtheme.
              </p>
            </li>
          </ol>

          <div className="mt-12 bg-gray-950 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-white mb-2">
              Having Installation Issues?
            </h3>
            <p className="text-gray-300">
              If you&apos;re experiencing difficulties installing the theme, you
              can get help through:
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              <a
                href="https://github.com/kotru21/Vendetta-discord-theme/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-purple-900 rounded-lg ring-gray-900">
                GitHub Issues
              </a>
              <a
                href="mailto:mail@kotikov.is-a.dev"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-purple-900 rounded-lg ring-gray-900">
                Contact via Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
