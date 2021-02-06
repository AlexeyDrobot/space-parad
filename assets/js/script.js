"use strict";

$(document).ready(function () {

	// Иницализация Fancybox без дополнительных кнопок
	$('[data-fancybox]').fancybox({
		buttons: ["close"],
		closeExisting: true
	});

	// Дополнительный класс для корневого элемента, если браузер - IE или Edge
	if (/MSIE 9/i.test(navigator.userAgent) || /MSIE 10/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent)) {
		document.documentElement.className += ' old-browser';
	} else if (/Edge\/\d./i.test(navigator.userAgent)) {
		document.documentElement.className += ' edge-browser';
	}

	// Инициализация lazy load для изображений
	$(document).ready(function () {
		$('.lazy').lazy({
			effect: "fadeIn",
			effectTime: 300,
			threshold: 500
		});
	});

	// Слайдер на главной странице
	$('.intro-slider__body').slick({
		centerMode: false,
		slidesToShow: 1,
		arrows: false,
		dots: true
	});

	// Кнопка переключения языка
	$('.js_lang-toggler').on('click', function () {
		$(this).find('.lang-toggler__variants').slideToggle(300)
	});

	// Кнопка открытия меню
	$('.js_menu-trigger').on('click', function () {
		var menu = $('.menu');
		menu.addClass('menu--active');

		$('.js_menu-close').on('click', function () {
			menu.removeClass('menu--active');
		})
	});

	// Скрипт плавной прокрутки до якорей
	/*$(function () {
		$("a[href^='#']").click(function () {
			var _href = $(this).attr("href");

			$("html, body").animate({
				scrollTop: $(_href).offset().top - 70 + "px"
			});
			return false;
		});
	});*/
});
