// Cuando se completa la carga de la página se añade la class active
// al primer slide. Se esconden todas las slides excepto la que contiene
// la class active. 

$(document).ready(function() {
  // Set Options
  var speed = 500; // fade speed
  var autoswitch = true; // auto slider options
  var autoswitch_speed = 4000 // auto clider speed
  var autoswitch_interval;

  // Add initial active class
  $('.slide').first().addClass('active');

  // Hide all slides
  $('.slide').hide();

  // Show first slide
  $('.active').show();

  // Next Handler
  $('#next').on('click', function() {
    nextSlide();
    setAutoSwitch();
  });

  // Prev Handler
  $('#prev').on('click', function() {
    prevSlide();
    setAutoSwitch();
  });

  // Autoslider Handler
  if (autoswitch == true) {
      //setInterval(nextSlide, autoswitch_speed);    
      setAutoSwitch();
  }

  function setAutoSwitch() {
    if (autoswitch_interval) {
        clearInterval(autoswitch_interval);
    }
    autoswitch_interval = setInterval(function() {
        nextSlide();
    }, autoswitch_speed);
  }

  // Move to the next slide
  function nextSlide() {
    	$('.active').removeClass('active').addClass('oldActive');

    	if ($('.oldActive').is(':last-child')) {
          $('.slide').first().addClass('active');
    	} else {
    	    $('.oldActive').next().addClass('active');
    	}
    	$('.oldActive').removeClass('oldActive')
    	$('.slide').fadeOut(speed);
    	$('.active').fadeIn(speed);  	
  }

  // Move to prev slide
  function prevSlide() {
    	$('.active').removeClass('active').addClass('oldActive');

    	if ($('.oldActive').is(':first-child')) {
          $('.slide').last().addClass('active');
    	} else {
    	    $('.oldActive').prev().addClass('active');
    	}
    	$('.oldActive').removeClass('oldActive')
    	$('.slide').fadeOut(speed);
    	$('.active').fadeIn(speed);
  }
});