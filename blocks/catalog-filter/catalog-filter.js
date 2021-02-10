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

	function filterPosition() {
		// если он является формой ниже
		if (windowTop >= itemTop) {
			// то присваиваем класс .fixed
			$('.catalog-filter').addClass('fixed');
			$('.catalog-filter').css({
				'top': filterTop,
				'left': filterLeft,
				'width': filterWidth
			});
		} else {
			// если нет – удаляем класс
			$('.catalog-filter').removeClass('fixed');
			$('.catalog-filter').attr('style', '');
		}
	}

	let filterHeight = $('.catalog-filter').height(),
		filterTop = $('.layout__row.header').outerHeight(),
		filterLeft = $('.catalog__filter-wrap').offset().left,
		filterWidth = $('.catalog__filter-wrap').width(),
		windowTop = 0,
		itemTop = $('.catalog-filter').offset().top - filterTop;

	$('.catalog__filter-wrap').height(filterHeight);

	$(window).scroll(function (event) {
		windowTop = $(this).scrollTop();

		filterPosition();
	});

	$(window).resize(function () {
			filterHeight = $('.catalog-filter').height(),
			filterTop = $('.layout__row.header').outerHeight(),
			filterLeft = $('.catalog__filter-wrap').offset().left,
			filterWidth = $('.catalog__filter-wrap').width();

		filterPosition();
	});

});
