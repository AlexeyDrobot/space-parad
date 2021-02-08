document.addEventListener('DOMContentLoaded', function () {

	$('.js-filter-item').each(function (index, value) {
		let attrValue = $(this).attr('aria-label');
		$(this).niceSelect().next().attr('aria-label', attrValue);
	});

	$('.catalog-filter__btn-reset').on('click', function () {
		$('select.js-filter-item').each(function () {
			$(this).find('option:first').prop('selected', true);
			$('.js-filter-item').each(function (index, value) {
				let attrValue = $(this).attr('aria-label');
				$(this).niceSelect('update').next().attr('aria-label', attrValue);
			});
		})
	})


	let filterHeight = $('.catalog-filter').height(),
		filterTop = $('.layout__row.header').outerHeight(),
		filterLeft = $('.layout__row:not(.header) .layout__l-side').outerWidth(),
		filterRight = $('.layout__row:not(.header) .layout__r-side').outerWidth();
	console.log(filterLeft)

	$('.catalog__filter-wrap').height(filterHeight);

	let itemTop = $('.catalog-filter').offset().top - filterTop;
	$(window).scroll(function (event) {
		// определяем позицию y относительно окна браузера
		let windowTop = $(this).scrollTop();

		// если он является формой ниже
		if (windowTop >= itemTop) {
			// то присваиваем класс .fixed
			$('.catalog-filter').addClass('fixed');
			$('.catalog-filter').css({
				'top':filterTop,
				'left':filterLeft,
				'right':filterRight
			});
		} else {
			// если нет – удаляем класс
			$('.catalog-filter').removeClass('fixed');
			$('.catalog-filter').attr('style', '');
		}
	});
});
