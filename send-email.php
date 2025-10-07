<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid JSON input']);
    exit;
}

// Validate required fields
$required_fields = ['name', 'email', 'message'];
foreach ($required_fields as $field) {
    if (empty($input[$field])) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => "Missing required field: $field"]);
        exit;
    }
}

// Validate email format
if (!filter_var($input['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid email format']);
    exit;
}

// Resend API configuration
$api_key = 're_heLoQutw_3y5NWUxnuZopDpxumVvW1Xoi';
$from_email = 'ncmllcompany@gmail.com';
$to_email = 'ncmllcompany@gmail.com';

// Prepare email data
$email_data = [
    'from' => $from_email,
    'to' => [$to_email],
    'subject' => 'Nuevo mensaje de contacto - ' . $input['name'],
    'html' => generateEmailHTML($input),
    'text' => generateEmailText($input)
];

// Send email via Resend API
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'https://api.resend.com/emails');
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($email_data));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Authorization: Bearer ' . $api_key,
    'Content-Type: application/json'
]);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);

$response = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curl_error = curl_error($ch);
curl_close($ch);

if ($curl_error) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'CURL error: ' . $curl_error]);
    exit;
}

if ($http_code !== 200) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'API error: ' . $response]);
    exit;
}

$result = json_decode($response, true);
echo json_encode(['success' => true, 'data' => $result]);

function generateEmailHTML($formData) {
    return '
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e3a8a; border-bottom: 2px solid #1e3a8a; padding-bottom: 10px;">
            Nuevo mensaje de contacto - CNM Renovation
        </h2>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Información del cliente:</h3>
            <p><strong>Nombre:</strong> ' . htmlspecialchars($formData['name']) . '</p>
            <p><strong>Email:</strong> ' . htmlspecialchars($formData['email']) . '</p>
            <p><strong>Teléfono:</strong> ' . htmlspecialchars($formData['phone'] ?? 'No proporcionado') . '</p>
            <p><strong>Servicio:</strong> ' . htmlspecialchars($formData['service'] ?? 'Consulta general') . '</p>
        </div>
        
        <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #374151; margin-top: 0;">Mensaje:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">' . htmlspecialchars($formData['message']) . '</p>
        </div>
        
        <div style="margin-top: 20px; padding: 15px; background-color: #dbeafe; border-radius: 8px;">
            <p style="margin: 0; color: #1e40af; font-size: 14px;">
                <strong>Fecha:</strong> ' . date('d/m/Y H:i:s') . '
            </p>
        </div>
    </div>';
}

function generateEmailText($formData) {
    return "
Nuevo mensaje de contacto - CNM Renovation

Información del cliente:
- Nombre: " . $formData['name'] . "
- Email: " . $formData['email'] . "
- Teléfono: " . ($formData['phone'] ?? 'No proporcionado') . "
- Servicio: " . ($formData['service'] ?? 'Consulta general') . "

Mensaje:
" . $formData['message'] . "

Fecha: " . date('d/m/Y H:i:s');
}
?>


