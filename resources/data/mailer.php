<?php 
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = strip_tags(trim($_POST["name"]));
        $name = str_replace(array("\r","\n"),array(" ", " "), $name);
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $message = trim($_POST["message"]);
        $honeypot = $_POST['robotname'];

        if (empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL) OR $honeypot > 1) {
            http_response_code(400);
            echo "Ein Problem ist aufgetreten: $name, $message, $email";
            exit;
        }

        $recipient = "hallo@engaging-elements.de";
        $subject = "Neue Anfrage von engaging-elements.de, von $name";
        $time = date("d-m-Y") . ' um ' . date("h:i:sa");
        $email_content = "Name: $name\n";
        $email_content .= "Email: $email\n\n";
        $email_content .= "Nachricht:\n $message\n";
        $email_content .= "Gesendet von mailer.php am $time";

        $email_headers = "From: $name <$email>";

        if (mail($recipient, $subject, $email_content, $email_headers)) {
            http_response_code(200);
            echo "Danke, deine Nachricht ist auf dem Weg an $recipient!";
        } else {
            http_response_code(500);
            echo "Ein Problem ist auftreten: 500";
        }

    } else {
        http_response_code(403);
        echo "Ein Problem ist aufgetreten: 403";
    }
?>

