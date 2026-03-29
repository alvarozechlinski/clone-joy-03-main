import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import pageHero from "@/assets/page-hero.avif";
import solarResidential from "@/assets/solar-residential.png";
import { Building2, Leaf, MapPin, Sun } from "lucide-react";

const features = [
  { icon: Sun, title: "Alta Irradia\u00e7\u00e3o Solar", text: "S\u00e3o Jos\u00e9 dos Campos possui excelente incid\u00eancia solar durante todo o ano, ideal para gera\u00e7\u00e3o fotovoltaica." },
  { icon: Building2, title: "Polo Tecnol\u00f3gico", text: "A cidade \u00e9 um centro de inova\u00e7\u00e3o e tecnologia, com empresas que buscam solu\u00e7\u00f5es sustent\u00e1veis de energia." },
  { icon: Leaf, title: "Sustentabilidade", text: "Contribua para uma cidade mais verde e sustent\u00e1vel, reduzindo a pegada de carbono do Vale do Para\u00edba." },
  { icon: MapPin, title: "Atendimento Local", text: "Estamos presentes em S\u00e3o Jos\u00e9 dos Campos com equipe t\u00e9cnica especializada para atender voc\u00ea." },
];

const SaoJosePage = () => (
  <div className="min-h-screen">
    <Navbar />

    <section className="relative flex min-h-[360px] items-end overflow-hidden pb-20 pt-32 sm:min-h-[420px]">
      <div
        className="absolute inset-0 bg-cover"
        style={{ backgroundImage: `url(${pageHero})`, backgroundPosition: "center 32%" }}
      />
      <div className="absolute inset-0 bg-foreground/60" />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="mb-4 text-4xl font-black text-primary-foreground md:text-5xl">{"S\u00e3o Jos\u00e9 dos Campos"}</h1>
        <p className="mx-auto max-w-2xl text-lg text-primary-foreground/80">
          {"Energia solar para a capital do Vale do Para\u00edba."}
        </p>
      </div>
    </section>

    <ScrollReveal>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold">
                {"Energia Solar em "}
                <span className="text-gradient">{"S\u00e3o Jos\u00e9 dos Campos"}</span>
              </h2>
              <p className="mb-4 text-lg text-muted-foreground">
                {"S\u00e3o Jos\u00e9 dos Campos \u00e9 uma das cidades com maior potencial para energia solar no estado de S\u00e3o Paulo. Com alta incid\u00eancia solar e um mercado empresarial em constante crescimento, a cidade \u00e9 o cen\u00e1rio perfeito para investir em energia fotovoltaica."}
              </p>
              <p className="text-lg text-muted-foreground">
                {"A Leal Energia oferece solu\u00e7\u00f5es completas para resid\u00eancias, com\u00e9rcios e ind\u00fastrias da regi\u00e3o, com projetos personalizados e atendimento t\u00e9cnico especializado."}
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img src={solarResidential} alt={"Energia solar em S\u00e3o Jos\u00e9 dos Campos"} className="h-80 w-full object-cover" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>

    <ScrollReveal>
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Por que investir em energia solar em <span className="text-gradient">SJC</span>?
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-2xl border border-border bg-background p-6 text-center shadow-sm">
                <feature.icon className="mx-auto mb-4 h-10 w-10 text-primary" />
                <h4 className="mb-2 text-lg font-bold">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>

    <ScrollReveal>
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground">{"Solicite seu or\u00e7amento em SJC"}</h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-primary-foreground/80">
            {"Nossa equipe t\u00e9cnica est\u00e1 pronta para atender voc\u00ea em S\u00e3o Jos\u00e9 dos Campos e regi\u00e3o."}
          </p>
          <a
            href="https://wa.me/5512997750212"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-background px-8 py-4 text-lg font-bold text-foreground transition-transform hover:scale-105"
          >
            Fale conosco
          </a>
        </div>
      </section>
    </ScrollReveal>

    <Footer />
  </div>
);

export default SaoJosePage;
