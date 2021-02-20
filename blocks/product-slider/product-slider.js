document.addEventListener('DOMContentLoaded', function () {
	$('.product-slider').each(function (){
		$(this).slick({
			centerMode: false,
			slidesToShow: 3,
			arrows: true,
			dots: false
		});
	})
});
