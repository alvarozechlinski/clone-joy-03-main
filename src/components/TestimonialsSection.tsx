import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Equipe bem atenciosa, bem profissional! Bem atendido desde a área comercial até a entrega do serviço instalado. Ressaltando também o retorno do pós-venda pelo interesse em saber da satisfação após as primeiras contas!",
    author: "Carlos Azevedo",
    role: "Sistema Residencial",
  },
  {
    text: "Excelente lugar e de fácil acesso! Muito impressionado com a infraestrutura da empresa. Além do produto ser de primeira linha, a confiabilidade e o tratamento aos clientes são inquestionáveis. Parabéns Leal Energia por seu trabalho! Recomendo!",
    author: "Cezar Justino",
    role: "Sistema Residencial",
  },
  {
    text: "Fomos muito bem atendidos pela Leal Energia Solar! Equipe de instalação muito experiente, muito obrigado pelo serviço prestado! Ótimo investimento!",
    author: "João",
    role: "Planta Industrial",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const testimonial = testimonials[current];

  return (
    <section id="depoimentos" className="gradient-primary py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <Quote className="mx-auto mb-6 h-12 w-12 text-primary-foreground/40" />
          <p className="mb-8 text-xl font-medium leading-relaxed text-primary-foreground md:text-2xl">
            {testimonial.text}
          </p>
          <p className="text-lg font-bold text-primary-foreground">{testimonial.author}</p>
          <p className="text-sm text-primary-foreground/70">{testimonial.role}</p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="rounded-full border border-primary-foreground/30 p-2 text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              aria-label="Anterior"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-3 w-3 rounded-full transition-colors ${
                    index === current ? "bg-primary-foreground" : "bg-primary-foreground/30"
                  }`}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="rounded-full border border-primary-foreground/30 p-2 text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              aria-label="Próximo"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
