<?php

$site_name = "Leal Energia";
$site_description = "Leal Energia: energia solar em São José dos Campos, mercado livre de energia e soluções para residências, comércios e indústrias.";
$site_email = "contato@lealenergia.com.br";
$lead_email = "alvaro.zechlinski@lealenergia.com.br";
$site_phone_display = "(12) 99775-0212";
$site_phone_link = "5512997750212";

$nav_items = [
    ["label" => "Início", "href" => "index.php"],
    ["label" => "Sobre", "href" => "sobre.php"],
    ["label" => "São José dos Campos", "href" => "sao-jose-dos-campos.php"],
    ["label" => "Contato", "href" => "contato.php"],
];

$clients = [
    ["name" => "Localiza Seminovos", "url" => "https://seminovos.localiza.com/", "logo" => "assets/logo-localiza.webp"],
    ["name" => "Delta Electronics", "url" => "https://delta-electronics.com.br/", "logo" => "assets/logo-delta.png"],
    ["name" => "CG Office Mall", "url" => "https://cgofficemall.com.br/", "logo" => "assets/logo-cgofficemall.webp"],
    ["name" => "3Corp", "url" => "https://www.3corp.com.br/en/", "logo" => "assets/logo-3corp.png"],
    ["name" => "Achiropita", "url" => "https://achiropita.org.br/", "logo" => "assets/logo-achiropita.webp"],
    ["name" => "Packwind", "url" => "https://packwind.com.br/", "logo" => "assets/logo-packwind.webp"],
];

$cta_boxes = [
    ["title_before" => "Quer ", "highlight" => "reduzir", "title_after" => " os custos da sua residência ou comércio?", "cta" => "Comece a economizar!"],
    ["title_before" => "Sua empresa ou indústria precisa de ", "highlight" => "soluções", "title_after" => " em energia?", "cta" => "CONHEÇA AS SOLUÇÕES!"],
    ["title_before" => "Quer o sol ", "highlight" => "trabalhando", "title_after" => " por você? Entenda como!", "cta" => "DESCUBRA COMO!"],
];

$values = [
    ["title" => "Pessoas em primeiro lugar", "text" => "Valorizamos cada cliente e cada colaborador, construindo relações de confiança e transparência."],
    ["title" => "Excelência", "text" => "Buscamos a mais alta qualidade em cada projeto, desde o planejamento até a entrega final."],
    ["title" => "Inovação", "text" => "Acompanhamos as últimas tecnologias do setor para oferecer as melhores soluções em energia solar."],
    ["title" => "Compromisso", "text" => "Assumimos o compromisso com a sustentabilidade e com o futuro energético do Brasil."],
];

$sjc_features = [
    ["title" => "Alta Irradiação Solar", "text" => "São José dos Campos possui excelente incidência solar durante todo o ano, ideal para geração fotovoltaica."],
    ["title" => "Polo Tecnológico", "text" => "A cidade é um centro de inovação e tecnologia, com empresas que buscam soluções sustentáveis de energia."],
    ["title" => "Sustentabilidade", "text" => "Contribua para uma cidade mais verde e sustentável, reduzindo a pegada de carbono do Vale do Paraíba."],
    ["title" => "Atendimento Local", "text" => "Estamos presentes em São José dos Campos com equipe técnica especializada para atender você."],
];

$testimonials = [
    ["text" => "Equipe bem atenciosa, bem profissional! Bem atendido desde a área comercial até a entrega do serviço instalado. Ressaltando também o retorno do pós-venda pelo interesse em saber da satisfação após as primeiras contas!", "author" => "Carlos Azevedo", "role" => "Sistema Residencial"],
    ["text" => "Excelente lugar e de fácil acesso! Muito impressionado com a infraestrutura da empresa. Além do produto ser de primeira linha, a confiabilidade e o tratamento aos clientes são inquestionáveis. Parabéns Leal Energia por seu trabalho! Recomendo!", "author" => "Cezar Justino", "role" => "Sistema Residencial"],
    ["text" => "Fomos muito bem atendidos pela Leal Energia Solar! Equipe de instalação muito experiente, muito obrigado pelo serviço prestado! Ótimo investimento!", "author" => "João", "role" => "Planta Industrial"],
];

