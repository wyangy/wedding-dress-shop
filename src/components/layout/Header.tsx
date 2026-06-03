function Header() {
  return (
    <header className="border-b border-stone-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="/" className="text-sm font-bold tracking-wide text-stone-900">
          WEDDING DRESS SHOP
        </a>

<nav className="flex gap-8 text-xs font-bold uppercase tracking-wide text-stone-900">
  <a href="/shop" className="hover:text-stone-500">
    Shop
  </a>

  <a href="#how-it-works" className="hover:text-stone-500">
    How It Works
  </a>

  <a href="#contact" className="hover:text-stone-500">
    Contact
  </a>
</nav>
      </div>
    </header>
  );
}

export default Header;