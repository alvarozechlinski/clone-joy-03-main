import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import solarField from "@/assets/solar-field.jpg";
import solarResidential from "@/assets/solar-residential.jpg";
import { Building2, Leaf, MapPin, Sun } from "lucide-react";

const features = [
  { icon: Sun, title: "Alta Irradiação Solar", text: "São José dos Campos possui excelente incidência solar durante todo o ano, ideal para geração fotovoltaica." },
  { icon: Building2, title: "Polo Tecnológico", text: "A cidade é um centro de inovação e tecnologia, com empresas que buscam soluções sustentáveis de energia." },
  { icon: Leaf, title: "Sustentabilidade", text: "Contribua para uma cidade mais verde e sustentável, reduzindo a pegada de carbono do Vale do Paraíba." },
  { icon: MapPin, title: "Atendimento Local", text: "Estamos presentes em São José dos Campos com equipe técnica especializada para atender você." },
];

const SaoJosePage = () => (
  <div className="min-h-screen">
    <Navbar />

    <section className="relative overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${solarField})` }} />
      <div className="absolute inset-0 bg-foreground/60" />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="mb-4 text-4xl font-black text-primary-foreground md:text-5xl">São José dos Campos</h1>
        <p className="mx-auto max-w-2xl text-lg text-primary-foreground/80">
          Energia solar para a capital do Vale do Paraíba.
        </p>
      </div>
    </section>

    <ScrollReveal>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold">
                Energia Solar em <span className="text-gradient">São José dos Campos</span>
              </h2>
              <p className="mb-4 text-lg text-muted-foreground">
                São José dos Campos é uma das cidades com maior potencial para energia solar no estado de São Paulo. Com alta incidência solar e um mercado empresarial em constante crescimento, a cidade é o cenário perfeito para investir em energia fotovoltaica.
              </p>
              <p className="text-lg text-muted-foreground">
                A Leal Energia oferece soluções completas para residências, comércios e indústrias da região, com projetos personalizados e atendimento técnico especializado.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img src={solarResidential} alt="Energia solar em São José dos Campos" className="h-80 w-full object-cover" loading="lazy" decoding="async" />
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
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground">Solicite seu orçamento em SJC</h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-primary-foreground/80">
            Nossa equipe técnica está pronta para atender você em São José dos Campos e região.
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
