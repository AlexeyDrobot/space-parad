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
									breakpoint: 769,
									settings: {
										slidesToShow: 1,
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
