<!DOCTYPE html>
<html class="background">
<?php require 'includes/head.php' ?>
<body>
    <?php 
        require 'includes/navbar.php';
        require 'includes/sidebar.php' 
    ?>
    <main class="banner">
        <img src="images/logomini.png" class="banner-logo" alt="Moetá"/>
        <div class="banner-text">
            <h1 class="banner-text-title ">Obras de Usuários</h1>
            <h3 class="banner-text-subtitle mb-1">Envie sua obra para o blog no espaço abaixo</h3>
            <div class="btn-wrapper-center">
                <a href="/obracadastro.php" class="btn primary md">Enviar Obra</a>
            </div>
        </div>
    </main>
    <?php require 'includes/footer.php' ?>
    <script src="assets/js/sidebar.js"></script>
</body>
</html>