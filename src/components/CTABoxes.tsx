const boxes = [
  {
    title: "Quer reduzir os custos da sua residência ou comércio?",
    highlight: "reduzir",
    cta: "Comece a economizar!",
    href: "https://wa.me/5512997750212",
  },
  {
    title: "Sua empresa ou indústria precisa de soluções em energia?",
    highlight: "soluções",
    cta: "CONHEÇA AS SOLUÇÕES!",
    href: "https://wa.me/5512997750212",
  },
  {
    title: "Quer o sol trabalhando por você? Entenda como!",
    highlight: "trabalhando",
    cta: "DESCUBRA COMO!",
    href: "https://wa.me/5512997750212",
  },
];

const CTABoxes = () => (
  <section id="solucoes" className="grid lg:grid-cols-3">
    {boxes.map((box, index) => (
      <div
        key={index}
        className="gradient-primary flex min-h-[280px] flex-col items-center justify-center px-6 py-14 text-center sm:px-8 sm:py-16 lg:min-h-[320px]"
      >
        <h2 className="mb-6 max-w-md text-2xl font-bold text-primary-foreground md:text-3xl">
          {box.title.split(box.highlight).map((part, partIndex) =>
            partIndex === 0 ? (
              <span key={partIndex}>
                {part}
                <span className="text-accent">{box.highlight}</span>
              </span>
            ) : (
              <span key={partIndex}>{part}</span>
            )
          )}
        </h2>
        <a
          href={box.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full max-w-[320px] items-center justify-center rounded-lg bg-background px-6 py-3 font-bold text-foreground shadow-lg transition-transform hover:scale-105"
        >
          {box.cta}
        </a>
      </div>
    ))}
  </section>
);

export default CTABoxes;
