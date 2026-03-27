import consultingImg from "@/assets/consulting.jpg";

const ConsultingSection = () => (
  <section className="bg-muted/50 py-20">
    <div className="container mx-auto px-4">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <h2 className="mb-6 text-3xl font-bold">Consultoria energética</h2>

          <h3 className="mb-3 text-xl font-bold">Desenvolvimento de Projetos</h3>
          <p className="mb-6 text-lg text-muted-foreground">
            Contamos com experiências sólidas na implementação de projetos de micro e mini geração; ZeroGrid; carregadores elétricos e aquecimento de água!
          </p>

          <h3 className="mb-3 text-xl font-bold">Segurança e eficiência</h3>
          <p className="mb-8 text-lg text-muted-foreground">
            Elaboramos cada projeto com um olhar específico, oferecendo soluções complementares e adequadas a cada cliente.
          </p>

          <a
            href="https://wa.me/5512997750212"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-primary px-6 py-3 font-bold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Quero uma consultoria!
          </a>
        </div>
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <img
            src={consultingImg}
            alt="Consultoria energética"
            className="h-[500px] w-full object-cover"
            loading="lazy"
            decoding="async"
            width={800}
            height={900}
          />
        </div>
      </div>
    </div>
  </section>
);

export default ConsultingSection;
