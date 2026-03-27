import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import solarRooftop from "@/assets/solar-rooftop.jpg";
import solarField from "@/assets/solar-field.jpg";
import { Award, Lightbulb, Target, Users } from "lucide-react";

const values = [
  { icon: Users, title: "Pessoas em primeiro lugar", text: "Valorizamos cada cliente e cada colaborador, construindo relações de confiança e transparência." },
  { icon: Award, title: "Excelência", text: "Buscamos a mais alta qualidade em cada projeto, desde o planejamento até a entrega final." },
  { icon: Lightbulb, title: "Inovação", text: "Acompanhamos as últimas tecnologias do setor para oferecer as melhores soluções em energia solar." },
  { icon: Target, title: "Compromisso", text: "Assumimos o compromisso com a sustentabilidade e com o futuro energético do Brasil." },
];

const SobrePage = () => (
  <div className="min-h-screen">
    <Navbar />

    <section className="relative overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${solarField})` }} />
      <div className="absolute inset-0 bg-foreground/60" />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="mb-4 text-4xl font-black text-primary-foreground md:text-5xl">Sobre Nós</h1>
        <p className="mx-auto max-w-2xl text-lg text-primary-foreground/80">
          Conheça a Leal Energia e nossa missão de transformar a relação das pessoas com a energia.
        </p>
      </div>
    </section>

    <ScrollReveal>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold">
                Nossa <span className="text-gradient">História</span>
              </h2>
              <p className="mb-4 text-lg text-muted-foreground">
                A Leal Energia nasceu com a missão de democratizar o acesso à energia solar no Brasil. Com anos de experiência no mercado, já ajudamos centenas de empresas e residências a reduzir seus custos com energia e a contribuir para um futuro mais sustentável.
              </p>
              <p className="text-lg text-muted-foreground">
                Atuamos em todo o Vale do Paraíba e região, oferecendo soluções completas em energia solar fotovoltaica, desde o projeto até a instalação e manutenção.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img src={solarRooftop} alt="Equipe Leal Energia" className="h-80 w-full object-cover" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>

    <ScrollReveal>
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-background p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-gradient">Missão</h3>
              <p className="text-lg text-muted-foreground">
                Entregar soluções de energia solar de alta qualidade, transformando a forma como empresas e pessoas geram e consomem energia, contribuindo para um futuro mais sustentável.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-background p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-gradient">Visão</h3>
              <p className="text-lg text-muted-foreground">
                Ser referência no mercado de energia solar, reconhecida pela excelência, inovação e compromisso com a sustentabilidade energética no Brasil.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>

    <ScrollReveal>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Nossos <span className="text-gradient">Valores</span>
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl border border-border bg-muted/30 p-6 text-center">
                <value.icon className="mx-auto mb-4 h-10 w-10 text-primary" />
                <h4 className="mb-2 text-lg font-bold">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>

    <ScrollReveal>
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground">Pronto para economizar com energia solar?</h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-primary-foreground/80">
            Entre em contato conosco e solicite um orçamento sem compromisso.
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

export default SobrePage;
