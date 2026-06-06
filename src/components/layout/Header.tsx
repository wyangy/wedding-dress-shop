import { Link } from "react-router";

function Header() {
  return (
    <header className="border-b border-stone-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link to="/" className="text-sm font-bold tracking-wide text-stone-900">
          WEDDING DRESS SHOP
        </Link>

        <nav className="flex gap-8 text-xs font-bold uppercase tracking-wide text-stone-900">
          <Link to="/shop" className="hover:text-stone-500">
            Shop
          </Link>

          <Link
            to={{ pathname: "/", hash: "#how-it-works" }}
            className="hover:text-stone-500"
          >
            How It Works
          </Link>

          <Link
            to={{ pathname: "/", hash: "#contact" }}
            className="hover:text-stone-500"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
