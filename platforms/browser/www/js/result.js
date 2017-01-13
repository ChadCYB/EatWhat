$(document).ready(bgResize); 
$(window).resize(bgResize); 		// This will execute whenever the window is resized
$(document).ready(WindowsSize); 
$(window).resize(WindowsSize); 		// This will execute whenever the window is resized

var emResize = function(){
	var em_size = "1em";
	if(screen_w > 1200){
		em_size = "1.8em";
	}else if(screen_w > 1000){
		em_size = "1.3em";
	}else if(screen_w > 410){
		em_size = "1em";
	}else if(screen_w > 330){
		em_size = "0.75em";
	}else{
		em_size = "0.6em";
	}
	$(".fa.fa-star").css({
		"font-size": em_size
	});
};

function btnSubmit(type,e,id){
		e.preventDefault();
		console.log(type+"/"+id);
  	runAnim('#card'+id ,'card swing');
  	runAnim('.card.bounceInUp.animated','card hinge');
    runAnim('#icon','rotateOut');
    runAnim('#back','fadeOutRight');
    url = "map.html?id="+id;
    setTimeout(function(){ window.location = url; }, 2000);
}
function btnBack(type,e){
		e.preventDefault();
		console.log(type);
		runAnim('#headerbar', 'fadeOutUp');
  	runAnim('.content' ,'fadeOutDown');
		runAnim('.footer', 'fadeOutDown');
    runAnim('#icon','rotateOut');
  	runAnim("#back" , "fadeOutLeft");
  	url = "javascript:window.history.back()";
    setTimeout(function(){ window.location = url; }, 1000);
}
$(document).ready(function(){
  $('.jsAnim').click(function(e){
  	var id = $(this).attr("data-value");
  	btnSubmit('click', e, id);
  });
  $('.jsAnim').on("tap",function(e){
  	var id = $(this).attr("data-value");
  	btnSubmit('touch', e, id);
  });
  $('#back').click(function(e){
  	btnBack('click', e);
  });
  $('#back').on("tap",function(e){
  	btnBack('touch', e);
  });
});

// $('.carousel').carousel();

// var maps = {
//     foo: new google.maps.Map(document.getElementById('foo'), {
//         center: new google.maps.LatLng(44.5403, -78.5463),
//         zoom: 8,
//         mapTypeId: google.maps.MapTypeId.ROADMAP
//     }),
//     bar: new google.maps.Map(document.getElementById('bar'), {
//         center: new google.maps.LatLng(44.5403, -78.5463),
//         zoom: 8,
//         mapTypeId: google.maps.MapTypeId.SATELLITE
//     })
// };

// $('#carousel').on('slid.bs.carousel', function (e) {
//     var map = maps[e.relatedTarget.dataset.map];
//     google.maps.event.trigger(map, 'resize');
// })