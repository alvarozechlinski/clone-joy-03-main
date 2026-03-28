import solarRooftop from "@/assets/solar-rooftop.jpg";
import solarResidential from "@/assets/solar-residential.jpg";

const AboutSection = () => (
  <section id="sobre" className="py-20">
    <div className="container mx-auto px-4">
      <h2 className="mb-12 text-center text-3xl font-bold md:mb-16 md:text-4xl">
        O que podemos fazer por{" "}
        <span className="border-b-2 border-primary pb-1 text-gradient">{"voc\u00ea"}</span>?
      </h2>

      <div className="mb-12 grid items-center gap-10 lg:mb-16 lg:grid-cols-2 lg:gap-12">
        <div className="text-center lg:text-left">
          <h3 className="mb-4 text-2xl font-bold">
            <span className="text-gradient">{"Energia limpa e renov\u00e1vel"}</span>
          </h3>
          <p className="mb-4 text-base text-muted-foreground sm:text-lg">
            {"Entregamos solu\u00e7\u00f5es de energia, transformando a forma como empresas e pessoas geram e consomem energia!"}
          </p>
          <p className="text-base text-muted-foreground sm:text-lg">
            {"Nosso objetivo \u00e9 simples: ajudar voc\u00ea a reduzir custos, aumentar a sustentabilidade e construir um futuro mais verde."}
          </p>
        </div>
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <img
            src={solarRooftop}
            alt={"Pain\u00e9is solares em telhado comercial"}
            className="h-72 w-full object-cover sm:h-80"
            loading="lazy"
            decoding="async"
            width={800}
            height={600}
          />
        </div>
      </div>

      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="order-2 overflow-hidden rounded-2xl shadow-lg lg:order-1">
          <img
            src={solarResidential}
            alt={"Instala\u00e7\u00e3o de pain\u00e9is solares residencial"}
            className="h-72 w-full object-cover sm:h-80"
            loading="lazy"
            decoding="async"
            width={800}
            height={600}
          />
        </div>
        <div className="order-1 text-center lg:order-2 lg:text-left">
          <p className="text-base text-muted-foreground sm:text-lg">
            {"Projetamos e implementamos sistemas solares personalizados, otimizando o desempenho energ\u00e9tico e garantindo economia, automa\u00e7\u00e3o, seguran\u00e7a e longevidade para o seu neg\u00f3cio!"}
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
