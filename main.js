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

 $(".animsition-overlay").animsition({
    inClass: 'overlay-slide-in-top',
    outClass: 'overlay-slide-out-top',
    inDuration: 1500,
    outDuration: 800,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : true,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });

    })