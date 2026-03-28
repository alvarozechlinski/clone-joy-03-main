import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import solarRooftop from "@/assets/solar-rooftop.jpg";
import pageHero from "@/assets/page-hero.avif";
import { Award, Lightbulb, Target, Users } from "lucide-react";

const values = [
  { icon: Users, title: "Pessoas em primeiro lugar", text: "Valorizamos cada cliente e cada colaborador, construindo rela\u00e7\u00f5es de confian\u00e7a e transpar\u00eancia." },
  { icon: Award, title: "Excel\u00eancia", text: "Buscamos a mais alta qualidade em cada projeto, desde o planejamento at\u00e9 a entrega final." },
  { icon: Lightbulb, title: "Inova\u00e7\u00e3o", text: "Acompanhamos as \u00faltimas tecnologias do setor para oferecer as melhores solu\u00e7\u00f5es em energia solar." },
  { icon: Target, title: "Compromisso", text: "Assumimos o compromisso com a sustentabilidade e com o futuro energ\u00e9tico do Brasil." },
];

const SobrePage = () => (
  <div className="min-h-screen">
    <Navbar />

    <section className="relative overflow-hidden pb-20 pt-32">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${pageHero})` }} />
      <div className="absolute inset-0 bg-foreground/60" />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="mb-4 text-4xl font-black text-primary-foreground md:text-5xl">{"Sobre N\u00f3s"}</h1>
        <p className="mx-auto max-w-2xl text-lg text-primary-foreground/80">
          {"Conhe\u00e7a a Leal Energia e nossa miss\u00e3o de transformar a rela\u00e7\u00e3o das pessoas com a energia."}
        </p>
      </div>
    </section>

    <ScrollReveal>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold">
                {"Nossa "}
                <span className="text-gradient">{"Hist\u00f3ria"}</span>
              </h2>
              <p className="mb-4 text-lg text-muted-foreground">
                {"A Leal Energia nasceu com a miss\u00e3o de democratizar o acesso \u00e0 energia solar no Brasil. Com anos de experi\u00eancia no mercado, j\u00e1 ajudamos centenas de empresas e resid\u00eancias a reduzir seus custos com energia e a contribuir para um futuro mais sustent\u00e1vel."}
              </p>
              <p className="text-lg text-muted-foreground">
                {"Atuamos em todo o Vale do Para\u00edba e regi\u00e3o, oferecendo solu\u00e7\u00f5es completas em energia solar fotovoltaica, desde o projeto at\u00e9 a instala\u00e7\u00e3o e manuten\u00e7\u00e3o."}
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
              <h3 className="mb-4 text-2xl font-bold text-gradient">{"Miss\u00e3o"}</h3>
              <p className="text-lg text-muted-foreground">
                {"Entregar solu\u00e7\u00f5es de energia solar de alta qualidade, transformando a forma como empresas e pessoas geram e consomem energia, contribuindo para um futuro mais sustent\u00e1vel."}
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-background p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-gradient">{"Vis\u00e3o"}</h3>
              <p className="text-lg text-muted-foreground">
                {"Ser refer\u00eancia no mercado de energia solar, reconhecida pela excel\u00eancia, inova\u00e7\u00e3o e compromisso com a sustentabilidade energ\u00e9tica no Brasil."}
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
            {"Entre em contato conosco e solicite um or\u00e7amento sem compromisso."}
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
