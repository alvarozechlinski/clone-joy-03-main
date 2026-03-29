import logoLocaliza from "@/assets/logo-localiza.webp";
import logoDelta from "@/assets/logo-delta.png";
import logoCG from "@/assets/logo-cgofficemall.webp";
import logo3Corp from "@/assets/logo-3corp.png";
import logoAchiropita from "@/assets/logo-achiropita.webp";
import logoPackwind from "@/assets/logo-packwind.webp";
import logoNovoCliente from "@/assets/logo-novo-cliente.svg";

const clients = [
  { name: "Localiza Seminovos", url: "https://seminovos.localiza.com/", logo: logoLocaliza },
  { name: "Delta Electronics", url: "https://delta-electronics.com.br/", logo: logoDelta },
  { name: "CG Office Mall", url: "https://cgofficemall.com.br/", logo: logoCG },
  { name: "3Corp", url: "https://www.3corp.com.br/en/", logo: logo3Corp },
  { name: "Achiropita", url: "https://achiropita.org.br/", logo: logoAchiropita },
  { name: "Packwind", url: "https://packwind.com.br/", logo: logoPackwind },
  { name: "BRASOL", url: "https://www.brasol.co/", logo: logoNovoCliente },
];

const ClientsBar = () => (
  <section className="border-b border-border bg-background py-10">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 items-center gap-6 sm:grid-cols-3 lg:grid-cols-7 lg:gap-6">
        {clients.map((client) => (
          <a
            key={client.name}
            href={client.url || undefined}
            target={client.url ? "_blank" : undefined}
            rel={client.url ? "noopener noreferrer" : undefined}
            className="flex h-16 items-center justify-center opacity-70 transition-opacity hover:opacity-100"
            aria-label={client.name}
          >
            <img
              src={client.logo}
              alt={client.name}
              className="max-h-10 max-w-[140px] object-contain sm:max-h-12 sm:max-w-full"
              loading="lazy"
              decoding="async"
              width={160}
              height={48}
            />
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default ClientsBar;
