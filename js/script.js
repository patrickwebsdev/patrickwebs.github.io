$(document).ready(function() {
	$(".async").each(function(index, element){
		var img = $(element).attr("data-src");
		$(element).attr("src", img);
	});
	new PatrickWebs().init();
	$(".scroll").click(function() {
		var targetDiv = $(this).attr('href');
		$('html, body').animate({
			scrollTop: ($(targetDiv).offset().top-100)
		}, 500);
	});
	$('.skills .item').flickity({
		cellAlign: 'left',
		contain: true,
		pageDots: false,
	});
});