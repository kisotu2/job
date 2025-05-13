<?php
include_once 'connection.php';
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $name = $_POST['full_name'];
    $email = $_POST['email_address'];
    $password = $_POST['password'];

    $sql = "INSERT INTO admin (full_name, email_address, password) VALUES ('$name', '$email', '$password')";
    if ($conn->query($sql) === TRUE) {
        echo json_encode(["status" => "success"]);
    } else {
        echo json_encode(["status" => "error", "message" => $conn->error]);
    }
}
?>