$gallery_images = [
    ["src" => "assets/projeto-1.webp", "alt" => "Projeto residencial com painéis solares visto por drone"],
    ["src" => "assets/projeto-2.webp", "alt" => "Instalação solar em cobertura urbana com vista da cidade"],
    ["src" => "assets/projeto-3.webp", "alt" => "Sistema solar residencial em telhados urbanos"],
    ["src" => "assets/projeto-4.jpg", "alt" => "Projeto fotovoltaico em cobertura comercial"],
    ["src" => "assets/projeto-5.jpg", "alt" => "Instalação solar em estrutura industrial vista aérea"],
    ["src" => "assets/projeto-6.jpg", "alt" => "Estacionamento com cobertura de energia solar"],
];

function render_head(string $title, string $description): void
{
    global $site_name;
    ?>
<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?= htmlspecialchars($title) ?> | <?= htmlspecialchars($site_name) ?></title>
  <meta name="description" content="<?= htmlspecialchars($description) ?>">
  <meta name="theme-color" content="#0d4f33">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
    <?php
}

function render_header(string $current_page): void
{
    global $nav_items, $site_phone_link;
    $is_home = $current_page === 'index.php';
    ?>
<header class="site-header<?= $is_home ? ' site-header-home' : '' ?>">
  <div class="container">
    <nav class="navbar<?= $is_home ? ' navbar-home' : '' ?>">
      <a class="brand" href="index.php"><img src="assets/logo-leal.png" alt="Leal Energia"></a>
      <button class="menu-toggle<?= $is_home ? ' menu-toggle-home' : '' ?>" type="button" aria-expanded="false" aria-controls="mobile-menu"><span></span><span></span><span></span></button>
      <ul class="nav-links nav-desktop">
        <?php foreach ($nav_items as $item): ?>
          <li><a class="<?= $current_page === $item["href"] ? "active" : "" ?><?= $is_home ? ' nav-link-home' : '' ?>" href="<?= htmlspecialchars($item["href"]) ?>"><?= htmlspecialchars($item["label"]) ?></a></li>
        <?php endforeach; ?>
      </ul>
      <a class="nav-cta desktop-only<?= $is_home ? ' nav-cta-home' : '' ?>" href="https://wa.me/<?= htmlspecialchars($site_phone_link) ?>" target="_blank" rel="noopener noreferrer">Entre em contato</a>
    </nav>
    <div id="mobile-menu" class="mobile-menu">
      <ul class="nav-links">
        <?php foreach ($nav_items as $item): ?>
          <li><a class="<?= $current_page === $item["href"] ? "active" : "" ?>" href="<?= htmlspecialchars($item["href"]) ?>"><?= htmlspecialchars($item["label"]) ?></a></li>
        <?php endforeach; ?>
      </ul>
      <a class="nav-cta" href="https://wa.me/<?= htmlspecialchars($site_phone_link) ?>" target="_blank" rel="noopener noreferrer">Entre em contato</a>
    </div>
  </div>
</header>
    <?php
}

function render_footer(): void
{
    global $site_phone_link;
    ?>
<footer class="site-footer">
  <div class="container footer-grid">
    <div class="footer-brand">
      <img src="assets/logo-leal.png" alt="Leal Energia">
      <span>Leal Energia | Acesse as nossas redes sociais</span>
    </div>
    <div class="footer-social">
      <a href="https://www.instagram.com/lealenergia/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a>
      <a href="https://www.linkedin.com/company/lealenergia/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
    </div>
    <a class="footer-contact" href="https://wa.me/<?= htmlspecialchars($site_phone_link) ?>" target="_blank" rel="noopener noreferrer">Entre em contato</a>
  </div>
  <div class="footer-bottom"><div class="container">Copyright 2026 © LEAL ENERGIA</div></div>
</footer>
<script src="script.js"></script>
</body>
</html>
    <?php
}
