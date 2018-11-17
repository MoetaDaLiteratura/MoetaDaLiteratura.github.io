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
                <form  method="POST" action="enviarobras.php">
                    <div class="form-group">
                        <label for="name">Seu nome</label>
                        <input id="name" class="form-input" type="text" name="name">
                    </div>
                    <div class="form-group">
                        <label for="message">Insira alguma rede social (especifique qual) sua para aparecer ao lado de seu nome (não obrigatório)</label>
                        <textarea id="message" class="form-input" type="text" name="redesocial"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="message">Digite a categoria de sua obra (conto ou poesia)</label>
                        <textarea id="message" class="form-input" type="text" name="categoria"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="message">Poste sua obra aqui(Não esqueça do título)</label>
                        <textarea id="message" class="form-input" type="text" name="message"></textarea>
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