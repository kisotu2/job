<?php
include_once 'connection.php';
print_r($_POST);
try{
    if($_SERVER['REQUEST_METHOD']=="POST"){
        $Name = $_POST('full_name');
        $Password = $_POST('Password');
        $Email = $_POST('email_address');

        $sql = "INSERT INTO users (full_name,email_address,password) values ('$Name','$Password','$Email')";

        if($conn->query($sql)===TRUE){
            echo json_encode(["status"=> "success", "message" => "Data inserted successfully"]);
            header("Location:dashboard.php");
        }
        else{
            echo json_encode(["status"=> "error","message"=> $conn->error]);
        }
    }
}

?>