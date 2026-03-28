<?php
require __DIR__ . '/includes/site.php';

$feedback = null;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nome = trim($_POST['nome'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $telefone = trim($_POST['telefone'] ?? '');
    $mensagem = trim($_POST['mensagem'] ?? '');
    $honeypot = trim($_POST['website'] ?? '');

    if ($honeypot !== '') {
        $feedback = ['type' => 'success', 'message' => 'Mensagem enviada com sucesso.'];
    } elseif ($nome === '' || $email === '' || $telefone === '' || $mensagem === '') {
        $feedback = ['type' => 'error', 'message' => 'Preencha todos os campos obrigatórios.'];
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $feedback = ['type' => 'error', 'message' => 'Informe um e-mail válido.'];
    } else {
        $subject = 'Novo contato pelo site Leal Energia';
        $body = "Nome: {$nome}\n";
        $body .= "Email: {$email}\n";
        $body .= "Telefone: {$telefone}\n\n";
        $body .= "Mensagem:\n{$mensagem}\n";

        $headers = [
            'MIME-Version: 1.0',
            'Content-Type: text/plain; charset=UTF-8',
            'From: Leal Energia <no-reply@lealenergia.com.br>',
            'Reply-To: ' . $nome . ' <' . $email . '>',
        ];

        $sent = @mail($lead_email, $subject, $body, implode("\r\n", $headers));

        if ($sent) {
            $feedback = ['type' => 'success', 'message' => 'Mensagem enviada com sucesso. Em breve entraremos em contato.'];
            $_POST = [];
        } else {
            $feedback = ['type' => 'error', 'message' => 'Não foi possível enviar pelo servidor agora. Verifique se a função mail() está habilitada na hospedagem.'];
        }
    }
}
?>
<?php render_head('Contato', 'Entre em contato e solicite seu orçamento sem compromisso.'); ?>
<?php render_header('contato.php'); ?>

<main>
  <section class="page-hero">
    <div class="container">
      <h1>Contato</h1>
      <p>Entre em contato e solicite seu orçamento sem compromisso.</p>
    </div>
  </section>

  <section class="section sr-reveal contact-section-html">
    <div class="container grid-2 section-grid">
      <div class="section-copy">
        <h2 class="section-title">Fale <span class="text-gradient">Conosco</span></h2>
        <div class="contact-list">
          <div class="contact-item">
            <strong>Endereço</strong>
            <span>São José dos Campos - SP</span>
          </div>
          <div class="contact-item">
            <strong>Telefone / WhatsApp</strong>
            <a class="text-gradient" href="https://wa.me/<?= htmlspecialchars($site_phone_link) ?>" target="_blank" rel="noopener noreferrer"><?= htmlspecialchars($site_phone_display) ?></a>
          </div>
          <div class="contact-item">
            <strong>E-mail</strong>
            <a class="text-gradient" href="mailto:<?= htmlspecialchars($site_email) ?>"><?= htmlspecialchars($site_email) ?></a>
          </div>
          <div class="contact-item">
            <strong>Horário de Atendimento</strong>
            <span>Segunda a Sexta: 08h às 18h</span>
          </div>
        </div>
      </div>

      <div class="card">
        <h2 class="section-title" style="font-size:2rem;">Envie uma mensagem</h2>
        <form method="post" action="contato.php">
          <input type="text" name="website" style="display:none" tabindex="-1" autocomplete="off">

          <div>
            <label for="nome">Nome</label>
            <input id="nome" name="nome" type="text" required value="<?= htmlspecialchars($_POST['nome'] ?? '') ?>">
          </div>

          <div>
            <label for="email">E-mail</label>
            <input id="email" name="email" type="email" required value="<?= htmlspecialchars($_POST['email'] ?? '') ?>">
          </div>

          <div>
            <label for="telefone">Telefone</label>
            <input id="telefone" name="telefone" type="tel" required value="<?= htmlspecialchars($_POST['telefone'] ?? '') ?>">
          </div>

          <div>
            <label for="mensagem">Mensagem</label>
            <textarea id="mensagem" name="mensagem" rows="5" required><?= htmlspecialchars($_POST['mensagem'] ?? '') ?></textarea>
          </div>

          <?php if ($feedback): ?>
            <div class="form-feedback <?= htmlspecialchars($feedback['type']) ?>"><?= htmlspecialchars($feedback['message']) ?></div>
          <?php endif; ?>

          <button class="btn" type="submit">Enviar mensagem</button>
        </form>
      </div>
    </div>
  </section>
</main>

<?php render_footer(); ?>
