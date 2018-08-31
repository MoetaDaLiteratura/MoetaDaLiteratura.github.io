<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <?php
        $to = "ai2017fmm@gmail.com";
        $subject = "Hi!";
        $body = "Hi,\n\nHow are you?";
        if (mail($to, $subject, $body)) {
        echo("<p>Email successfully sent!</p>");
        } else {
        echo("<p>Email delivery failed…</p>");
        }
        ?>
    </body>
</html>

