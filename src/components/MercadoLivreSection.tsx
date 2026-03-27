import mercadoLivreImg from "@/assets/mercado-livre.svg";

const MercadoLivreSection = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <img
            src={mercadoLivreImg}
            alt="Projeto de mercado livre de energia"
            className="h-96 w-full bg-white object-contain"
            loading="lazy"
            decoding="async"
            width={800}
            height={600}
          />
        </div>
        <div>
          <h2 className="mb-4 text-3xl font-bold">Mercado Livre de Energia</h2>
          <p className="mb-4 text-lg text-muted-foreground">
            Mude do mercado tradicional e escolha o seu fornecedor de energia!
          </p>
          <p className="mb-4 text-lg text-muted-foreground">
            Reduza o seu custo, com <span className="font-semibold text-gradient">baixo investimento</span> e consuma energia de fontes renováveis!
          </p>
          <p className="mb-6 text-sm text-muted-foreground">
            *Para unidades em alta tensão.
          </p>
          <a
            href="https://wa.me/5512997750212"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-primary px-6 py-3 font-bold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Receba uma consultoria gratuita
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default MercadoLivreSection;
