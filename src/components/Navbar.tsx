import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo-leal.png";

const navLinks = [
  { label: "In\u00edcio", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "S\u00e3o Jos\u00e9 dos Campos", href: "/sao-jose-dos-campos" },
  { label: "Contato", href: "/contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();
  const mobileMenuId = "mobile-menu";
  const isHome = location.pathname === "/";
  const isScrolled = scrollY > 72;
  const useSolidStyle = !isHome || isScrolled || open;

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isHome) {
      setScrollY(0);
      return;
    }

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 py-3 transition-all duration-500">
      <nav
        className={`container mx-auto flex items-center justify-between rounded-full border px-5 transition-all duration-500 sm:px-6 ${
          useSolidStyle
            ? "border-border bg-background/92 py-2 shadow-xl backdrop-blur-md"
            : "border-transparent bg-transparent py-3 shadow-none backdrop-blur-0"
        }`}
      >
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Leal Energia"
            className={`w-auto object-contain transition-all duration-500 ${
              useSolidStyle ? "h-11 max-w-[188px] sm:h-12" : "h-12 max-w-[220px] sm:h-14"
            }`}
          />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    useSolidStyle
                      ? isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-muted"
                      : isActive
                        ? "bg-white/20 text-white"
                        : "text-white hover:bg-white/12"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <a
          href="https://wa.me/5512997750212"
          target="_blank"
          rel="noopener noreferrer"
          className={`hidden items-center rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 lg:inline-flex ${
            useSolidStyle
              ? "bg-primary text-primary-foreground hover:opacity-90"
              : "bg-white text-foreground hover:bg-white/90"
          }`}
        >
          Entre em contato
        </a>

        <button
          className={`p-2 transition-colors lg:hidden ${useSolidStyle ? "text-foreground" : "text-white"}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          aria-expanded={open}
          aria-controls={mobileMenuId}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div
          id={mobileMenuId}
          className="mx-auto mt-2 w-full max-w-[calc(100%-2rem)] rounded-2xl border border-border bg-background/95 p-6 text-center shadow-lg backdrop-blur-md animate-fade-in lg:hidden"
        >
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;

              return (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className={`block rounded-lg px-4 py-3 font-medium transition-colors ${
                      isActive ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <a
            href="https://wa.me/5512997750212"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto mt-4 block w-full max-w-[320px] rounded-full bg-primary px-5 py-3 text-center font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Entre em contato
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
