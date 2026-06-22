<?php
// Nimmt die Daten vom Kontaktformular (als JSON) entgegen und schickt sie per Mail.
// Antwortet selbst wieder mit JSON, damit das Angular-fetch result.success lesen kann.

header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);

$name = $data['name'] ?? '';
$email = $data['email'] ?? '';
$message = $data['message'] ?? '';

// kurze Prüfung, ob alles ausgefüllt ist
if ($name === '' || $email === '' || $message === '') {
    echo json_encode(['success' => false]);
    exit;
}

// meine Mail-Adresse (hier kommen die Nachrichten an)
$to = 'krawall-kreativ.de@outlook.de';
$subject = 'Neue Nachricht über dein Portfolio';
$body = "Name: $name\nE-Mail: $email\n\nNachricht:\n$message";

// Absender auf der eigenen Domain -> der Server darf für die Domain senden (weniger Spam).
// Reply-To auf den Besucher, damit "Antworten" direkt an ihn geht.
$headers = "From: Portfolio <kontakt@christopherrauch.de>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Betreff als UTF-8 kodieren, damit Umlaute korrekt ankommen
$subject = '=?UTF-8?B?' . base64_encode($subject) . '?=';

if (mail($to, $subject, $body, $headers)) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false]);
}
