<?php
/* 給予店家評分
	API範例: rating.php?id=1&rate=3&comment=not bad
	店家id: id
	評分: rate
*/
header('Content-Type: application/json');
include("mysql_connect.inc.php"); 

$id      = @substr( strip_tags(addslashes(trim($_GET['id']))),0,40);
$rate    = @substr( strip_tags(addslashes(trim($_GET['rate']))),0,40);
$comment = @substr( strip_tags(addslashes(trim($_GET['comment']))),0,40);

$sql = "INSERT INTO `rating` (`store_id`, `comment`, `star`) VALUES ('$id', '$comment', '$rate');";

if (@mysqli_query($db, $sql)) {
	echo '1';
}else{
	echo '0';
}
