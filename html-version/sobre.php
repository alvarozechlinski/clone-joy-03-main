<?php require __DIR__ . '/includes/site.php'; ?>
<?php render_head('Sobre', 'Conhe' . "\u{00E7}" . 'a a Leal Energia e a miss' . "\u{00E3}" . 'o de transformar a rela' . "\u{00E7}" . "\u{00E3}" . 'o das pessoas com a energia.'); ?>
<?php render_header('sobre.php'); ?>

<main>
  <section class="page-hero">
    <div class="container">
      <h1>Sobre N&oacute;s</h1>
      <p>Conhe&ccedil;a a Leal Energia e nossa miss&atilde;o de transformar a rela&ccedil;&atilde;o das pessoas com a energia.</p>
    </div>
  </section>

  <section class="section sr-reveal">
    <div class="container grid-2">
      <div>
        <h2 class="section-title">Nossa <span class="text-gradient">Hist&oacute;ria</span></h2>
        <p class="section-subtitle">A Leal Energia nasceu com a miss&atilde;o de democratizar o acesso &agrave; energia solar no Brasil. Com anos de experi&ecirc;ncia no mercado, j&aacute; ajudamos centenas de empresas e resid&ecirc;ncias a reduzir seus custos com energia e a contribuir para um futuro mais sustent&aacute;vel.</p>
        <p class="section-subtitle">Atuamos em todo o Vale do Para&iacute;ba e regi&atilde;o, oferecendo solu&ccedil;&otilde;es completas em energia solar fotovoltaica, desde o projeto at&eacute; a instala&ccedil;&atilde;o e manuten&ccedil;&atilde;o.</p>
      </div>
      <div class="media-card"><img src="assets/solar-rooftop.jpg" alt="Equipe Leal Energia"></div>
    </div>
  </section>

  <section class="section section-muted sr-reveal">
    <div class="container grid-2">
      <div class="card">
        <h3 class="section-title" style="font-size:1.8rem;">Miss&atilde;o</h3>
        <p class="section-subtitle">Entregar solu&ccedil;&otilde;es de energia solar de alta qualidade, transformando a forma como empresas e pessoas geram e consomem energia, contribuindo para um futuro mais sustent&aacute;vel.</p>
      </div>
      <div class="card">
        <h3 class="section-title" style="font-size:1.8rem;">Vis&atilde;o</h3>
        <p class="section-subtitle">Ser refer&ecirc;ncia no mercado de energia solar, reconhecida pela excel&ecirc;ncia, inova&ccedil;&atilde;o e compromisso com a sustentabilidade energ&eacute;tica no Brasil.</p>
      </div>
    </div>
  </section>

  <section class="section sr-reveal">
    <div class="container">
      <h2 class="section-title" style="text-align:center;">Nossos <span class="text-gradient">Valores</span></h2>
      <div class="grid-4" style="margin-top:30px;">
        <?php foreach ($values as $value): ?>
          <div class="card" style="text-align:center;">
            <h3><?= htmlspecialchars($value['title']) ?></h3>
            <p class="section-subtitle"><?= htmlspecialchars($value['text']) ?></p>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <section class="section section-dark">
    <div class="container" style="text-align:center;">
      <h2 class="section-title">Pronto para economizar com energia solar?</h2>
      <p>Entre em contato conosco e solicite um or&ccedil;amento sem compromisso.</p>
      <a class="btn-light" href="contato.php">Fale conosco</a>
    </div>
  </section>
</main>

<?php render_footer(); ?>
