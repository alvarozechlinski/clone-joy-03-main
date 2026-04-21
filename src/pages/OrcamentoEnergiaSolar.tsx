import { FormEvent, useEffect, useState } from "react";
import {
  ArrowRight,
  Banknote,
  Calendar,
  CheckCircle2,
  HelpCircle,
  Home,
  Mail,
  MapPin,
  MessageCircle,
  Percent,
  Phone,
  PiggyBank,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Star,
  Sun,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";
import { z } from "zod";
import heroImg from "@/assets/programareformabr/hero-familia-solar.jpg";
import instaladorImg from "@/assets/programareformabr/instalador.jpg";
import usePageMeta from "@/hooks/usePageMeta";

const FORM_SUBMIT_ENDPOINT = "https://formsubmit.co/ajax/programareforma@lealenergia.com.br";

const pains = [
  {
    icon: TrendingUp,
    title: "Conta de luz pesada",
    text: "Todo mês a fatura sobe e pesa no orçamento da família.",
  },
  {
    icon: Wallet,
    title: "Dúvida sobre financiamento",
    text: "Você quer instalar energia solar, mas ainda não sabe como usar o Programa Reforma Brasil.",
  },
  {
    icon: HelpCircle,
    title: "Processo parece complicado",
    text: "Fica difícil entender documentação, análise do perfil, prazos e próximos passos.",
  },
  {
    icon: ShieldAlert,
    title: "Receio de contratar errado",
    text: "Você quer segurança, orientação clara e uma empresa que acompanhe tudo até a instalação.",
  },
];

const benefits = [
  {
    icon: Percent,
    title: "Economia real na conta",
    text: "A energia solar pode reduzir em até 95% o valor da conta, conforme o dimensionamento do sistema.",
  },
  {
    icon: Banknote,
    title: "Simulação alinhada ao programa",
    text: "A Leal Energia avalia seu perfil e mostra como o Reforma Brasil pode ajudar no projeto.",
  },
  {
    icon: Calendar,
    title: "Etapas bem explicadas",
    text: "Você entende documentação, análise, prazos e acompanhamento antes de seguir com a instalação.",
  },
  {
    icon: PiggyBank,
    title: "Condições facilitadas",
    text: "Nós orientamos você sobre as possibilidades do programa para tirar o sistema do papel com segurança.",
  },
  {
    icon: Home,
    title: "Projeto para residência",
    text: "Soluções pensadas para casas, com análise do consumo e da estrutura do imóvel.",
  },
  {
    icon: ShieldCheck,
    title: "Acompanhamento completo",
    text: "Da simulação ao projeto final, você fala com uma equipe que conhece o processo de ponta a ponta.",
  },
];

const steps = [
  {
    title: "Você fala com a gente",
    text: "Chama no WhatsApp ou preenche o formulário. O atendimento é rápido e sem compromisso.",
  },
  {
    title: "Analisamos seu perfil no Reforma Brasil",
    text: "Avaliamos consumo, perfil do imóvel e informações necessárias para a simulação.",
  },
  {
    title: "Apresentamos a proposta",
    text: "Você recebe uma explicação clara sobre o projeto, as condições e a economia estimada.",
  },
  {
    title: "Acompanhamos até a instalação",
    text: "A Leal Energia segue com você em cada etapa, do comercial ao projeto final do sistema solar.",
  },
];

const stats = [
  { icon: Wallet, value: "Até 95%", label: "Redução na conta de luz" },
  { icon: CheckCircle2, value: "Análise", label: "Do perfil no programa" },
  { icon: Users, value: "Equipe", label: "Com atendimento humano" },
  { icon: Star, value: "Suporte", label: "Em todas as etapas" },
];

const requisitos = [
  "Ter interesse em usar o Programa Reforma Brasil para energia solar",
  "Possuir um imóvel com perfil compatível para instalação do sistema",
  "Passar pela análise necessária do programa e do crédito",
  "Querer um projeto residencial com apoio comercial e técnico",
  "Buscar economia na conta de luz com um processo mais seguro e guiado",
];

const testimonials = [
  {
    name: "Ricardo Almeida",
    city: "Campinas, SP",
    text: "A Leal Energia me explicou como funcionava o Reforma Brasil e deixou tudo mais claro. O atendimento foi muito seguro do começo ao fim.",
  },
  {
    name: "Fernanda Moreira",
    city: "Sorocaba, SP",
    text: "Eu tinha muitas dúvidas sobre documentação e simulação. Eles orientaram cada etapa e hoje já vejo diferença na conta de luz.",
  },
  {
    name: "Paulo Henrique Costa",
    city: "Ribeirão Preto, SP",
    text: "Escolhi a Leal Energia pelo suporte no processo. Gostei da transparência e da forma como explicaram o programa e a instalação.",
  },
];

const faqs = [
  {
    q: "O que é o Programa Reforma Brasil?",
    a: "É um programa voltado para melhorias no imóvel, incluindo soluções que podem ajudar na instalação de energia solar, conforme as regras e análises aplicáveis ao perfil de cada cliente.",
  },
  {
    q: "Como a Leal Energia ajuda nesse processo?",
    a: "A Leal Energia orienta você desde a simulação inicial, explica os requisitos do programa, avalia o perfil do imóvel e acompanha o projeto de energia solar até a etapa final.",
  },
  {
    q: "Quem pode solicitar a análise?",
    a: "Pessoas que desejam instalar energia solar em residência e querem entender se o perfil se encaixa nas condições do Reforma Brasil e na viabilidade do projeto.",
  },
  {
    q: "O que é renda bruta familiar?",
    a: "É a soma dos rendimentos mensais da família antes de descontos, como INSS, vale-transporte ou empréstimos.",
  },
  {
    q: "Por que vocês pedem a renda bruta familiar?",
    a: "A renda bruta familiar ajuda a equipe comercial a entender melhor o perfil da família e a orientar a simulação dentro das condições do Programa Reforma Brasil.",
  },
  {
    q: "Quanto posso economizar na conta de luz?",
    a: "A economia depende do consumo, do sistema indicado e das características do imóvel. Em muitos casos, a redução pode chegar a até 95% da conta.",
  },
  {
    q: "Preciso entender de documentação ou financiamento?",
    a: "Não. A equipe comercial da Leal Energia explica cada etapa, mostra o que será necessário e orienta você de forma simples durante o processo.",
  },
  {
    q: "Como falo com o atendimento comercial?",
    a: "Você pode chamar a Leal Energia no WhatsApp pelo número (12) 99775-0212 e receber orientação comercial sobre o Programa Reforma Brasil.",
  },
];

const extractDigits = (value: string) => value.replace(/\D/g, "");

const formatWhatsApp = (value: string) => {
  const digits = extractDigits(value).slice(0, 11);

  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
};

const formatCurrencyInput = (value: string) => {
  const digits = extractDigits(value).slice(0, 12);

  if (!digits) return "";

  const amount = Number(digits) / 100;

  return amount.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};

const requiredCurrencyField = (label: string) =>
  z
    .string()
    .trim()
    .refine((value) => extractDigits(value).length > 0, `Informe ${label}`)
    .refine((value) => Number(extractDigits(value)) > 0, `Informe ${label}`)
    .transform(formatCurrencyInput);

const leadSchema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(100),
  whatsapp: z
    .string()
    .trim()
    .transform(extractDigits)
    .refine((digits) => digits.length >= 10, "Informe um WhatsApp válido")
    .refine((digits) => digits.length <= 11, "O WhatsApp deve ter no máximo 11 dígitos"),
  cidade: z.string().trim().min(2, "Informe sua cidade").max(80),
  renda: requiredCurrencyField("a renda bruta familiar"),
  conta: requiredCurrencyField("o valor médio da conta de luz"),
});

