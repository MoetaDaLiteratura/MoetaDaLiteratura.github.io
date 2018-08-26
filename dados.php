<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <?php
        $nome=$_POST['name'];
        $email=$_POST['email'];
        $message=$_POST['message'];
        require 'vendor/autoload.php';

        $from = new SendGrid\Email(null, "likemeleo7@gmail.com");
        $subject = "Mensagem de contato";
        $to = new SendGrid\Email(null, "sonleo2013@gmail.com");
        $content = new SendGrid\Content("text/html", "Olá ADM, <br><br>Nova mensagem de contato<br><br>Nome: $nome <br> Email: $email <br>Mensagem: <br> $message");
        $mail = new SendGrid\Mail($from, $subject, $to, $content);
        
        //Necessário inserir a chave
        $apiKey = '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';
        $sg = new \SendGrid($apiKey);

        $response = $sg->client->mail()->send()->post($mail);
        #echo "index.html.element-overlay panels-scope stretched-to-fill"
        header('Location: obrigado.html');
        ?>
    </body>
</html>

