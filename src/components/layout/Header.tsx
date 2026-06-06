import { Link } from "react-router";

function Header() {
  const scrollToSection = (id: string) => {
    window.setTimeout(() => {
      const section = document.getElementById(id);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 0);
  };

  return (
    <header className="border-b border-stone-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          to="/"
          className="text-sm font-bold tracking-wide text-stone-900"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          WEDDING DRESS SHOP
        </Link>

        <nav className="flex gap-8 text-xs font-bold uppercase tracking-wide text-stone-900">
          <Link
            to="/shop"
            className="hover:text-stone-500"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            Shop
          </Link>

          <Link
            to={{ pathname: "/", hash: "#how-it-works" }}
            className="hover:text-stone-500"
            onClick={() => scrollToSection("how-it-works")}
          >
            How It Works
          </Link>

          <Link
            to={{ pathname: "/", hash: "#contact" }}
            className="hover:text-stone-500"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
