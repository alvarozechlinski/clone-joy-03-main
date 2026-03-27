import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import solarField from "@/assets/solar-field.jpg";
import solarIndustrial from "@/assets/solar-industrial.jpg";
import solarCloseup from "@/assets/solar-closeup.jpg";

const articles = [
  {
    title: "Como a energia solar pode reduzir sua conta de luz em até 95%",
    excerpt: "Descubra como sistemas fotovoltaicos estão revolucionando a forma como brasileiros consomem energia e economizam.",
    date: "15 Mar 2024",
    image: solarField,
  },
  {
    title: "Novas regulamentações de energia solar no Brasil em 2024",
    excerpt: "Entenda as mudanças na legislação e como elas impactam quem já tem ou deseja instalar painéis solares.",
    date: "28 Fev 2024",
    image: solarIndustrial,
  },
  {
    title: "Energia solar para empresas: retorno sobre o investimento",
    excerpt: "Veja como empresas de diferentes portes estão obtendo retorno financeiro com a instalação de sistemas solares.",
    date: "10 Jan 2024",
    image: solarCloseup,
  },
];

const NoticiasPage = () => (
  <div className="min-h-screen">
    <Navbar />

    <section className="relative overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${solarField})` }} />
      <div className="absolute inset-0 bg-foreground/60" />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="mb-4 text-4xl font-black text-primary-foreground md:text-5xl">Notícias</h1>
        <p className="mx-auto max-w-2xl text-lg text-primary-foreground/80">
          Fique por dentro das novidades sobre energia solar e sustentabilidade.
        </p>
      </div>
    </section>

    <ScrollReveal>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <article key={article.title} className="overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition-shadow hover:shadow-lg">
                <img src={article.image} alt={article.title} className="h-48 w-full object-cover" loading="lazy" decoding="async" />
                <div className="p-6">
                  <span className="text-sm font-semibold text-primary">{article.date}</span>
                  <h3 className="mt-2 mb-3 text-xl font-bold">{article.title}</h3>
                  <p className="text-muted-foreground">{article.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>

    <Footer />
  </div>
);

export default NoticiasPage;
