document.addEventListener('DOMContentLoaded', function () {
	$('.product-slider').each(function (){
		$(this).slick({
			centerMode: false,
			slidesToShow: 4,
			arrows: true,
			dots: false,
			responsive: [
				{
					breakpoint: 2100,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 1600,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 1200,
					settings: {
						centerMode: true,
						centerPadding: '190px',
						slidesToShow: 1,
						draggable: true,
						swipe: true,
					}
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 3,
						draggable: true,
						swipe: true,
					}
				},
				{
					breakpoint: 769,
					settings: {
						slidesToShow: 4,
						draggable: true,
						swipe: true,
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 3,
						draggable: true,
						swipe: true,
					}
				},
				{
					breakpoint: 450,
					settings: {
						centerMode: true,
						centerPadding: '100px',
						slidesToShow: 1,
						draggable: true,
						swipe: true,
					}
				},
				{
					breakpoint: 375,
					settings: {
						centerMode: true,
						centerPadding: '70px',
						slidesToShow: 1,
						draggable: true,
						swipe: true,
					}
				}
			]
		});
	})
});
