<?php require __DIR__ . '/includes/site.php'; ?>
<?php render_head('S' . "\u{00E3}" . 'o Jos' . "\u{00E9}" . ' dos Campos', 'Energia solar em S' . "\u{00E3}" . 'o Jos' . "\u{00E9}" . ' dos Campos para resid' . "\u{00EA}" . 'ncias, com' . "\u{00E9}" . 'rcios e ind' . "\u{00FA}" . 'strias.', '', 'assets/sao-jose-hero.jpg'); ?>
<?php render_header('sao-jose-dos-campos.php'); ?>

<main>
  <section class="page-hero">
    <img class="page-hero-media" src="assets/sao-jose-hero.jpg" alt="" aria-hidden="true" fetchpriority="high" decoding="async" width="1600" height="900">
    <div class="container">
      <h1>S&atilde;o Jos&eacute; dos Campos</h1>
      <p>Energia solar para a capital do Vale do Para&iacute;ba.</p>
    </div>
  </section>

  <section class="section sr-reveal">
    <div class="container grid-2">
      <div>
        <h2 class="section-title">Energia Solar em <span class="text-gradient">S&atilde;o Jos&eacute; dos Campos</span></h2>
        <p class="section-subtitle">S&atilde;o Jos&eacute; dos Campos &eacute; uma das cidades com maior potencial para energia solar no estado de S&atilde;o Paulo. Com alta incid&ecirc;ncia solar e um mercado empresarial em constante crescimento, a cidade &eacute; o cen&aacute;rio perfeito para investir em energia fotovoltaica.</p>
        <p class="section-subtitle">A Leal Energia oferece solu&ccedil;&otilde;es completas para resid&ecirc;ncias, com&eacute;rcios e ind&uacute;strias da regi&atilde;o, com projetos personalizados e atendimento t&eacute;cnico especializado.</p>
      </div>
      <div class="media-card"><img src="assets/sao-jose.jpg" alt="Energia solar em S&atilde;o Jos&eacute; dos Campos"></div>
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
      <p>Nossa equipe t&eacute;cnica est&aacute; pronta para atender voc&ecirc; em S&atilde;o Jos&eacute; dos Campos e regi&atilde;o.</p>
      <a class="btn-light" href="contato.php">Fale conosco</a>
    </div>
  </section>
</main>

<?php render_footer(); ?>
