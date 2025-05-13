<?php
include_once 'connection.php';
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $email = $_POST['email_address'];
    $password = $_POST['password'];
    $userType = $_POST['userType'];

    $table = "";
    if ($userType === "Admin") $table = "admin";
    else if ($userType === "Organisation") $table = "organisation";
    else $table = "users";

    $sql = "SELECT * FROM $table WHERE email_address='$email' AND password='$password'";
    $result = $conn->query($sql);

    if ($result && $result->num_rows > 0) {
        echo json_encode(["status" => "success"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Invalid credentials"]);
    }
}
?>
