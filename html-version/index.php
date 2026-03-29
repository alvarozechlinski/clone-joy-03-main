<?php require __DIR__ . '/includes/site.php'; ?>
<?php render_head('In' . "\u{00ED}" . 'cio', $site_description, 'home-page'); ?>
<?php render_header('index.php'); ?>

<main>
  <section class="hero hero-home">
    <div class="container hero-content">
      <h1>CONSTRUINDO CAMINHOS DO SOL AT&Eacute; VOC&Ecirc;!</h1>
      <p>Ajudamos empresas e pessoas a mudar sua rela&ccedil;&atilde;o com a energia.</p>
      <a class="btn" href="https://wa.me/<?= htmlspecialchars($site_phone_link) ?>" target="_blank" rel="noopener noreferrer">Comece a economizar agora!</a>
    </div>
  </section>

  <section class="section logo-bar sr-reveal">
    <div class="container">
      <div class="grid-7">
        <?php foreach ($clients as $client): ?>
          <a href="<?= htmlspecialchars($client['url']) ?>" target="_blank" rel="noopener noreferrer">
            <img src="<?= htmlspecialchars($client['logo']) ?>" alt="<?= htmlspecialchars($client['name']) ?>">
          </a>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <section class="section sr-reveal about-section">
    <div class="container">
      <h2 class="section-title" style="text-align:center;">O que podemos fazer por <span class="text-gradient">voc&ecirc;</span>?</h2>
      <div class="grid-2 section-grid" style="margin-top:40px;">
        <div class="section-copy">
          <h3 class="section-title" style="font-size:2rem;">Energia limpa e <span class="text-gradient">renov&aacute;vel</span></h3>
          <p class="section-subtitle">Entregamos solu&ccedil;&otilde;es de energia, transformando a forma como empresas e pessoas geram e consomem energia.</p>
          <p class="section-subtitle">Nosso objetivo &eacute; simples: ajudar voc&ecirc; a reduzir custos, aumentar a sustentabilidade e construir um futuro mais verde.</p>
        </div>
        <div class="media-card"><img src="assets/solar-rooftop.jpg" alt="Pain&eacute;is solares em telhado comercial"></div>
      </div>
      <div class="grid-2 section-grid" style="margin-top:28px;">
        <div class="media-card"><img src="assets/solar-residential.jpg" alt="Instala&ccedil;&atilde;o de pain&eacute;is solares residencial"></div>
        <div class="card section-copy" style="display:flex;align-items:center;">
          <p class="section-subtitle">Projetamos e implementamos sistemas solares personalizados, otimizando o desempenho energ&eacute;tico e garantindo economia, automa&ccedil;&atilde;o, seguran&ccedil;a e longevidade para o seu neg&oacute;cio.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section cover-block sr-reveal solar-cover-html">
    <div class="container">
      <h2 class="section-title">Energia Solar</h2>
      <p>Entregamos solu&ccedil;&otilde;es de energia solar, transformando a forma como empresas de todos os portes geram e consomem energia.</p>
    </div>
  </section>

  <section id="solucoes" class="cta-grid grid-3 cta-grid-html">
    <?php foreach ($cta_boxes as $box): ?>
      <div class="cta-card">
        <h2><?= htmlspecialchars($box['title_before']) ?><span class="text-gradient"><?= htmlspecialchars($box['highlight']) ?></span><?= htmlspecialchars($box['title_after']) ?></h2>
        <a class="btn-light" href="https://wa.me/<?= htmlspecialchars($site_phone_link) ?>" target="_blank" rel="noopener noreferrer"><?= htmlspecialchars($box['cta']) ?></a>
      </div>
    <?php endforeach; ?>
  </section>

  <section class="section sr-reveal">
    <div class="container grid-2 section-grid">
      <div class="media-card"><img src="assets/mercado-livre.svg" alt="Projeto de mercado livre de energia" style="object-fit:contain;background:#fff;"></div>
      <div class="section-copy">
        <h2 class="section-title">Mercado Livre de Energia</h2>
        <p class="section-subtitle">Mude do mercado tradicional e escolha o seu fornecedor de energia.</p>
        <p class="section-subtitle">Reduza o seu custo, com <span class="market-highlight">baixo investimento</span> e consuma energia de fontes renov&aacute;veis.</p>
        <ul class="market-bullets">
          <li>Ideal para empresas eleg&iacute;veis em m&eacute;dia e alta tens&atilde;o.</li>
          <li>Economia potencial com a escolha do fornecedor e gest&atilde;o do consumo.</li>
          <li>Tenha at&eacute; 30% de economia mensal na sua fatura.</li>
        </ul>
        <p class="section-subtitle">*Consulte a elegibilidade da sua unidade consumidora.</p>
        <a class="btn" href="https://wa.me/<?= htmlspecialchars($site_phone_link) ?>" target="_blank" rel="noopener noreferrer">Receba uma consultoria gratuita</a>
      </div>
    </div>
  </section>

  <section class="section section-muted sr-reveal">
    <div class="container grid-2 section-grid">
      <div class="section-copy">
        <h2 class="section-title">Consultoria energ&eacute;tica</h2>
        <h3>Desenvolvimento de Projetos</h3>
        <p class="section-subtitle">Contamos com experi&ecirc;ncias s&oacute;lidas na implementa&ccedil;&atilde;o de projetos de micro e mini gera&ccedil;&atilde;o, ZeroGrid, carregadores el&eacute;tricos e aquecimento de &aacute;gua.</p>
        <h3>Seguran&ccedil;a e efici&ecirc;ncia</h3>
        <p class="section-subtitle">Elaboramos cada projeto com um olhar espec&iacute;fico, oferecendo solu&ccedil;&otilde;es complementares e adequadas a cada cliente.</p>
        <a class="btn" href="https://wa.me/<?= htmlspecialchars($site_phone_link) ?>" target="_blank" rel="noopener noreferrer">Quero uma consultoria!</a>
      </div>
      <div class="media-card"><img src="assets/consulting.jpg" alt="Consultoria energ&eacute;tica"></div>
    </div>
  </section>

  <section class="section section-dark sr-reveal">
    <div class="container testimonial" data-testimonials>
      <h2 class="section-title">Depoimentos</h2>
      <div class="testimonial-gallery">
        <?php foreach ($testimonials as $index => $testimonial): ?>
        <div class="card testimonial-slide<?= $index === 0 ? ' is-active' : '' ?>" data-testimonial-slide style="margin-top:24px;background:rgba(255,255,255,0.08);color:#fff;border-color:rgba(255,255,255,0.1);">
          <p><?= htmlspecialchars($testimonial['text']) ?></p>
          <strong><?= htmlspecialchars($testimonial['author']) ?></strong><br>
          <span><?= htmlspecialchars($testimonial['role']) ?></span>
        </div>
        <?php endforeach; ?>
      </div>
      <div class="testimonial-controls">
        <button class="testimonial-arrow" type="button" data-testimonial-prev aria-label="Anterior">&#8249;</button>
        <div class="testimonial-dots">
          <?php foreach ($testimonials as $index => $testimonial): ?>
            <button class="testimonial-dot<?= $index === 0 ? ' is-active' : '' ?>" type="button" data-testimonial-dot="<?= $index ?>" aria-label="Slide <?= $index + 1 ?>"></button>
          <?php endforeach; ?>
        </div>
        <button class="testimonial-arrow" type="button" data-testimonial-next aria-label="Pr&oacute;ximo">&#8250;</button>
      </div>
    </div>
  </section>

  <section class="section sr-reveal">
    <div class="container">
      <h2 class="section-title" style="text-align:center;">Nossos Projetos</h2>
      <div class="gallery-grid" style="margin-top:34px;">
        <?php foreach ($gallery_images as $image): ?>
          <div class="gallery-item"><img src="<?= htmlspecialchars($image['src']) ?>" alt="<?= htmlspecialchars($image['alt']) ?>"></div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>
</main>

<?php render_footer(); ?>
