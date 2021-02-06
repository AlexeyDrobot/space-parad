document.addEventListener('DOMContentLoaded', function () {

	$('.js-filter-item').each(function (index, value) {
		$(this).niceSelect().next().addClass('xxx');
	});
});
