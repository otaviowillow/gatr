$(document).on('click', '.page-link', function(event){
    event.preventDefault();

	var link = $.attr(this, 'href')
	var noSlashLink = link.replace(/\//g, "")

    $('html, body').animate({
        scrollTop: $( noSlashLink ).offset().top
    }, 500);
});

$(window).scroll(function(e) {
	var currentTop = $(this).scrollTop();
	var mainHeight = $('#main').height()
		
	if(currentTop > mainHeight - 1) {
		$('.main-header').addClass('fixed')
	} else {
		$('.main-header').removeClass('fixed')
	}
});