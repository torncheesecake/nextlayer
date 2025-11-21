<?php
// Suppress errors and warnings so output is only clean JSON for AJAX
ini_set('display_errors', 0);
error_reporting(0);

$is_ajax = !empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest';

// Basic anti-spam honeypot check first
if (!empty($_POST['website'])) {
    if ($is_ajax) {
        header('Content-Type: application/json');
        echo json_encode(['status' => 'success']); // Pretend success for bots
        exit;
    }
    header("Location: /thank-you");
    exit;
}

// Collect and trim inputs
$name = isset($_POST['name']) ? trim($_POST['name']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$company = isset($_POST['company']) ? trim($_POST['company']) : '';
$message = isset($_POST['message']) ? trim($_POST['message']) : '';

// Validate and sanitize email to prevent header injection
$email = filter_var($email, FILTER_SANITIZE_EMAIL);
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    if ($is_ajax) {
        header('Content-Type: application/json');
        echo json_encode(['status' => 'error']);
        exit;
    }
    header("Location: /contact?error=1");
    exit;
}
// Remove any potential newline characters to prevent header injection
$email = str_replace(["\r", "\n", "%0a", "%0d"], '', $email);
$name = str_replace(["\r", "\n", "%0a", "%0d"], '', $name);

$to = 'Hello@nextlayerconsulting.com';
$subject = "New Contact Form Message";
$headers = "From: " . $email . "\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$body = "You received a new message from your website contact form:\n\n";
$body .= "Name: $name\n";
$body .= "Email: $email\n";
$body .= "Company: $company\n";
$body .= "Message:\n$message\n";

$success = false;

// Only try to send mail if required fields are present
if ($name && $email && $message) {
    if (mail($to, $subject, $body, $headers)) {
        $success = true;
    }
}

// AJAX response (for fetch)
if ($is_ajax) {
    header('Content-Type: application/json');
    echo json_encode(['status' => $success ? 'success' : 'error']);
    exit;
}

// Classic browser submit (POST, not AJAX)
if ($success) {
    header("Location: /contact?success=1"); // SPA-friendly redirect
    exit;
}
// Sending failed or bad input
header("Location: /contact?error=1");
exit;
?>
