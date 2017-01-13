<?php
header('Content-Type: application/json');
include("mysql_connect.inc.php");

$id = @substr( strip_tags(addslashes(trim($_GET['id']))),0,40);
$sql = "SELECT * FROM store where id = '$id'";
// echo $sql;

if (@$result = mysqli_query($db, $sql)) {
	$rows = array();
	while($r = mysqli_fetch_assoc($result)) {
    $rows[] = $r;
	}
	echo (json_encode($rows, JSON_UNESCAPED_UNICODE));
} 