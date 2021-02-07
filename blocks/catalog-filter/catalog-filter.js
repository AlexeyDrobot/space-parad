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
});
