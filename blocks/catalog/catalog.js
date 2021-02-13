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

	$('.catalog__popular-slider').slick({
		//centerMode: true,
		//centerPadding: '0',
		dots: false,
		arrows: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
	});
	$('.catalog__article-slider').slick({
		dots: true,
		infinite: true,
		fade: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true
	});
});
