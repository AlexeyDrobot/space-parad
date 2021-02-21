document.addEventListener('DOMContentLoaded', function () {
	$('.product-filter__item-name').each(function (){
		$(this).click( function (){
			let parent = $(this).parent(),
				  dropDown = $(this).next();

			parent.toggleClass('active');

			if (parent.hasClass('active')) {
				dropDown.slideDown('fast');
				dropDown.children('.selection-slider').each(function () {
					if (!$(this).hasClass('slick-initialized')) {
						$(this).slick({
							centerMode: false,
							slidesToShow: 6,
							infinite: true,
							draggable: true,
							swipe: true,
							responsive: [
								{
									breakpoint: 1440,
									settings: {
										slidesToShow: 5,
									}
								},
								{
									breakpoint: 1300,
									settings: {
										slidesToShow: 4,
									}
								},
								{
									breakpoint: 992,
									settings: {
										slidesToShow: 14,
									}
								},
								{
									breakpoint: 900,
									settings: {
										slidesToShow: 12,
									}
								},
								{
									breakpoint: 850,
									settings: {
										slidesToShow: 10,
									}
								},
								{
									breakpoint: 775,
									settings: {
										slidesToShow: 9,
									}
								},
								{
									breakpoint: 700,
									settings: {
										slidesToShow: 7,
									}
								},
								{
									breakpoint: 625,
									settings: {
										slidesToShow: 6,
									}
								},
								{
									breakpoint: 550,
									settings: {
										slidesToShow: 5,
									}
								},
								{
									breakpoint: 420,
									settings: {
										slidesToShow: 4,
									}
								}
							]
						});
					}
				})
			} else {
				dropDown.slideUp('fast');
			}

		})
	})

});
