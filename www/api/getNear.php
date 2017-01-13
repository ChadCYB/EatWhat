<?php
/* 找尋距離內附近店家
	API範例: getNear.php?lat=24.0443026&long=120.687842&dist=48
	座標: lat, long
	距離: dist
	種類: type
*/
header('Content-Type: application/json');
include("mysql_connect.inc.php"); 

$lat  = @substr( strip_tags(addslashes(trim($_GET['lat']))),0,40);
$long = @substr( strip_tags(addslashes(trim($_GET['long']))),0,40);
$dist = @substr( strip_tags(addslashes(trim($_GET['dist']))),0,40);
$dist = is_numeric($dist)? $dist : 0;
$type = @substr( strip_tags(addslashes(trim($_GET['type']))),0,40);

$lat = 24.0456015;
$long = 120.6861501;

$sql = "SELECT * FROM store where 1";

if (@$result = mysqli_query($db, $sql)) {
	$rows = array();
	while($r = mysqli_fetch_assoc($result)) {
		// if( distance($r['latitude'], $r['longitude'], $lat, $long) <= $dist ){
		if( distance($r['latitude'], $r['longitude'], $lat, $long) <= $dist && inArray($r['category'], $type) ){
			$rows[] = $r;
		}
	}
	echo (json_encode($rows, JSON_UNESCAPED_UNICODE));
} 

function inArray($data, $keyword){
	$key_arr = explode(',' ,$keyword);

	if(sizeof($key_arr) == 1){
		switch ($keyword) {
			case '0':
				$key_arr = array('1','2','3','4','5');
				break;
			case '10':
				$key_arr = array('11','12','13','14','15');
				break;
			case '20':
				$key_arr = array('21','22','23','24','25');
				break;
		}
	}

	$flag = false;
	foreach ($key_arr as &$value) {
		// echo valCat($value) ."|". $keyword ."<br>";
		if(in_array(valCat($value), explode(',' ,$data)))
			$flag = true;
	}
	
	return $flag;
}
function valCat($index){
	$str = "";
	switch ($index) {
		case '0':
			$str = "隨機";
			break;
		case '1':
			$str = "中式傳統小吃";
			break;
		case '2':
			$str = "中式餐廳";
			break;
		case '3':
			$str = "西式餐廳";
			break;
		case '4':
			$str = "異國料理";
			break;
		case '5':
			$str = "創意料理";
			break;

		case '10':
			$str = "隨機飲料";
			break;
		case '11':
			$str = "飲料";
			break;
		case '12':
			$str = "連鎖飲料";
			break;
		case '13':
			$str = "咖啡";
			break;
		case '14':
			$str = "酒精飲料";
			break;
		case '15':
			$str = "創意飲料";
			break;
		case '16':
			$str = "便利商店";
			break;

		case '20':
			$str = "隨機甜點";
			break;
		case '21':
			$str = "中式甜點";
			break;
		case '22':
			$str = "西式甜點";
			break;
		case '23':
			$str = "麵包";
			break;
		case '24':
			$str = "蛋糕";
			break;
		case '25':
			$str = "中式糕餅";
			break;			
		case '26':
			$str = "冰品";
			break;
		case '27':
			$str = "古早味甜點";
			break;

		default :
			$str = "無";
		 	break;
	}
	return $str;
}

function distance($lat1, $lon1, $lat2, $lon2) {

  $theta = $lon1 - $lon2;
  $dist = sin(deg2rad($lat1)) * sin(deg2rad($lat2)) +  cos(deg2rad($lat1)) * cos(deg2rad($lat2)) * cos(deg2rad($theta));
  $dist = acos($dist);
  $dist = rad2deg($dist);
  $miles = $dist * 60 * 1.1515;

  return ($miles * 1.609344 * 1000);
}