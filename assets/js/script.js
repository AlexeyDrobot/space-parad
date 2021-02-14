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

	// Интро-слайдер полноэкранный
	$('.intro-slider__body').slick({
		centerMode: false,
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnHover: false,
		arrows: false,
		dots: true
	});

	// Слайдер Projects
	$('.projects-slider').slick({
		centerMode: false,
		slidesToShow: 3.5,
		// variableWidth: true,
		infinite: false,
		draggable: false,
		swipe: false,
		responsive: [
			{
				breakpoint: 1920,
				settings: {
					slidesToShow: 2.5,
				}
			},
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 1.5,
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 1.5,
					draggable: true,
					swipe: true,
				}
			}
		]
	});

	// Слайдер превью-новостей
	$('.news-slider__stage').slick({
		centerMode: false,
		slidesToShow: 4,
		infinite: true,
		draggable: true,
		swipe: true,
		responsive: [
			{
				breakpoint: 1920,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 1439,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

	// Слайдер с линейными dots
	$('.quotes-slider').slick({
		centerMode: false,
		slidesToShow: 1,
		infinite: true,
		draggable: true,
		swipe: true,
		arrows: false,
		dots: true,
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

	// Кнопка Наверх
	$('.to-top').on('click', function () {
		$("html, body").animate({
			scrollTop: 0
		});
		return false;
	});

	// Кнопка Play для видео
	$('.js_play-video').each(function () {
		var video = $(this).parents('.video').find('video');
		var playButton =  $(this);

		if (video.length > 0) {
			video.on('click', function () {
				if (!video[0].paused) {
					video.trigger('pause');
					video[0].controls = false;
					playButton.fadeIn(300);
				} else {
					video.trigger('play');
					video[0].controls = true;
				}
			});

			playButton.on('click', function () {
				if (video[0].paused) {
					video.trigger('play');
					video[0].controls = true;
					playButton.fadeOut(300);
				}
			});
		}
	})

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
