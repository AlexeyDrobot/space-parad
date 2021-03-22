"use strict";

document.addEventListener('DOMContentLoaded', function () { // Аналог $(document).ready(function(){
	AOS.init();

	document.querySelector('.useful-materials__dropdown-trigger').onclick = function () {
		onClickClose(this.parentElement);
		this.parentElement.classList.toggle('open');
	}

	function onClickClose(elem) { // вызвать в момент показа окна, где elem - окно
		function outsideClickListener(event) {
			if (!elem.contains(event.target) && isVisible(elem)) {  // проверяем, что клик не по элементу и элемент виден
				console.log(elem)
				elem.classList.remove('open') ;
				document.removeEventListener('click', outsideClickListener);
			}
		}
		document.addEventListener('click', outsideClickListener)
	}
	function isVisible(elem) { //открыто ли условное окно
		return !!elem && !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
	}

	document.querySelector('.nav__hamburger').onclick = function () {
		this.classList.toggle('open');
		document.querySelector('.header__mob-menu').classList.toggle('open');
		document.querySelector('.header').classList.toggle('header--transform-none');
		document.querySelector('body').classList.toggle('no-scroll');
	}


	document.querySelector('.authentication--animate').classList.remove('authentication--animate');
});
