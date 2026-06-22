<?php

header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);

$name = $data['name'] ?? '';
$email = $data['email'] ?? '';
$message = $data['message'] ?? '';

if ($name === '' || $email === '' || $message === '') {
    echo json_encode(['success' => false]);
    exit;
}

$to = 'krawall-kreativ.de@outlook.de';
$from = 'kontakt@christopherrauch.de';
$subject = '=?UTF-8?B?' . base64_encode('Neue Nachricht über dein Portfolio') . '?=';
$body = "Name: $name\nE-Mail: $email\n\nNachricht:\n$message";

$headers = "From: Portfolio <$from>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

if (mail($to, $subject, $body, $headers, "-f $from")) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false]);
}
