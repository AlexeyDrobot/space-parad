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
		dots: false,
		arrows: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					centerMode: true,
					centerPadding: '100px',
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 500,
				settings: {
					centerMode: true,
					centerPadding: '60px',
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 375,
				settings: {
					centerMode: true,
					centerPadding: '0px',
					slidesToShow: 1,
				}
			}
	]
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
