<?php
$conn= mysqli_connect("localhost","root","","habit_tracker");

if(!$conn){
    die("Connection failed: ". mysqli_connect_error());
}
?>