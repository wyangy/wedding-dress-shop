function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-8 md:grid-cols-3">
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wide text-stone-950">
            Wedding Dress Shop
          </h2>

          <p className="mt-3 text-xs text-stone-600">
            A bridal dress catalogue portfolio project.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-wide text-stone-950">
            Quick Links
          </h3>

          <div className="mt-3 flex flex-col gap-1 text-xs text-stone-700">
            <a href="/shop">Shop</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-wide text-stone-950">
            Version 1 Scope
          </h3>

          <p className="mt-3 text-xs leading-5 text-stone-600">
            Catalogue browsing and fitting requests only. No cart, checkout, or
            online payment.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
