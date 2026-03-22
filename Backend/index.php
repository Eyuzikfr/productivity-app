<?php
$title= $_GET['title'];
$data= [
    "received_title"=> $title
];
echo json_encode($data);
?>