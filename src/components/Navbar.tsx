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
  const location = useLocation();
  const mobileMenuId = "mobile-menu";

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
      <nav className="container mx-auto flex items-center justify-between rounded-full border border-border bg-background/90 px-6 py-2 shadow-md backdrop-blur-md">
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
          className="hidden lg:inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Entre em contato
        </a>

        <button
          className="lg:hidden p-2 text-foreground"
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
