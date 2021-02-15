$(document).ready(function(){
  $(".button").on("click", function(e){
    e.preventDefault();
    var btn = $(this).attr("href")
    $("html, body").animate({
      scrollTop: $(btn).offset().top},'slow');
    })


    $('.videoplayer').hide();
    $('.video').on('click', function() {
        $('.videoplayer').hide();
        $(this).find('.videoplayer').show();
    });

    $('.videoplayer .close-video').on('click', function(e) {
        e.stopPropagation();
        $(this).parent('.videoplayer').hide();
    });
    

    $('.single-video').hide();
    $('.button2, .player-background').on('click', function() {
      $('.single-video').show(); 
  });
    $('.single-video .close-video').on('click', function(e) {
      e.stopPropagation();
      $(this).parent('.single-video').hide();
  });

  $('.toggle-nav').on('click', function () {
    $('.mobile-menu').toggle();
  });
    
})


