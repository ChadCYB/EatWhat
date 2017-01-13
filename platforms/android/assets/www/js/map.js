$(document).ready(WindowsSize); 
$(window).resize(WindowsSize); 		// This will execute whenever the window is resized

var id = getURLParameter('id');
var store = "nodata";

$.getJSON( "http://120.108.111.157/~104021132/final/www/api/getStore.php?id="+id , function( data ) {
	store = data;
	console.log(store);
	var fork = '<i class="fa fa-cutlery" aria-hidden="true"></i>';
	$("#mytitle").html( fork +' '+ store[0].name +' '+ fork);
	$("#phone").html('電話:<a href="tel:'+store[0].phone+'"> '+store[0].phone+'</a>');
	$('#address').html('地址:<a href="geo: '+store[0].latitude+','+store[0].longitude+'"> '+store[0].address+'</a>');
});

var lat, long;
var markers = [];
var map, poly;

/*-------------initMap-------------*/
function initMap(position) {
	// Create a map object and specify the DOM element for display.
	var latlon = new google.maps.LatLng(lat, long);
	var option = {
		center: latlon,
		scrollwheel: false,
		zoom: 16
	}
	map = new google.maps.Map(document.getElementById('map'), option);
	poly = new google.maps.Polyline({
    strokeColor: '#000000',
    strokeOpacity: 1.0,
    strokeWeight: 3
  });

  poly.setMap(map);
  addLatLng();
}
/*-------------Polyline-------------*/
// Handles click events on a map, and adds a new point to the Polyline.
function addLatLng() {
  var path = poly.getPath();
  var latLng = new google.maps.LatLng(lat, long);
  // Because path is an MVCArray, we can simply append a new coordinate
  // and it will automatically appear.
  path.push(latLng);
  console.log(path);
  // Add a new marker at the new plotted point on the polyline.
  var marker = new google.maps.Marker({
    position: latLng,
    title: '#' + path.getLength(),
    map: map
  });
}

/*-------------get_GPS_data-------------*/
function getLocation() {
    if (window.navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
    		console.log("Geolocation is not supported by this browser.");
        alert("Geolocation is not supported by this browser.");
    }
}
function showPosition(position) {
		lat = position.coords.latitude;
		long = position.coords.longitude;
		lat = store[0].latitude;
		long = store[0].longitude;
		console.log("getLatlon: "+lat+","+long);

    initMap(position);
}

function showError(error) {
	switch(error.code) {
		case error.PERMISSION_DENIED:
			console.log("你拒絕提供定位權限!");
	    alert("你拒絕提供定位權限!");
	    break;
		case error.POSITION_UNAVAILABLE:
			console.log("查無位置訊息!");
	    alert("查無位置訊息!");
	    break;
		case error.TIMEOUT:
			console.log("取得定位逾時!");
	    alert("取得定位逾時!");
	    break;
		case error.UNKNOWN_ERROR:
			console.log("未知的錯誤!");
	    alert("未知的錯誤!");
	    break;
	}
}
// $(document).ready(bgResize); 
$(document).ready(mapResize); 
$(document).ready(getLocation()); 
// $(window).resize(bgResize); 		// This will execute whenever the window is resized
$(window).resize(mapResize); 		// This will execute whenever the window is resized

var mapResize = function(){
	$(".info").css({
		"width": screen_w,
    "height": Math.round(screen_h*0.3)+"px",
		"background": "black",
	});
	$("#map").css({
		"width": screen_w,
    "height": Math.round(screen_h*0.7)+"px",
	});
	console.log(screen_h*0.7);
};