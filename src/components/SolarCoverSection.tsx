import solarField from "@/assets/solar-field.jpg";

const SolarCoverSection = () => (
  <section
    className="relative flex items-center justify-center py-20 sm:py-24 lg:py-28"
    style={{
      backgroundImage: `url(${solarField})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "scroll",
    }}
  >
    <div className="absolute inset-0 bg-foreground/60" />
    <div className="relative z-10 container mx-auto px-4 text-center">
      <h2 className="mb-6 text-3xl font-black text-primary-foreground sm:text-4xl md:text-5xl">
        Energia Solar
      </h2>
      <p className="mx-auto max-w-3xl text-base text-primary-foreground/90 sm:text-lg md:text-xl">
        {"Entregamos solu\u00e7\u00f5es de energia solar, transformando a forma como empresas de todos os portes geram e consomem energia!"}
      </p>
    </div>
  </section>
);

export default SolarCoverSection;
