<?php require __DIR__ . '/includes/site.php'; ?>
<?php render_head('Início', $site_description, 'home-page'); ?>
<?php render_header('index.php'); ?>

<main>
  <section class="hero hero-home">
    <div class="container hero-content">
      <h1>CONSTRUINDO CAMINHOS DO SOL ATÉ VOCÊ!</h1>
      <p>Ajudamos empresas e pessoas a mudar sua relação com a energia.</p>
      <a class="btn" href="https://wa.me/<?= htmlspecialchars($site_phone_link) ?>" target="_blank" rel="noopener noreferrer">Comece a economizar agora!</a>
    </div>
  </section>

  <section class="section logo-bar sr-reveal">
    <div class="container">
      <div class="grid-6">
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
      <h2 class="section-title" style="text-align:center;">O que podemos fazer por <span class="text-gradient">você</span>?</h2>
      <div class="grid-2 section-grid" style="margin-top:40px;">
        <div class="section-copy">
          <h3 class="section-title" style="font-size:2rem;">Energia limpa e <span class="text-gradient">renovável</span></h3>
          <p class="section-subtitle">Entregamos soluções de energia, transformando a forma como empresas e pessoas geram e consomem energia.</p>
          <p class="section-subtitle">Nosso objetivo é simples: ajudar você a reduzir custos, aumentar a sustentabilidade e construir um futuro mais verde.</p>
        </div>
        <div class="media-card"><img src="assets/solar-rooftop.jpg" alt="Painéis solares em telhado comercial"></div>
      </div>
      <div class="grid-2 section-grid" style="margin-top:28px;">
        <div class="media-card"><img src="assets/solar-residential.jpg" alt="Instalação de painéis solares residencial"></div>
        <div class="card section-copy" style="display:flex;align-items:center;">
          <p class="section-subtitle">Projetamos e implementamos sistemas solares personalizados, otimizando o desempenho energético e garantindo economia, automação, segurança e longevidade para o seu negócio.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section cover-block sr-reveal solar-cover-html">
    <div class="container">
      <h2 class="section-title">Energia Solar</h2>
      <p>Entregamos soluções de energia solar, transformando a forma como empresas de todos os portes geram e consomem energia.</p>
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
        <p class="section-subtitle">Reduza o seu custo, com <span class="text-gradient">baixo investimento</span> e consuma energia de fontes renováveis.</p>
        <p class="section-subtitle">*Para unidades em alta tensão.</p>
        <a class="btn" href="https://wa.me/<?= htmlspecialchars($site_phone_link) ?>" target="_blank" rel="noopener noreferrer">Receba uma consultoria gratuita</a>
      </div>
    </div>
  </section>

  <section class="section section-muted sr-reveal">
    <div class="container grid-2 section-grid">
      <div class="section-copy">
        <h2 class="section-title">Consultoria energética</h2>
        <h3>Desenvolvimento de Projetos</h3>
        <p class="section-subtitle">Contamos com experiências sólidas na implementação de projetos de micro e mini geração, ZeroGrid, carregadores elétricos e aquecimento de água.</p>
        <h3>Segurança e eficiência</h3>
        <p class="section-subtitle">Elaboramos cada projeto com um olhar específico, oferecendo soluções complementares e adequadas a cada cliente.</p>
        <a class="btn" href="https://wa.me/<?= htmlspecialchars($site_phone_link) ?>" target="_blank" rel="noopener noreferrer">Quero uma consultoria!</a>
      </div>
      <div class="media-card"><img src="assets/consulting.jpg" alt="Consultoria energética"></div>
    </div>
  </section>

  <section class="section section-dark sr-reveal">
    <div class="container testimonial">
      <h2 class="section-title">Depoimentos</h2>
      <?php foreach ($testimonials as $testimonial): ?>
        <div class="card" style="margin-top:24px;background:rgba(255,255,255,0.08);color:#fff;border-color:rgba(255,255,255,0.1);">
          <p><?= htmlspecialchars($testimonial['text']) ?></p>
          <strong><?= htmlspecialchars($testimonial['author']) ?></strong><br>
          <span><?= htmlspecialchars($testimonial['role']) ?></span>
        </div>
      <?php endforeach; ?>
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
