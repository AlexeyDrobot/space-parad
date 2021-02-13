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

	if ($('.catalog-filter').length != 0) {
		$('.catalog__filter-wrap').height($('.catalog-filter').height());

		function filterPosition() {

			let filterItem = $('.catalog-filter'),
				filterHeight = filterItem.height(),
				filterTop = $('.layout__row.header').outerHeight(),
				filterLeft = $('.catalog__filter-wrap').offset().left,
				filterWidth = $('.catalog__filter-wrap').width(),
				windowTop = $(window).scrollTop(),
				parentTop = $('.catalog__filter-wrap').offset().top - filterTop,
				catalogBottom = $('.catalog__products').offset().top + $('.catalog__products').height() - filterHeight;


			if (windowTop > parentTop && !filterState && windowTop < catalogBottom - filterHeight) {
				filterItem.addClass('hidden');
				filterItem.addClass('fixed');
				filterItem.css({
					'top': filterTop,
					'left': filterLeft,
					'width': filterWidth
				});

				$('.js-filter-item').removeClass('open')

				if (windowTop >= parentTop + 300) {
					// то присваиваем класс .fixed
					filterItem.removeClass('hidden');
					filterState = true;
				} else if(windowTop <= parentTop + filterHeight) {
					filterItem.removeClass('hidden');
					filterItem.removeClass('fixed');
					filterItem.attr('style', '');
				}

			} else if (windowTop >= parentTop && filterState && windowTop > catalogBottom - filterHeight) {
				filterItem.addClass('hidden');
				filterState = false;
			} else if (windowTop < parentTop && filterState) {
				// если нет – удаляем класс
				filterItem.removeClass('fixed');
				filterItem.attr('style', '');
				filterItem.removeClass('hidden');
				filterState = false;
			}
		}


		let filterState = false;

		$(window).scroll(function (event) {
			filterPosition();
		});

		$(window).resize(function () {
			filterState = false;
			filterPosition();
		});
	}

});
