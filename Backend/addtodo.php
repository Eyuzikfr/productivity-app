<?php
include "config/db.php";

$data= json_decode(file_get_contents("php://input"),true);
$title= $data['title'];

//insert into DB
$sql= "INSERT INTO todos (title) VALUES ('$title')";

if($conn->query($sql)===TRUE){
    echo json_encode(["message"=> "Todo added"]);
}
else{
    echo json_encode(["error"=>"Failed"]);
}

?>