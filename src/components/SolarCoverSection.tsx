import solarField from "@/assets/solar-field.jpg";

const SolarCoverSection = () => (
  <section
    className="relative py-28 flex items-center justify-center"
    style={{ backgroundImage: `url(${solarField})`, backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}
  >
    <div className="absolute inset-0 bg-foreground/60" />
    <div className="relative z-10 container mx-auto px-4 text-center">
      <h2 className="text-4xl md:text-5xl font-black text-primary-foreground mb-6">
        Energia Solar
      </h2>
      <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
        Entregamos soluções de energia solar, transformando a forma como empresas de todos os portes geram e consomem energia!
      </p>
    </div>
  </section>
);

export default SolarCoverSection;
