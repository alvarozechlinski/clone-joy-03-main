import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo-leal.png";

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "São José dos Campos", href: "/sao-jose-dos-campos" },
  { label: "Contato", href: "/contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();
  const mobileMenuId = "mobile-menu";
  const isHome = location.pathname === "/";
  const fadeOpacity = isHome ? Math.max(0, 1 - scrollY / 220) : 1;
  const isHidden = isHome && fadeOpacity <= 0.04 && !open;

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
    <header
      className="fixed top-0 left-0 right-0 z-50 px-4 py-3 transition-opacity duration-500"
      style={{
        opacity: isHome ? fadeOpacity : 1,
        pointerEvents: isHidden ? "none" : "auto",
      }}
    >
      <nav
        className={`container mx-auto flex items-center justify-between rounded-full px-6 py-2 transition-all duration-500 ${
          isHome
            ? "bg-transparent border-transparent shadow-none backdrop-blur-0"
            : "border border-border bg-background/90 shadow-md backdrop-blur-md"
        }`}
      >
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Leal Energia"
            className="h-12 w-auto max-w-[220px] object-contain sm:h-14"
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isHome
                    ? location.pathname === link.href
                      ? "bg-white/20 text-white"
                      : "text-white hover:bg-white/12"
                    : location.pathname === link.href
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/5512997750212"
          target="_blank"
          rel="noopener noreferrer"
          className={`hidden lg:inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
            isHome
              ? "bg-white text-foreground hover:bg-white/90"
              : "bg-primary text-primary-foreground hover:opacity-90"
          }`}
        >
          Entre em contato
        </a>

        <button
          className={`lg:hidden p-2 transition-colors ${
            isHome ? "text-white" : "text-foreground"
          }`}
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
          className="mx-4 mt-2 rounded-2xl border border-border bg-background/95 p-6 shadow-lg backdrop-blur-md animate-fade-in lg:hidden"
        >
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={`block rounded-lg px-4 py-2 font-medium transition-colors ${
                    location.pathname === link.href
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="https://wa.me/5512997750212"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block rounded-full bg-primary px-5 py-3 text-center font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Entre em contato
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
