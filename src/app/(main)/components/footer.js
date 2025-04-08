import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className=" rounded-lg shadow ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://kotikov.is-a.dev/"
            className="flex items-center mb-4 sm:mb-0">
            <Image
              width={100}
              height={100}
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=purple&shade=400"
              alt=""
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Kotikov
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-base text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link href="/how-to" className="mr-4 hover:underline md:mr-6 ">
                Installation
              </Link>
            </li>
            <li>
              <Link
                href="https://kotikov.is-a.dev"
                className="mr-4 hover:underline md:mr-6">
                My website
              </Link>
            </li>

            <li>
              <Link
                href="mailto:mail@kotikov.is-a.dev"
                className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-gray-500">
          © 2023{" "}
          <a href="https://korikov.is-a.dev/" className="hover:underline">
            Kotikov
          </a>
        </span>
      </div>
    </footer>
  );
}
