import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => (
  <a
    href="https://wa.me/5512997750212"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Falar com a Leal Energia no WhatsApp"
    className="fixed bottom-4 left-1/2 z-50 inline-flex -translate-x-1/2 items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-2xl transition-transform hover:scale-105 md:hidden"
  >
    <MessageCircle size={18} />
    Fale no WhatsApp
  </a>
);

export default FloatingWhatsApp;
