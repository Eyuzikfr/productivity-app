<?php
include "config/db.php";

$data= json_decode(file_get_contents("php://input"),true);
$task= $data['task'] ?? null;
$deadline =$data["deadline"] ?? null;

if (!$task){
    echo json_encode(["error"=> "Task is required"]);
    exit;
}

//insert into DB
$sql= "INSERT INTO todos (title,deadline) VALUES ('$task','$deadline')";

if($conn->query($sql)===TRUE){
    echo json_encode(["message"=> "Todo added"]);
}
else{
    echo json_encode(["error"=>"Failed"]);
}

?>