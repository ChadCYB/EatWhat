$(document).ready(bgResize); 
$(window).resize(bgResize); 		// This will execute whenever the window is resized
$(document).ready(WindowsSize); 
$(window).resize(WindowsSize); 		// This will execute whenever the window is resized

function btnSubmit(type,e){
		console.log(type);
    e.preventDefault();
    runAnim('.content','fadeOutUp');
    runAnim('#icon','rotateOut');
    runAnim('#back','fadeOutRight');

    var type = $("#category").val();
		var dist = $("#distance").val();

    url = "result.html?dist="+dist+"&type="+type;
    // console.log (url);
    setTimeout(function(){ window.location = url; }, 1000);
}
$(document).ready(function(){
  $('.jsAnim').click(function(e){
  	btnSubmit('click',e);
  });
  $('.jsAnim').on("tap",function(e){
  	btnSubmit('touch',e);
  });
});

