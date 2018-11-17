<!DOCTYPE html>
<html class="background">
<?php require 'includes/head.php' ?>
<body>
    <?php 
        require 'includes/navbar.php';
        require 'includes/sidebar.php' 
    ?>
    <main class="banner">
        <img src="images/logomini.png" alt="" class="banner-logo">
        <div class="banner-text">
            <h1 class="banner-text-title">Moetá da literatura</h1>
            <h2 class="banner-text-subtitle">De leitor para leitor, o seu blog de literatura</h2>
        </div>
    </main>
    <section>
        <div class="card with-img content">
            <img src="images/POESIASmin.png" alt="" class="card-img">
            <div class="card-body">
                <div class="card-title">Nossas obras</div>
                <div class="card-content">
                    Nós produzimos poemas e contos temáticos do romantismo, acesse o link abaixo
                    e confira!
                </div>
                <div class="card-actions">
                    <a href="/obras.php" class="btn primary md">Ver obras</a>
                </div>
            </div>
        </div>
        <div id="sobre" class="card with-img content">
            <img src="images/sobrepic.jpg" alt="" class="card-img">
            <div class="card-body">
                <div class="card-title">Sobre nós</div>
                <div class="card-content">
                    Estudamos na <a href="http://www.fundacaomatiasmachline.org.br/">Fundação Matias Machline</a>, cursamos o segundo ano e somos da 
                    turma A de Informática. Este blog é um projeto coordenado pela Professora Dayanna Porto, de Língua Portuguesa, cujo o objetivo é 
                    divulgar a literatura Romântica. Para isso, dispomos de obras (poesias, contos e charges) criadas por nós e baseadas no período citado. 
                    <strong>Esperamos que goste!</strong> 
                </div>
                <div class="card-actions">
                    <a href="http://www.fundacaomatiasmachline.org.br" class="btn primary md">Visitar FMM</a>
                </div>
            </div>
        </div>
        <div class="card with-img content">
            <img src="images/aboutromantism2.png" alt="" class="card-img">
            <div class="card-body">
                <div class="card-title">Sobre o Romantismo</div>
                <div class="card-content">
                    O Romantismo foi o período literário que surgiu após o arcadismo e é caracterizado pela subjetividade, emoção,
                    sentimentalismo e lirismo. Os escritores românticos buscavam explorar as emoções e os dramas humanos. 
                    Este movimento é dividido em três: Primeira Geração, que dava destaque ao indígena e ao nacionalismo; 
                    Segunda Geração, a do ultraromantismo, que explorava a fundo os dramas humanos; e a Terceira Geração, 
                    a fase condoreira, que explora a temática social brasileira. 
                </div>
                <div class="card-actions">
                    <a href="/romantismo.php" class="btn primary md">Ler mais</a> 
                </div>
            </div>
        </div>
    </section>
    <?php require 'includes/footer.php' ?>
    <script src="/assets/js/sidebar.js"></script>
</body>
</html>
