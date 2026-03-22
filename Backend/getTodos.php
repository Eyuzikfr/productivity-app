<?php

include "config/db.php";

$sql = "SELECT * FROM todos";
$result = $conn->query($sql);

$todos= [];

while ($row= $result -> fetch_assoc())
    {
        $todos[]=$row;
    }

    echo json_encode($todos);

    ?>