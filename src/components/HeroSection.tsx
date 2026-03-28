import heroImg from "@/assets/hero-home.jpg";

const HeroSection = () => (
  <section
    id="inicio"
    className="relative flex min-h-screen items-center justify-center overflow-hidden"
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
      <div className="mx-auto flex max-w-3xl flex-col items-center lg:mx-0 lg:items-start">
        <h1 className="mb-6 max-w-4xl text-4xl font-black leading-tight text-primary-foreground sm:text-5xl lg:text-6xl">
          {"CONSTRUINDO CAMINHOS DO SOL AT\u00c9 VOC\u00ca!"}
        </h1>
        <p className="mb-8 max-w-2xl text-base font-medium text-primary-foreground/90 sm:text-lg md:text-xl">
          {"Ajudamos empresas e pessoas a mudar sua rela\u00e7\u00e3o com a energia!"}
        </p>
        <a
          href="https://wa.me/5512997750212"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full animate-pulse-glow items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground transition-transform hover:scale-105 sm:w-auto sm:text-lg"
        >
          Comece a economizar agora!
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
