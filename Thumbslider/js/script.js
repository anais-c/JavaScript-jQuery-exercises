// This slider is not finished

$(function() {

    // Declare vars
  	var totalWidth = 0;
  	var positions = new Array();

  	$('#slides .slide').each(function(i) {
        // Get slider widths
        totalWidth += $(this).width();
        positions[i] = totalWidth;

         // Check widths
        if(!$(this).width()) {
            alert('Please add a width to your images');
            return false;
        }

  	});

    // Set width
  	$('#slides').width(totalWidth);

  	// Make first image active
  	$('#menu ul li.product:first').addClass('active').siblings().addClass('inactive');	

  	$('#menu ul li a').click(function(e, keepScroll) {

        $('li.product').removeClass('active').addClass('inactive');

        // Add active class to parent
        $(this).parent().addClass('active');

        var pos = $(this).parent().prevAll('.product').length;

        $('#slides').stop().animate({marginLeft: -positions[pos]+'px'}, 450);

        // Prevent default action
        e.preventDefault();

        // Stop autoscroll
        if(!autoScroll) clearInterval(itvl);
  	});

  	// Auto Scroll
  	var current = 1
  	
  	function autoScroll() {
    		if( current == -1) return false;

    		$('#menu ul li a').eq(current%$('#menu ul li a').length).trigger('click', [true]);
    		current++; 
  	}

  	// Duration for autoscroll
  	var duration = 3;
  	var itvl = setInterval(function () {
  		  autoScroll();
	}, duration*1000);

});