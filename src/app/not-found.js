import "public/static/css/main.css";
import Link from "next/link";

export default function Custom404() {
  return (
    <main>
      <div class="flex h-screen footerPromoFirst ">
        <div class="m-auto">
          <h1>404</h1>
          <h2 className="pb-4">Something went wrong :/</h2>
          <div className="lg:text-right">
            <Link href="/">
              <button>Back home</button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
