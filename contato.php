<!DOCTYPE html>
<html lang="pt">
<?php require 'includes/head.php' ?>
<body>
    <?php 
        require 'includes/navbar.php';
        require 'includes/sidebar.php' 
    ?>
    <main class="page-center">
        <div class="card card-primary lg">
            <div class="card-title">Entre em contato</div>
            <div class="card-subtitle">Envie sua mensagem abaixo</div>
            <div class="card-content">
                <form  method="POST" action="dados.php">
                    <div class="form-group">
                        <label for="name">Nome</label>
                        <input id="name" class="form-input" type="text" name="name" placeholder="Seu nome aqui"/>
                    </div>
                    
                <div class="form-group">
                    <label for="message">Digite sua mensagem</label>
                    <textarea id="message" class="form-input" type="text" name="message" placeholder="Sua mensagem aqui"></textarea>
                </div>
                <div>
                    <button type="submit" class="btn btn-primary btn-md">Enviar</button>
                    <button type="reset" class="btn btn-primary btn-md">Limpar</button>
                </div>
                </form>
            </div>
        </div>
    </main>
    <?php require 'includes/footer.php' ?>
    <script src="assets/js/sidebar.js"></script>
    </body>
</html>