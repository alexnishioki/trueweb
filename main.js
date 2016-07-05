window.onbeforeunload = function(){
	window.scrollTo(0,0);
}
$(document).ready(function (){
	$(this).scrollTop(0);
$.fn.scrollView = function () {
  return this.each(function () {
    $('html, body').animate({
      scrollTop: $(this).offset().top
    }, 700);
})
}


  $('#stories').click(function (event) {
  event.preventDefault();
  $('#stop_gap').scrollView();
});

  $('#apps').click(function (event) {
  event.preventDefault();
  $('#stop_gap_2').scrollView();
});

$('#about_i').click(function (event) {
  event.preventDefault();
  $('#stop_gap_3').scrollView();
});

$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

    })