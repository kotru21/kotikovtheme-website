import "./main.css";

export default function Custom404() {
  return (
    <main>
      <div class="flex h-screen footerPromoFirst ">
        <div class="m-auto">
          <h1>404</h1>
          <h2 className="pb-4">Something went wrong :/</h2>
          <div className="lg:text-right">
            <a href="/">
              <button>Back home</button>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
