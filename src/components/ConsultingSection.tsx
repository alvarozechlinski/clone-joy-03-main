import consultingImg from "@/assets/consulting.jpg";

const ConsultingSection = () => (
  <section className="bg-muted/50 py-20">
    <div className="container mx-auto px-4">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="text-center lg:text-left">
          <h2 className="mb-6 text-3xl font-bold">{"Consultoria energ\u00e9tica"}</h2>

          <h3 className="mb-3 text-xl font-bold">Desenvolvimento de Projetos</h3>
          <p className="mb-6 text-base text-muted-foreground sm:text-lg">
            {"Contamos com experi\u00eancias s\u00f3lidas na implementa\u00e7\u00e3o de projetos de micro e mini gera\u00e7\u00e3o, ZeroGrid, carregadores el\u00e9tricos e aquecimento de \u00e1gua!"}
          </p>

          <h3 className="mb-3 text-xl font-bold">{"Seguran\u00e7a e efici\u00eancia"}</h3>
          <p className="mb-8 text-base text-muted-foreground sm:text-lg">
            {"Elaboramos cada projeto com um olhar espec\u00edfico, oferecendo solu\u00e7\u00f5es complementares e adequadas a cada cliente."}
          </p>

          <a
            href="https://wa.me/5512997750212"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full max-w-[320px] items-center justify-center rounded-lg bg-primary px-6 py-3 font-bold text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
          >
            Quero uma consultoria!
          </a>
        </div>
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <img
            src={consultingImg}
            alt={"Consultoria energ\u00e9tica"}
            className="h-80 w-full object-cover sm:h-[500px]"
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
