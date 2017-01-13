var resizeHandler = function(){
  WindowsSize();
	bgResize();
	emResize();
};
$(document).ready(resizeHandler);
$(window).resize(resizeHandler);

var emResize = function(){
	var em_size = "1em";
	if(screen_w > 1200){
		em_size = "1.8em";
	}else if(screen_w > 1000){
		em_size = "1.3em";
	}else if(screen_w > 410){
		em_size = "1em";
	}else if(screen_w > 330){
		em_size = "0.7em";
	}else{
		em_size = "0.6em";
	}
	console.log(em_size);
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

var lat = 24.045364;
var long = 120.6853098;
var store;
var type = getURLParameter("type");
var dist = getURLParameter("dist");

$.getJSON( "http://127.0.0.1/~104021132/final/www/api/getNear.php?lat="+lat+"&long="+long+"&dist="+dist+"&type="+type , function( data ) {
	showResult(data);
});

function showResult(data){
	console.log(data);

	console.log('showResult');
	$('#search_result').html("");
	jQuery.each(data, function(i, val) {
		var star = Math.floor((Math.random() * 5));
	$('#search_result').append(
    $('<div>').attr('id','card'+val.id).attr('class','card bounceInUp animated').append(
      $('<div>').attr('class','card-block').append(
      $('<div>').attr('class','row').append(
      	$('<div>').attr('class','col-xs-8 col-sm-9 col-lg-10').append(
      		$('<h4>').attr('class','card-title').append(
      			$('<strong>').append(val.name)
        	),
        	$('<p>').attr('class','card-text').append(
      			$('<i>').attr('class','fa fa-cutlery').attr('aria-hidden','true').append(),
      			val.category
        	),
        	$('<p>').attr('class','text-muted').append(
      			$('<i>').attr('class','fa fa-commenting-o').attr('aria-hidden','true').append(),
      			((val.note==null)?"尚無":val.note)
        	)
        ),
      	$('<div>').attr('class','col-xs-4 col-sm-3 col-lg-2').append(
      		$('<i>').attr('class','fa fa-star').attr('class','fa fa-star').attr('style','font-size:0.85em'+((star>=0)?";color:#FFB01C":";")).attr('aria-hidden','true').append(),
      		$('<i>').attr('class','fa fa-star').attr('class','fa fa-star').attr('style','font-size:0.85em'+((star>=1)?";color:#FFB01C":";")).attr('aria-hidden','true').append(),
      		$('<i>').attr('class','fa fa-star').attr('class','fa fa-star').attr('style','font-size:0.85em'+((star>=2)?";color:#FFB01C":";")).attr('aria-hidden','true').append(),
      		$('<i>').attr('class','fa fa-star').attr('class','fa fa-star').attr('style','font-size:0.85em'+((star>=3)?";color:#FFB01C":";")).attr('aria-hidden','true').append(),
      		$('<i>').attr('class','fa fa-star').attr('class','fa fa-star').attr('style','font-size:0.85em'+((star>=4)?";color:#FFB01C":";")).attr('aria-hidden','true').append(),
      		$('<p>').append(),
      		$('<p>').append(),
      		$('<a>').attr('data-value',val.id).attr('class','btn btn-info btn-block jsAnim').attr('role','button').attr('aria-pressed','true').append(
      			$('<i>').attr('class','fa fa-chevron-right').attr('aria-hidden','true').append()
      		)
      	)
			)	
    ))
   );
	});
}

