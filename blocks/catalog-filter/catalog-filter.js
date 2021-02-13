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


	let  filterItem = $('.catalog-filter'),
		filterHeight = filterItem.height(),
		filterTop = $('.layout__row.header').outerHeight(),
		filterLeft = $('.catalog__filter-wrap').offset().left,
		filterWidth = $('.catalog__filter-wrap').width(),
		windowTop = 0,
		itemTop = filterItem.offset().top - filterTop + filterHeight,
		catalogBottom = $('.catalog__products').offset().top + $('.catalog__products').height(),
		filterState = false;
	console.log(catalogBottom)

	$('.catalog__filter-wrap').height(filterHeight);

	function filterPosition() {

		if (windowTop >= itemTop && !filterState && windowTop < catalogBottom - filterHeight ) {
			// то присваиваем класс .fixed
			filterItem.addClass('fixed');
			filterItem.css({
				'top': filterTop,
				'left': filterLeft,
				'width': filterWidth
			});
			filterState = true;

			console.log('if true' + filterState)
		} else if (windowTop >= itemTop && filterState && windowTop > catalogBottom - filterHeight) {
			// если нет – удаляем класс
			filterItem.removeClass('fixed');
			filterItem.attr('style', '');
			filterState = false;
			console.log('else')
		} else if( windowTop < itemTop) {
			// если нет – удаляем класс
			filterItem.removeClass('fixed');
			filterItem.attr('style', '');
			filterState = false;
		}
	}

	$(window).scroll(function (event) {
		windowTop = $(this).scrollTop();

		filterPosition();
	});

	$(window).resize(function () {
		filterPosition();
	});

});
