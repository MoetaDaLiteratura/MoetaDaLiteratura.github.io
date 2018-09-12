<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <?php
        $to = "ai2017fmm@gmail.com";
        $subject = "Nova obra de usuário (léo é lindo)";
        $name = htmlspecialchars($_POST["name"]);
        $redesocial = htmlspecialchars($_POST["redesocial"]);
        $categoria = htmlspecialchars($_POST["categoria"]);
        $msg = htmlspecialchars($_POST["message"]);
        $body = "\nObra recebida\n autor: $name \nRede social: $redesocial \nCategoria\n Obra :\n\n$msg";
        if (mail($to, $subject, $body)) {
            header('Location: obrigado.html');
        } else {
            header('Location: emailFail.html');
        }
        ?>
    </body>
</html>