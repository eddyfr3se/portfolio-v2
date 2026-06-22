<?php
// Nimmt die Daten vom Kontaktformular (als JSON) entgegen und schickt sie per Mail.
// Antwortet selbst wieder mit JSON, damit das Angular-fetch result.success lesen kann.

header('Content-Type: application/json');

// JSON aus dem Request-Body lesen und in ein Array umwandeln
$data = json_decode(file_get_contents('php://input'), true);

// Werte holen (die Keys müssen 1:1 so heißen wie im fetch-Body)
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

// From auf meine Adresse, Reply-To auf den Absender -> Antworten gehen direkt an ihn
$headers = "From: $to\r\nReply-To: $email";

if (mail($to, $subject, $body, $headers)) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false]);
}
