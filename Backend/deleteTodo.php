<?php
include "config/db.php";

$data= json_decode(file_get_contents("php://input"),true);
$id= $data['id'];

$sql= "DELETE FROM todos WHERE id=$id";

if($conn->query($sql)===TRUE)
    {
        echo json_encode(["message"=>"Todo deleted"]);
    } else{
        echo json_encode(["error"=>"Failed"]);
    }
?>