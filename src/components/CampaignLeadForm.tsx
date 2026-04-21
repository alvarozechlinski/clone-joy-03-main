import { FormEvent, useEffect, useState } from "react";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/alvaro.zechlinski@lealenergia.com.br";

const TRACKING_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid",
] as const;

type TrackingKey = (typeof TRACKING_KEYS)[number];
type TrackingState = Record<TrackingKey, string>;

const createTrackingState = (): TrackingState => ({
  utm_source: "",
  utm_medium: "",
  utm_campaign: "",
  utm_term: "",
  utm_content: "",
  gclid: "",
  fbclid: "",
});

const CampaignLeadForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [tracking, setTracking] = useState<TrackingState>(createTrackingState);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const nextTracking = createTrackingState();

    TRACKING_KEYS.forEach((key) => {
      nextTracking[key] = params.get(key) ?? "";
    });

    setTracking(nextTracking);
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFeedback(null);
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("_subject", "Novo lead da landing page de energia solar");
    formData.append("_captcha", "false");
    formData.append("_template", "table");
    formData.append("origem_lead", "landing-page-ads");
    formData.append("pagina_captacao", window.location.pathname);
    formData.append("url_completa", window.location.href);
    formData.append("referrer", document.referrer || "Acesso direto");

    TRACKING_KEYS.forEach((key) => {
      if (tracking[key]) {
        formData.append(key, tracking[key]);
      }
    });

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Falha ao enviar o formulário.");
      }

      setFeedback({
        type: "success",
        message: "Recebemos seus dados. Nossa equipe vai retornar com a simulação e os próximos passos.",
      });
      form.reset();
    } catch {
      setFeedback({
        type: "error",
        message: "Não foi possível enviar agora. Tente novamente em instantes ou fale com a nossa equipe no WhatsApp.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="lead-form"
      className="rounded-[2rem] border border-white/15 bg-white p-6 text-foreground shadow-[0_32px_80px_-32px_rgba(8,20,28,0.55)] sm:p-8"
    >
      <div className="mb-6">
        <span className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">
          Simulação gratuita
        </span>
        <h2 className="mt-4 text-2xl font-black text-slate-900 sm:text-3xl">Peça seu orçamento sem compromisso</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Preencha os dados abaixo e receba um retorno comercial com uma proposta adequada ao seu perfil de consumo.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

        <div>
          <label htmlFor="nome" className="mb-1.5 block text-sm font-semibold text-slate-900">
            Nome
          </label>
          <input
            id="nome"
            name="nome"
            type="text"
            required
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm transition-colors focus:border-primary focus:bg-white focus:outline-none"
            placeholder="Seu nome"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="telefone" className="mb-1.5 block text-sm font-semibold text-slate-900">
              WhatsApp
            </label>
            <input
              id="telefone"
              name="telefone"
              type="tel"
              required
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm transition-colors focus:border-primary focus:bg-white focus:outline-none"
              placeholder="(12) 99999-9999"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-slate-900">
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm transition-colors focus:border-primary focus:bg-white focus:outline-none"
              placeholder="voce@empresa.com"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="cidade" className="mb-1.5 block text-sm font-semibold text-slate-900">
              Cidade
            </label>
            <input
              id="cidade"
              name="cidade"
              type="text"
              required
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm transition-colors focus:border-primary focus:bg-white focus:outline-none"
              placeholder="São José dos Campos"
            />
          </div>

          <div>
            <label htmlFor="perfil" className="mb-1.5 block text-sm font-semibold text-slate-900">
              Perfil do projeto
            </label>
            <select
              id="perfil"
              name="perfil"
              required
              defaultValue=""
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm transition-colors focus:border-primary focus:bg-white focus:outline-none"
            >
              <option value="" disabled>
                Selecione
              </option>
              <option value="Residencial">Residencial</option>
              <option value="Comercial">Comercial</option>
              <option value="Industrial">Industrial</option>
              <option value="Condominio ou usina">Condomínio ou usina</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="conta-luz" className="mb-1.5 block text-sm font-semibold text-slate-900">
            Valor médio da conta de luz
          </label>
          <input
            id="conta-luz"
            name="conta_media"
            type="text"
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm transition-colors focus:border-primary focus:bg-white focus:outline-none"
            placeholder="Ex.: R$ 600 por mês"
          />
        </div>

        <div>
          <label htmlFor="mensagem" className="mb-1.5 block text-sm font-semibold text-slate-900">
            Detalhes do imóvel ou da empresa
          </label>
          <textarea
            id="mensagem"
            name="mensagem"
            rows={4}
            className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm transition-colors focus:border-primary focus:bg-white focus:outline-none"
            placeholder="Se quiser, informe consumo, tipo de telhado, horário para contato ou outras observações."
          />
        </div>

        {feedback && (
          <p
            aria-live="polite"
            className={`rounded-2xl px-4 py-3 text-sm ${
              feedback.type === "success" ? "bg-emerald-50 text-emerald-800" : "bg-red-50 text-red-700"
            }`}
          >
            {feedback.message}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.01] hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Enviando..." : "Quero receber minha simulação"}
        </button>

        <p className="text-xs leading-5 text-slate-500">
          Ao enviar, seus dados serão usados apenas para retorno comercial da Leal Energia sobre este atendimento.
        </p>
      </form>
    </div>
  );
};

export default CampaignLeadForm;
