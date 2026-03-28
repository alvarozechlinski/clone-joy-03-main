<?php require __DIR__ . '/includes/site.php'; ?>
<?php render_head('Sobre', 'Conheça a Leal Energia e a missão de transformar a relação das pessoas com a energia.'); ?>
<?php render_header('sobre.php'); ?>

<main>
  <section class="page-hero">
    <div class="container">
      <h1>Sobre Nós</h1>
      <p>Conheça a Leal Energia e nossa missão de transformar a relação das pessoas com a energia.</p>
    </div>
  </section>

  <section class="section sr-reveal">
    <div class="container grid-2">
      <div>
        <h2 class="section-title">Nossa <span class="text-gradient">História</span></h2>
        <p class="section-subtitle">A Leal Energia nasceu com a missão de democratizar o acesso à energia solar no Brasil. Com anos de experiência no mercado, já ajudamos centenas de empresas e residências a reduzir seus custos com energia e a contribuir para um futuro mais sustentável.</p>
        <p class="section-subtitle">Atuamos em todo o Vale do Paraíba e região, oferecendo soluções completas em energia solar fotovoltaica, desde o projeto até a instalação e manutenção.</p>
      </div>
      <div class="media-card"><img src="assets/solar-rooftop.jpg" alt="Equipe Leal Energia"></div>
    </div>
  </section>

  <section class="section section-muted sr-reveal">
    <div class="container grid-2">
      <div class="card">
        <h3 class="section-title" style="font-size:1.8rem;">Missão</h3>
        <p class="section-subtitle">Entregar soluções de energia solar de alta qualidade, transformando a forma como empresas e pessoas geram e consomem energia, contribuindo para um futuro mais sustentável.</p>
      </div>
      <div class="card">
        <h3 class="section-title" style="font-size:1.8rem;">Visão</h3>
        <p class="section-subtitle">Ser referência no mercado de energia solar, reconhecida pela excelência, inovação e compromisso com a sustentabilidade energética no Brasil.</p>
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
      <p>Entre em contato conosco e solicite um orçamento sem compromisso.</p>
      <a class="btn-light" href="contato.php">Fale conosco</a>
    </div>
  </section>
</main>

<?php render_footer(); ?>
