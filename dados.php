<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <?php
        ini_set('display_errors', 1);

        error_reporting(E_ALL);
        $from = "likemeleo7@gmail.com";

        $to = "sonleo2013@gmail.com";

        $subject = "Verificando o correio do PHP";

        $message = "O correio do PHP funciona bem";

        $headers = "De:". $from;

        mail($to, $subject, $message, $headers);

        echo "A mensagem de e-mail foi enviada.";
        header('Location: obrigado.html');
        ?>
    </body>
</html>

