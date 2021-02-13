document.addEventListener('DOMContentLoaded', function () {

	$('.catalog__product-slider').slick({
		dots: true,
		infinite: true,
		fade: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false
	});

	$('.js-xxx').slick({
		dots: true,
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
	});
});
