import mercadoLivreImg from "@/assets/mercado-livre.svg";

const MercadoLivreSection = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <img
            src={mercadoLivreImg}
            alt="Projeto de mercado livre de energia"
            className="h-72 w-full bg-white object-contain p-4 sm:h-96"
            loading="lazy"
            decoding="async"
            width={800}
            height={600}
          />
        </div>
        <div className="text-center lg:text-left">
          <h2 className="mb-4 text-3xl font-bold">Mercado Livre de Energia</h2>
          <p className="mb-4 text-base text-muted-foreground sm:text-lg">
            Mude do mercado tradicional e escolha o seu fornecedor de energia!
          </p>
          <p className="mb-4 text-base text-muted-foreground sm:text-lg">
            {"Reduza o seu custo, com "}
            <span className="font-semibold text-[#5ea81f]">baixo investimento</span>
            {" e consuma energia de fontes renov\u00e1veis!"}
          </p>
          <ul className="mb-6 space-y-3 text-left text-sm sm:text-base">
            <li className="rounded-2xl border border-[#5ea81f]/25 bg-[#5ea81f]/12 px-4 py-3 text-[#5ea81f]">
              {"Ideal para empresas eleg\u00edveis em m\u00e9dia e alta tens\u00e3o."}
            </li>
            <li className="rounded-2xl border border-[#5ea81f]/25 bg-[#5ea81f]/12 px-4 py-3 text-[#5ea81f]">
              {"Economia potencial com a escolha do fornecedor e gest\u00e3o do consumo."}
            </li>
            <li className="rounded-2xl border border-[#5ea81f]/25 bg-[#5ea81f]/12 px-4 py-3 text-[#5ea81f]">
              {"Tenha at\u00e9 30% economia mensal na sua fatura."}
            </li>
          </ul>
          <p className="mb-6 text-sm text-muted-foreground">
            {"*Consulte a elegibilidade da sua unidade consumidora."}
          </p>
          <a
            href="https://wa.me/5512997750212"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full max-w-[320px] items-center justify-center rounded-lg bg-primary px-6 py-3 font-bold text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
          >
            Receba uma consultoria gratuita
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default MercadoLivreSection;
