<?php
$_POST = json_decode(file_get_contents("php//input"), true); //чтобы получить json в php
echo var_dump($_POST);