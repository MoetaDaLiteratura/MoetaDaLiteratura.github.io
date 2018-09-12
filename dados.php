<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <?php
        $to = "ai2017fmm@gmail.com";
        $subject = "Emails! (Léo é lindo)";
        $name = htmlspecialchars($_POST["name"]);
        $msg = htmlspecialchars($_POST["message"]);
        $body = "$name enviou :\n\n$msg";
        if (mail($to, $subject, $body)) {
            header('Location: obrigado.html');
        } else {
        echo("<p>Email delivery failed…</p>");
        }
        ?>
    </body>
</html>

