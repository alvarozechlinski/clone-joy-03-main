import logoLocaliza from "@/assets/logo-localiza.webp";
import logoDelta from "@/assets/logo-delta.png";
import logoCG from "@/assets/logo-cgofficemall.webp";
import logo3Corp from "@/assets/logo-3corp.png";
import logoAchiropita from "@/assets/logo-achiropita.webp";
import logoPackwind from "@/assets/logo-packwind.webp";

const clients = [
  { name: "Localiza Seminovos", url: "https://seminovos.localiza.com/", logo: logoLocaliza },
  { name: "Delta Electronics", url: "https://delta-electronics.com.br/", logo: logoDelta },
  { name: "CG Office Mall", url: "https://cgofficemall.com.br/", logo: logoCG },
  { name: "3Corp", url: "https://www.3corp.com.br/en/", logo: logo3Corp },
  { name: "Achiropita", url: "https://achiropita.org.br/", logo: logoAchiropita },
  { name: "Packwind", url: "https://packwind.com.br/", logo: logoPackwind },
];

const ClientsBar = () => (
  <section className="border-b border-border bg-background py-10">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 items-center gap-8 md:grid-cols-3 lg:grid-cols-6">
        {clients.map((client) =>
          client.url === "#" ? (
            <div
              key={client.name}
              className="flex h-16 items-center justify-center opacity-70"
              aria-label={client.name}
            >
              <img src={client.logo} alt={client.name} className="max-h-12 max-w-full object-contain" />
            </div>
          ) : (
            <a
              key={client.name}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-16 items-center justify-center opacity-70 transition-opacity hover:opacity-100"
            >
              <img src={client.logo} alt={client.name} className="max-h-12 max-w-full object-contain" />
            </a>
          )
        )}
      </div>
    </div>
  </section>
);

export default ClientsBar;
