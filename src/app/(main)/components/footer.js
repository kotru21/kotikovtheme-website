import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer class=" rounded-lg shadow ">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://kotikov.is-a.dev/"
            class="flex items-center mb-4 sm:mb-0">
            <Image
              width={100}
              height={100}
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=purple&shade=400"
              alt=""
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Kotikov
            </span>
          </a>
          <ul class="flex flex-wrap items-center mb-6 text-base text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link href="/how-to" class="mr-4 hover:underline md:mr-6 ">
                Installation
              </Link>
            </li>
            <li>
              <Link
                href="https://kotikov.is-a.dev"
                class="mr-4 hover:underline md:mr-6">
                My website
              </Link>
            </li>

            <li>
              <Link href="mailto:mail@kotikov.is-a.dev" class="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-gray-500">
          © 2023{" "}
          <a href="https://korikov.is-a.dev/" class="hover:underline">
            Kotikov
          </a>
        </span>
      </div>
    </footer>
  );
}
