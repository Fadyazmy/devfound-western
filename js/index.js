
$(function(){
      $(".typed").typed({
        strings: ["charities.", "NPOs.", "clubs."],
        typeSpeed: 1,
        loop: true,
        backDelay: 2000
      });
  });

    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop:  ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });