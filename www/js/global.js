// -- Make icon center --
var screen_h, screen_w;
var WindowsSize = function(){
  screen_h = $(window).height();	// New height
  screen_w = $(window).width();		// New width
  // console.log(screen_h+'/'+screen_w);
  iconResize();
};

var iconResize = function(){
	$("#icon").css({
		"position": "absolute",
		"right": (screen_w-80)/2,
		"left":  (screen_w-80)/2,
		"width": "80px"
	});
};

var bgResize = function(){
	var img = (screen_w>1200) ? "bg_wood_w.jpg":"bg_wood_h.jpg";
	$("body").css({
		"margin":"0",
    "padding":"0",
		"background": "url('img/"+img+"') no-repeat center center fixed",
		"-webkit-background-size" : "cover",
		"-moz-background-size" : "cover",
		"-o-background-size" : "cover",
		"background-size" : "cover"
	});
};

// -- Button animate --
function runAnim(item ,x) {
	console.log(item+' runAnim: '+x);
	// var className = $('#jsAnimDo').attr('class');
  $(item).removeClass().addClass(x + ' animated');
  // $('#jsAnimDo').removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  //   $(this).removeClass().addClass(className).removeClass('animated');
  // });  
};

function getURLParameter(name) {
	return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}