type LeadData = z.infer<typeof leadSchema>;

const buildLeadSummary = (lead: LeadData) =>
  [
    `Seu nome: ${lead.nome}`,
    `WhatsApp (com DDD): ${formatWhatsApp(lead.whatsapp)}`,
    `Sua cidade: ${lead.cidade}`,
    `Renda bruta familiar: ${lead.renda}`,
    `Valor médio da conta de luz: ${lead.conta}`,
  ].join("\n");

const sectionPanelClass =
  "rounded-[1.5rem] border border-[#dbe5f4] bg-white/85 shadow-[0_14px_36px_-14px_rgba(24,50,74,0.22)] backdrop-blur";

const ctaButtonClass =
  "inline-flex items-center justify-center gap-2 rounded-xl bg-[#f4c542] px-6 py-3.5 text-sm font-extrabold text-[#18324a] shadow-[0_12px_28px_-10px_rgba(244,197,66,0.45)] transition hover:brightness-105";

const secondaryButtonClass =
  "inline-flex items-center justify-center gap-2 rounded-xl border border-white/35 bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/16";

const ProgramaReformaLeadForm = () => {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFeedback(null);

    const form = event.currentTarget;
    const rawData = Object.fromEntries(new FormData(form));
    const result = leadSchema.safeParse(rawData);

    if (!result.success) {
      setFeedback({
        type: "error",
        message: result.error.issues[0]?.message || "Confira os dados do formulário.",
      });
      return;
    }

    const lead = result.data;
    const submission = new FormData();

    submission.append("Seu nome", lead.nome);
    submission.append("WhatsApp (com DDD)", formatWhatsApp(lead.whatsapp));
    submission.append("Sua cidade", lead.cidade);
    submission.append("Renda bruta familiar", lead.renda);
    submission.append("Valor médio da conta de luz", lead.conta);
    submission.append("Resumo do lead", buildLeadSummary(lead));
    submission.append("_subject", "Novo lead - Programa Reforma Brasil");
    submission.append("_template", "table");
    submission.append("_captcha", "false");
    submission.append("_url", window.location.href);

    setLoading(true);

    try {
      const response = await fetch(FORM_SUBMIT_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: submission,
      });

      const payload = (await response.json().catch(() => null)) as { success?: boolean; message?: string } | null;

      if (!response.ok || payload?.success === false) {
        throw new Error(payload?.message || "Não foi possível enviar os dados agora.");
      }

      form.reset();
      setDone(true);
      setFeedback({
        type: "success",
        message: "Pedido recebido! Os dados foram enviados para o time comercial da Leal Energia.",
      });
    } catch (error) {
      setFeedback({
        type: "error",
        message:
          error instanceof Error && error.message
            ? error.message
            : "Não foi possível enviar o formulário. Tente novamente em alguns instantes.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="simular"
      className="bg-[linear-gradient(135deg,#214d8f_0%,#2f6ab5_58%,#f4c542_135%)] py-16 text-white md:py-20"
    >
      <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-bold backdrop-blur">
            <Sparkles className="h-4 w-4" />
            Simulação grátis • Programa Reforma Brasil
          </span>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Veja se você pode usar o Reforma Brasil
          </h2>
          <p className="mt-4 text-lg opacity-90">
            Preencha seus dados e a Leal Energia faz uma análise inicial para mostrar se o seu perfil combina com o
            programa e como pode ficar o seu projeto de energia solar.
          </p>
          <ul className="mt-6 space-y-2">
            {[
              "Verificamos se o seu perfil se encaixa no Reforma Brasil",
              "Mostramos a estimativa de economia do sistema",
              "Atendimento comercial sem compromisso",
            ].map((benefit) => (
              <li key={benefit} className="flex items-center gap-2 font-semibold">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className={`${sectionPanelClass} p-6 sm:p-8`}>
          {done ? (
            <div className="py-10 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#f4c542]/15">
                <CheckCircle2 className="h-9 w-9 text-[#f4c542]" />
              </div>
              <h3 className="mt-4 text-2xl font-extrabold text-[#18324a]">Recebemos seu pedido!</h3>
              <p className="mt-2 text-[#5d6f82]">Seus dados já foram encaminhados para o e-mail comercial da Leal Energia.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-[#18324a]">
              <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
              <h3 className="text-xl font-extrabold">Simule seu financiamento</h3>

              <div>
                <label htmlFor="nome" className="mb-1.5 block text-sm font-bold">
                  Seu nome
                </label>
                <input
                  id="nome"
                  name="nome"
                  placeholder="Ex: Maria Silva"
                  required
                  maxLength={100}
                  className="h-11 w-full rounded-xl border border-[#d8e2f1] bg-white px-4 text-sm outline-none transition focus:border-[#2d5fa0] focus:ring-2 focus:ring-[#2d5fa0]/15"
                />
              </div>

              <div>
                <label htmlFor="whatsapp" className="mb-1.5 block text-sm font-bold">
                  WhatsApp (com DDD)
                </label>
                <input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel-national"
                  placeholder="(12) 99775-0212"
                  required
                  maxLength={15}
                  className="h-11 w-full rounded-xl border border-[#d8e2f1] bg-white px-4 text-sm outline-none transition focus:border-[#2d5fa0] focus:ring-2 focus:ring-[#2d5fa0]/15"
                  onInput={(e) => {
                    e.currentTarget.value = formatWhatsApp(e.currentTarget.value);
                  }}
                />
                <p className="mt-1 text-xs text-[#6a7c90]">Máximo de 11 dígitos com DDD.</p>
              </div>

              <div>
                <label htmlFor="cidade" className="mb-1.5 block text-sm font-bold">
                  Sua cidade
                </label>
                <input
                  id="cidade"
                  name="cidade"
                  placeholder="Ex: São Paulo"
                  required
                  maxLength={80}
                  className="h-11 w-full rounded-xl border border-[#d8e2f1] bg-white px-4 text-sm outline-none transition focus:border-[#2d5fa0] focus:ring-2 focus:ring-[#2d5fa0]/15"
                />
              </div>

              <div>
                <label htmlFor="renda" className="mb-1.5 block text-sm font-bold">
                  Renda bruta familiar
                </label>
                <input
                  id="renda"
                  name="renda"
                  placeholder="Ex: R$ 4.500,00"
                  required
                  maxLength={18}
                  inputMode="numeric"
                  className="h-11 w-full rounded-xl border border-[#d8e2f1] bg-white px-4 text-sm outline-none transition focus:border-[#2d5fa0] focus:ring-2 focus:ring-[#2d5fa0]/15"
                  onInput={(e) => {
                    e.currentTarget.value = formatCurrencyInput(e.currentTarget.value);
                  }}
                />
              </div>

              <div>
                <label htmlFor="conta" className="mb-1.5 block text-sm font-bold">
                  Valor médio da conta de luz
                </label>
                <input
                  id="conta"
                  name="conta"
                  placeholder="Ex: R$ 450,00"
                  required
                  maxLength={18}
                  inputMode="numeric"
                  className="h-11 w-full rounded-xl border border-[#d8e2f1] bg-white px-4 text-sm outline-none transition focus:border-[#2d5fa0] focus:ring-2 focus:ring-[#2d5fa0]/15"
                  onInput={(e) => {
                    e.currentTarget.value = formatCurrencyInput(e.currentTarget.value);
                  }}
                />
              </div>

              {feedback && (
                <p
                  className={`rounded-xl px-4 py-3 text-sm ${
                    feedback.type === "success"
                      ? "bg-emerald-50 text-emerald-800"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {feedback.message}
                </p>
              )}

              <button type="submit" disabled={loading} className={`${ctaButtonClass} w-full disabled:opacity-70`}>
                {loading ? "Enviando..." : "Quero minha simulação grátis"}
              </button>

              <p className="text-center text-xs text-[#6a7c90]">Seus dados estão seguros. Não enviamos spam.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

const ProgramaReformaBrasilPage = () => {
  usePageMeta({
    title: "Programa Reforma Brasil | Leal Energia",
    description:
      "Entenda como usar o Programa Reforma Brasil para instalar energia solar com a Leal Energia. Simulação gratuita, atendimento humano e suporte comercial.",
    keywords: "programa reforma brasil, leal energia, energia solar, simulação gratuita, landing page",
    robots: "noindex, nofollow",
  });

  useEffect(() => {
    const previousScrollBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = previousScrollBehavior;
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#f6f9ff] text-[#18324a]" style={{ fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
      <header className="sticky top-0 z-40 w-full border-b border-[#d9e4f4]/70 bg-[#f6f9ff]/92 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <a href="#top" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[linear-gradient(135deg,#ffd86a,#f4c542)] shadow-[0_6px_18px_-6px_rgba(24,50,74,0.12)]">
              <Sun className="h-5 w-5 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-lg font-extrabold">
              Leal<span className="text-[#214d8f]">Energia</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-[#6a7c90] md:flex">
            <a href="#beneficios" className="transition hover:text-[#18324a]">
              Benefícios
            </a>
            <a href="#como-funciona" className="transition hover:text-[#18324a]">
              Como funciona
            </a>
            <a href="#depoimentos" className="transition hover:text-[#18324a]">
              Depoimentos
            </a>
            <a href="#faq" className="transition hover:text-[#18324a]">
              Dúvidas
            </a>
          </nav>

          <a href="#simular" className="inline-flex items-center rounded-xl bg-[#f4c542] px-4 py-2 text-sm font-bold text-[#18324a] transition hover:brightness-105">
            Simular financiamento
          </a>
        </div>
      </header>

      <main>
        <section id="top" className="relative min-h-[92vh] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImg}
              alt="Família feliz em casa com energia solar"
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-[#214d8f]/85" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#214d8f]/95 via-[#214d8f]/80 to-[#214d8f]/60" />
          </div>

          <div className="container relative z-10 mx-auto flex min-h-[92vh] flex-col justify-center px-4 py-16 md:py-24">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-md bg-[#f4c542]/95 px-4 py-1.5 text-sm font-bold text-[#18324a] shadow-[0_6px_18px_-6px_rgba(24,50,74,0.12)]">
                <CheckCircle2 className="h-4 w-4" strokeWidth={2.5} />
                Programa Reforma Brasil • Atendimento especializado
              </span>

              <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
                Use o Programa Reforma Brasil para financiar sua energia solar.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90">
                A <span className="font-bold text-[#ffd86a]">Leal Energia</span> orienta você em cada etapa do
                processo, com análise do perfil, apoio comercial e projeto sob medida para reduzir em até 95% a sua
                conta de luz.
              </p>

              <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-white/70">
                Reforma Brasil • Simulação gratuita • Acompanhamento completo
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href="#simular" className={ctaButtonClass}>
                  Quero simular meu financiamento
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f6f9ff] py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-extrabold text-[#18324a] sm:text-4xl">
                Quer energia solar, mas precisa de apoio para entrar no Reforma Brasil?
              </h2>
              <p className="mt-4 text-lg text-[#5d6f82]">
                Com a <strong className="text-[#18324a]">Leal Energia</strong>, você recebe orientação completa para
                entender as etapas do programa, simular condições e seguir com um projeto seguro.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {pains.map(({ icon: Icon, title, text }) => (
                <div key={title} className={`${sectionPanelClass} p-6 transition hover:-translate-y-1`}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#214d8f]/15">
                    <Icon className="h-6 w-6 text-[#214d8f]" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-[#18324a]">{title}</h3>
                  <p className="mt-1 text-sm text-[#5d6f82]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="beneficios"
          className="bg-[radial-gradient(circle_at_top_left,rgba(255,214,106,0.18),transparent_28%),linear-gradient(180deg,#f7fbff_0%,#ecf3ff_62%,#fff7dc_100%)] py-16 md:py-20"
        >
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-bold uppercase tracking-wider text-[#d8a108]">Por que vale a pena</span>
              <h2 className="mt-2 text-3xl font-extrabold text-[#18324a] sm:text-4xl">
                As vantagens de usar o Reforma Brasil com a Leal Energia
              </h2>
              <p className="mt-4 text-lg text-[#5d6f82]">
                Informação clara, apoio comercial e um projeto de energia solar pensado para o seu perfil.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {benefits.map(({ icon: Icon, title, text }) => (
                <div key={title} className={`${sectionPanelClass} group p-6 transition hover:-translate-y-1`}>
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#ffd86a,#f4c542)] shadow-[0_6px_18px_-6px_rgba(24,50,74,0.12)]">
                    <Icon className="h-7 w-7 text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-[#18324a]">{title}</h3>
                  <p className="mt-2 text-[#5d6f82]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="como-funciona" className="bg-[#f6f9ff] py-16 md:py-20">
          <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <img
                src={instaladorImg}
                alt="Técnico instalando placa de energia solar"
                loading="lazy"
                width={1024}
                height={768}
                className="rounded-[1.5rem] shadow-[0_14px_36px_-14px_rgba(24,50,74,0.22)]"
              />
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-sm font-bold uppercase tracking-wider text-[#d8a108]">Como funciona</span>
              <h2 className="mt-2 text-3xl font-extrabold text-[#18324a] sm:text-4xl">Simples assim, em 4 passos</h2>
              <p className="mt-3 text-lg text-[#5d6f82]">
                Você não precisa entender sozinho as regras do programa. A Leal Energia orienta você do início ao fim.
              </p>

              <ol className="mt-8 space-y-5">
                {steps.map((step, index) => (
                  <li key={step.title} className="flex gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#214d8f] text-white shadow-[0_6px_18px_-6px_rgba(24,50,74,0.12)]">
                      <span className="text-lg font-extrabold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#18324a]">{step.title}</h3>
                      <p className="text-[#5d6f82]">{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <a href="#simular" className={`${ctaButtonClass} mt-8`}>
                Quero saber se me encaixo
              </a>
            </div>
          </div>
        </section>

        <section
          id="depoimentos"
          className="bg-[radial-gradient(circle_at_top_left,rgba(255,214,106,0.18),transparent_28%),linear-gradient(180deg,#f7fbff_0%,#ecf3ff_62%,#fff7dc_100%)] py-16 md:py-20"
        >
          <div className="container mx-auto px-4">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className={`${sectionPanelClass} p-5 text-center`}>
                  <Icon className="mx-auto h-7 w-7 text-[#214d8f]" />
                  <p className="mt-2 text-2xl font-extrabold text-[#18324a]">{value}</p>
                  <p className="text-sm text-[#5d6f82]">{label}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className={`${sectionPanelClass} p-6 sm:p-8`}>
                <span className="text-sm font-bold uppercase tracking-wider text-[#d8a108]">Quem pode participar</span>
                <h3 className="mt-2 text-2xl font-extrabold text-[#18324a] sm:text-3xl">Veja se o seu perfil combina</h3>
                <ul className="mt-5 space-y-3">
                  {requisitos.map((requisito) => (
                    <li key={requisito} className="flex items-start gap-3 text-[#18324a]">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#d8a108]" />
                      <span>{requisito}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm text-[#5d6f82]">
                  A Leal Energia analisa o seu perfil, explica as exigências do Reforma Brasil e orienta você sobre as
                  próximas etapas para o projeto solar.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-extrabold text-[#18324a] sm:text-4xl">Quem instalou, recomenda</h2>
                <p className="mt-3 text-lg text-[#5d6f82]">
                  Pessoas físicas de cidades paulistas que aprovaram o atendimento e a orientação no programa.
                </p>
                <div className="mt-6 space-y-4">
                  {testimonials.map((testimonial) => (
                    <article key={testimonial.name} className={`${sectionPanelClass} p-5`}>
                      <div className="flex gap-0.5 text-[#214d8f]">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star key={index} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <p className="mt-2 text-[#18324a]">"{testimonial.text}"</p>
                      <p className="mt-3 text-sm font-bold text-[#18324a]">
                        {testimonial.name} <span className="font-normal text-[#5d6f82]">- {testimonial.city}</span>
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProgramaReformaLeadForm />

        <section id="faq" className="bg-[#f6f9ff] py-16 md:py-20">
          <div className="container mx-auto max-w-3xl px-4">
            <div className="text-center">
              <span className="text-sm font-bold uppercase tracking-wider text-[#d8a108]">Tire suas dúvidas</span>
              <h2 className="mt-2 text-3xl font-extrabold text-[#18324a] sm:text-4xl">Perguntas frequentes</h2>
              <p className="mt-3 text-lg text-[#5d6f82]">
                Tudo o que você precisa saber sobre o Programa Reforma Brasil com a Leal Energia.
              </p>
            </div>

            <div className="mt-10 space-y-3">
              {faqs.map((faq) => (
                <details key={faq.q} className={`${sectionPanelClass} overflow-hidden px-5`}>
                  <summary className="cursor-pointer list-none py-5 text-left text-base font-bold text-[#18324a]">
                    {faq.q}
                  </summary>
                  <div className="pb-5 text-[#5d6f82]">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[linear-gradient(135deg,#214d8f_0%,#2f6ab5_58%,#f4c542_135%)] py-16 text-white md:py-20">
          <div className="container mx-auto max-w-3xl px-4 text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              Descubra se o seu perfil se encaixa no Reforma Brasil.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">
              Fale com a Leal Energia e receba orientação comercial para entender o programa, simular condições e
              avançar com o seu projeto de energia solar.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="#simular" className={ctaButtonClass}>
                Quero simular meu financiamento
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/5512997750212"
                target="_blank"
                rel="noopener noreferrer"
                className={secondaryButtonClass}
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#d9e4f4] bg-[#f6f9ff] py-12">
        <div className="container mx-auto grid gap-8 px-4 md:grid-cols-3">
          <div>
            <img src="/leal-energia-logo.png" alt="Leal Energia" className="h-16 w-auto" loading="lazy" />
            <p className="mt-3 text-sm text-[#5d6f82]">
              Especialistas em energia solar com atendimento direcionado ao Programa Reforma Brasil, suporte comercial
              e acompanhamento completo do projeto.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#18324a]">Contato</h4>
            <ul className="mt-3 space-y-2 text-sm text-[#5d6f82]">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#214d8f]" /> (12) 99775-0212
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#214d8f]" /> contato@lealenergia.com.br
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#214d8f]" /> Atendimento comercial para todo o Brasil
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#18324a]">Atendimento</h4>
            <p className="mt-3 text-sm text-[#5d6f82]">
              Segunda a sexta, das 8h às 19h
              <br />
              Sábado, das 9h às 14h
            </p>
          </div>
        </div>

        <div className="container mx-auto mt-10 border-t border-[#d9e4f4] px-4 pt-6 text-center text-xs text-[#5d6f82]">
          © {new Date().getFullYear()} Leal Energia - Todos os direitos reservados.
        </div>
      </footer>

      <a
        href="https://wa.me/5512997750212?text=Ol%C3%A1%21%20Quero%20saber%20como%20funciona%20o%20Programa%20Reforma%20Brasil%20para%20energia%20solar."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-40 hidden items-center gap-2 rounded-full bg-[#f4c542] px-5 py-3 text-[#18324a] shadow-[0_12px_28px_-10px_rgba(244,197,66,0.45)] transition hover:scale-105 md:flex"
      >
        <span className="absolute inline-flex h-full w-full animate-pulse rounded-full bg-[#f4c542]/40" aria-hidden />
        <MessageCircle className="relative h-6 w-6" />
        <span className="relative text-sm font-bold">WhatsApp comercial</span>
      </a>
    </div>
  );
};

export default ProgramaReformaBrasilPage;
