import heroImg from "@/assets/hero-solar.jpg";

const HeroSection = () => (
  <section
    id="inicio"
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    <img
      src={heroImg}
      alt=""
      aria-hidden="true"
      fetchPriority="high"
      decoding="async"
      className="absolute inset-0 h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-foreground/50" />
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

    <div className="relative z-10 container mx-auto px-4 text-center lg:text-left">
      <div className="max-w-2xl lg:mx-0">
        <h1 className="mb-6 text-4xl font-black leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
          CONSTRUINDO CAMINHOS DO SOL ATÉ VOCÊ!
        </h1>
        <p className="mb-8 text-lg font-medium text-primary-foreground/90 md:text-xl">
          Ajudamos empresas e pessoas a mudar sua relação com a energia!
        </p>
        <a
          href="https://wa.me/5512997750212"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full bg-primary px-8 py-4 text-lg font-bold text-primary-foreground transition-transform hover:scale-105 animate-pulse-glow"
        >
          Comece a economizar agora!
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
