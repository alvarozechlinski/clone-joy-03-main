<?php require __DIR__ . '/includes/site.php'; ?>
<?php render_head('São José dos Campos', 'Energia solar em São José dos Campos para residências, comércios e indústrias.'); ?>
<?php render_header('sao-jose-dos-campos.php'); ?>

<main>
  <section class="page-hero">
    <div class="container">
      <h1>São José dos Campos</h1>
      <p>Energia solar para a capital do Vale do Paraíba.</p>
    </div>
  </section>

  <section class="section sr-reveal">
    <div class="container grid-2">
      <div>
        <h2 class="section-title">Energia Solar em <span class="text-gradient">São José dos Campos</span></h2>
        <p class="section-subtitle">São José dos Campos é uma das cidades com maior potencial para energia solar no estado de São Paulo. Com alta incidência solar e um mercado empresarial em constante crescimento, a cidade é o cenário perfeito para investir em energia fotovoltaica.</p>
        <p class="section-subtitle">A Leal Energia oferece soluções completas para residências, comércios e indústrias da região, com projetos personalizados e atendimento técnico especializado.</p>
      </div>
      <div class="media-card"><img src="assets/solar-residential.jpg" alt="Energia solar em São José dos Campos"></div>
    </div>
  </section>

  <section class="section section-muted sr-reveal">
    <div class="container">
      <h2 class="section-title" style="text-align:center;">Por que investir em energia solar em <span class="text-gradient">SJC</span>?</h2>
      <div class="grid-4" style="margin-top:30px;">
        <?php foreach ($sjc_features as $feature): ?>
          <div class="card" style="text-align:center;">
            <h3><?= htmlspecialchars($feature['title']) ?></h3>
            <p class="section-subtitle"><?= htmlspecialchars($feature['text']) ?></p>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <section class="section section-dark">
    <div class="container" style="text-align:center;">
      <h2 class="section-title">Solicite seu orçamento em SJC</h2>
      <p>Nossa equipe técnica está pronta para atender você em São José dos Campos e região.</p>
      <a class="btn-light" href="contato.php">Fale conosco</a>
    </div>
  </section>
</main>

<?php render_footer(); ?>
