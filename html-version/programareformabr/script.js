const FORM_ENDPOINT = "https://formsubmit.co/ajax/programareforma@lealenergia.com.br";

const form = document.getElementById("lead-form");
const feedback = document.getElementById("form-feedback");
const whatsappInput = document.getElementById("whatsapp");
const rendaInput = document.getElementById("renda");
const contaInput = document.getElementById("conta");

const extractDigits = (value) => value.replace(/\D/g, "");

const formatWhatsApp = (value) => {
  const digits = extractDigits(value).slice(0, 11);

  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
};

const formatCurrencyInput = (value) => {
  const digits = extractDigits(value).slice(0, 12);

  if (!digits) return "";

  const amount = Number(digits) / 100;

  return amount.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};

const setFeedback = (type, message) => {
  feedback.hidden = false;
  feedback.className = `form-feedback ${type}`;
  feedback.textContent = message;
};

whatsappInput.addEventListener("input", (event) => {
  event.currentTarget.value = formatWhatsApp(event.currentTarget.value);
});

rendaInput.addEventListener("input", (event) => {
  event.currentTarget.value = formatCurrencyInput(event.currentTarget.value);
});

contaInput.addEventListener("input", (event) => {
  event.currentTarget.value = formatCurrencyInput(event.currentTarget.value);
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  feedback.hidden = true;

  const formData = new FormData(form);
  const nome = String(formData.get("nome") || "").trim();
  const whatsapp = extractDigits(String(formData.get("whatsapp") || ""));
  const cidade = String(formData.get("cidade") || "").trim();
  const renda = String(formData.get("renda") || "").trim();
  const conta = String(formData.get("conta") || "").trim();

  if (nome.length < 2) {
    setFeedback("error", "Informe seu nome.");
    return;
  }

  if (whatsapp.length < 10 || whatsapp.length > 11) {
    setFeedback("error", "Informe um WhatsApp v\u00E1lido com DDD.");
    return;
  }

  if (cidade.length < 2) {
    setFeedback("error", "Informe sua cidade.");
    return;
  }

  if (!extractDigits(renda) || Number(extractDigits(renda)) <= 0) {
    setFeedback("error", "Informe a renda bruta familiar.");
    return;
  }

  if (!extractDigits(conta) || Number(extractDigits(conta)) <= 0) {
    setFeedback("error", "Informe o valor m\u00E9dio da conta de luz.");
    return;
  }

  const submitButton = form.querySelector('button[type="submit"]');
  const originalText = submitButton.textContent;
  submitButton.disabled = true;
  submitButton.textContent = "Enviando...";

  const submission = new FormData();
  submission.append("Seu nome", nome);
  submission.append("WhatsApp (com DDD)", formatWhatsApp(whatsapp));
  submission.append("Sua cidade", cidade);
  submission.append("Renda bruta familiar", formatCurrencyInput(renda));
  submission.append("Valor m\u00E9dio da conta de luz", formatCurrencyInput(conta));
  submission.append(
    "Resumo do lead",
    [
      `Seu nome: ${nome}`,
      `WhatsApp (com DDD): ${formatWhatsApp(whatsapp)}`,
      `Sua cidade: ${cidade}`,
      `Renda bruta familiar: ${formatCurrencyInput(renda)}`,
      `Valor m\u00E9dio da conta de luz: ${formatCurrencyInput(conta)}`,
    ].join("\n"),
  );
  submission.append("_subject", "Novo lead - Programa Reforma Brasil");
  submission.append("_template", "table");
  submission.append("_captcha", "false");
  submission.append("_url", window.location.href);

  try {
    const response = await fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: submission,
    });

    const payload = await response.json().catch(() => null);

    if (!response.ok || (payload && payload.success === false)) {
      throw new Error((payload && payload.message) || "N\u00E3o foi poss\u00EDvel enviar os dados agora.");
    }

    form.reset();
    setFeedback("success", "Pedido recebido! Os dados foram enviados para o time comercial da Leal Energia.");
  } catch (error) {
    setFeedback(
      "error",
      error instanceof Error && error.message
        ? error.message
        : "N\u00E3o foi poss\u00EDvel enviar o formul\u00E1rio. Tente novamente em alguns instantes.",
    );
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = originalText;
  }
});
