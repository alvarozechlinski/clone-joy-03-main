import { FormEvent, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import pageHero from "@/assets/page-hero.avif";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/alvaro.zechlinski@lealenergia.com.br";

const ContatoPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFeedback(null);
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("_subject", "Novo contato pelo site Leal Energia");
    formData.append("_captcha", "false");
    formData.append("_template", "table");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Falha ao enviar o formul\u00e1rio.");
      }

      setFeedback({
        type: "success",
        message: "Mensagem enviada com sucesso. Em breve entraremos em contato.",
      });
      form.reset();
    } catch {
      setFeedback({
        type: "error",
        message: "N\u00e3o foi poss\u00edvel enviar agora. Tente novamente em instantes ou fale pelo WhatsApp.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative flex min-h-[360px] items-end overflow-hidden pb-20 pt-32 sm:min-h-[420px]">
        <div
          className="absolute inset-0 bg-cover"
          style={{ backgroundImage: `url(${pageHero})`, backgroundPosition: "center 32%" }}
        />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-black text-primary-foreground md:text-5xl">Contato</h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/80">
            {"Entre em contato e solicite seu or\u00e7amento sem compromisso."}
          </p>
        </div>
      </section>

      <ScrollReveal>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="text-center lg:text-left">
                <h2 className="mb-8 text-3xl font-bold">
                  Fale <span className="text-gradient">Conosco</span>
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="mt-1 h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <h4 className="mb-1 font-bold">{"Endere\u00e7o"}</h4>
                      <p className="text-muted-foreground">{"S\u00e3o Jos\u00e9 dos Campos - SP"}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="mt-1 h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <h4 className="mb-1 font-bold">Telefone / WhatsApp</h4>
                      <a href="https://wa.me/5512997750212" className="text-primary hover:underline">
                        (12) 99775-0212
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="mt-1 h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <h4 className="mb-1 font-bold">E-mail</h4>
                      <a href="mailto:contato@lealenergia.com.br" className="text-primary hover:underline">
                        contato@lealenergia.com.br
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="mt-1 h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <h4 className="mb-1 font-bold">{"Hor\u00e1rio de Atendimento"}</h4>
                      <p className="text-muted-foreground">{"Segunda a Sexta: 08h \u00e0s 18h"}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href="https://wa.me/5512997750212"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full max-w-[320px] items-center justify-center rounded-full bg-primary px-8 py-4 text-lg font-bold text-primary-foreground transition-transform hover:scale-105 sm:w-auto"
                  >
                    Chamar no WhatsApp
                  </a>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {"Respondemos em hor\u00e1rio comercial e retornamos o mais r\u00e1pido poss\u00edvel."}
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-muted/30 p-8">
                <h3 className="mb-6 text-2xl font-bold">Envie uma mensagem</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

                  <div>
                    <label htmlFor="nome" className="mb-1 block text-sm font-medium">
                      Nome
                    </label>
                    <input
                      id="nome"
                      name="nome"
                      type="text"
                      required
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 transition-colors focus:border-primary focus:outline-none"
                      placeholder="Seu nome"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-1 block text-sm font-medium">
                      E-mail
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 transition-colors focus:border-primary focus:outline-none"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="telefone" className="mb-1 block text-sm font-medium">
                      Telefone
                    </label>
                    <input
                      id="telefone"
                      name="telefone"
                      type="tel"
                      required
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 transition-colors focus:border-primary focus:outline-none"
                      placeholder="(12) 99999-9999"
                    />
                  </div>

                  <div>
                    <label htmlFor="mensagem" className="mb-1 block text-sm font-medium">
                      Mensagem
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      rows={4}
                      required
                      className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 transition-colors focus:border-primary focus:outline-none"
                      placeholder="Como podemos ajudar?"
                    />
                  </div>

                  {feedback && (
                    <p
                      className={`rounded-lg px-4 py-3 text-sm ${
                        feedback.type === "success"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {feedback.message}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar mensagem"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <Footer />
    </div>
  );
};

export default ContatoPage;
