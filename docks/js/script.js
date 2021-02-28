"use strict";

document.addEventListener('DOMContentLoaded', function () {
  $('.js-filter-item').each(function (index, value) {
    var attrValue = $(this).attr('aria-label');
    $(this).niceSelect().next().attr('aria-label', attrValue);
  });
  $('.catalog-filter__btn-reset').on('click', function () {
    $('select.js-filter-item').each(function () {
      $(this).find('option:first').prop('selected', true);
      $('.js-filter-item').each(function (index, value) {
        var attrValue = $(this).attr('aria-label');
        $(this).niceSelect('update').next().attr('aria-label', attrValue);
      });
    });
  });

  if ($('.catalog-filter').length != 0) {
    var filterPosition = function filterPosition() {
      var filterItem = $('.catalog-filter'),
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
        $('.js-filter-item').removeClass('open');

        if (windowTop >= parentTop + 300) {
          // то присваиваем класс .fixed
          filterItem.removeClass('hidden');
          filterState = true;
        } else if (windowTop <= parentTop + filterHeight) {
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
    };

    $('.catalog__filter-wrap').height($('.catalog-filter').height());
    var filterState = false;
    $(window).scroll(function (event) {
      filterPosition();
    });
    $(window).resize(function () {
      $('.catalog__filter-wrap').height($('.catalog-filter').height());
      filterState = false;
      filterPosition();
      $('body').removeClass('no-scroll');
      $('.catalog-filter__close').click();
    });
  }

  var filterCondition;
  $('.js-mob-filter').on('click', function () {
    if (!$('.catalog-filter').hasClass('mob-active')) {
      if ($('.catalog-filter').hasClass('fixed')) {
        $(this).parents('.catalog-filter').not('.mob-active').addClass('mob-active');
        filterCondition = true;
      } else {
        filterCondition = false;
        $(this).parents('.catalog-filter').not('.mob-active').addClass('fixed mob-active catalog-filter--fast');
      }

      $('body').not('.no-scroll').addClass('no-scroll');
    }
  });
  $('.catalog-filter__close').on('click', function () {
    if (filterCondition) {
      $('.catalog-filter').removeClass('mob-active');
    } else {
      $('.catalog-filter').removeClass('mob-active fixed catalog-filter--fast');
    }

    $('body').removeClass('no-scroll');
  });
});
document.addEventListener('DOMContentLoaded', function () {
  $('.catalog__product-slider').slick({
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  });
  $('.catalog__popular-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 768,
      settings: {
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 1
      }
    }, {
      breakpoint: 500,
      settings: {
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1
      }
    }, {
      breakpoint: 375,
      settings: {
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }]
  });
  $('.catalog__article-slider').slick({
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  });
}); // Скрипт добавления файлов в форму

(function ($, window, document, undefined) {
  $('.form__fileinput').each(function () {
    var $input = $(this),
        $label = $input.next('label'),
        labelVal = $label.html();
    $input.on('change', function (e) {
      var fileName = '';
      $(this).siblings('.form__fileinput-close').addClass('form__fileinput-close--active');
      if (this.files && this.files.length > 1) fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);else if (e.target.value.length > 30) {
        fileName = e.target.value.split('\\').pop().slice(0, 30) + '...';
      } else {
        fileName = e.target.value.split('\\').pop();
      }
      if (fileName) $label.find('span').html(fileName);else $label.html(labelVal);
    }); // Firefox bug fix

    $input.on('focus', function () {
      $input.addClass('js_has-focus');
    }).on('blur', function () {
      $input.removeClass('js_has-focus');
    });
  });
  $('.form__fileinput-close').click(function () {
    $(this).siblings('.form__fileinput').val('');
    $(this).prev().find('span').html('Прикрепить файл');
    $(this).removeClass('form__fileinput-close--active');
  });
  $('.form__group input').focus(function () {
    $(this).siblings('label').css('transform', 'translateY(calc(-50% - 23px))');
  });
  $('.form__group input').focusout(function () {
    if (!$(this).val()) {
      $(this).siblings('label').attr('style', '');
    }
  });
})(jQuery, window, document);

document.addEventListener('DOMContentLoaded', function () {
  $('.modal__success-btn').click(function () {
    $.fancybox.close();
  });
});
document.addEventListener('DOMContentLoaded', function () {
  $('.product-filter__item-name').each(function () {
    $(this).click(function () {
      var parent = $(this).parent(),
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
              responsive: [{
                breakpoint: 1440,
                settings: {
                  slidesToShow: 5
                }
              }, {
                breakpoint: 1300,
                settings: {
                  slidesToShow: 4
                }
              }, {
                breakpoint: 992,
                settings: {
                  slidesToShow: 14
                }
              }, {
                breakpoint: 900,
                settings: {
                  slidesToShow: 12
                }
              }, {
                breakpoint: 850,
                settings: {
                  slidesToShow: 10
                }
              }, {
                breakpoint: 775,
                settings: {
                  slidesToShow: 9
                }
              }, {
                breakpoint: 700,
                settings: {
                  slidesToShow: 7
                }
              }, {
                breakpoint: 625,
                settings: {
                  slidesToShow: 6
                }
              }, {
                breakpoint: 550,
                settings: {
                  slidesToShow: 5
                }
              }, {
                breakpoint: 420,
                settings: {
                  slidesToShow: 4
                }
              }]
            });
          }
        });
      } else {
        dropDown.slideUp('fast');
      }
    });
  });
});
document.addEventListener('DOMContentLoaded', function () {
  $('.product-slider').each(function () {
    $(this).slick({
      centerMode: false,
      slidesToShow: 4,
      arrows: true,
      dots: false,
      responsive: [{
        breakpoint: 2100,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 1600,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 1200,
        settings: {
          centerMode: true,
          centerPadding: '190px',
          slidesToShow: 1,
          draggable: true,
          swipe: true
        }
      }, {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          draggable: true,
          swipe: true
        }
      }, {
        breakpoint: 769,
        settings: {
          slidesToShow: 4,
          draggable: true,
          swipe: true
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          draggable: true,
          swipe: true
        }
      }, {
        breakpoint: 450,
        settings: {
          centerMode: true,
          centerPadding: '100px',
          slidesToShow: 1,
          draggable: true,
          swipe: true
        }
      }, {
        breakpoint: 375,
        settings: {
          centerMode: true,
          centerPadding: '70px',
          slidesToShow: 1,
          draggable: true,
          swipe: true
        }
      }]
    });
  });
});
document.addEventListener('DOMContentLoaded', function () {});
"use strict";

$(document).ready(function () {
  // Иницализация Fancybox без дополнительных кнопок
  $('[data-fancybox]').fancybox({
    buttons: ["zoom", "close"],
    closeExisting: true
  }); // Дополнительный класс для корневого элемента, если браузер - IE или Edge

  if (/MSIE 9/i.test(navigator.userAgent) || /MSIE 10/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent)) {
    document.documentElement.className += ' old-browser';
  } else if (/Edge\/\d./i.test(navigator.userAgent)) {
    document.documentElement.className += ' edge-browser';
  } // Инициализация lazy load для изображений


  $(document).ready(function () {
    $('.lazy').lazy({
      effect: "fadeIn",
      effectTime: 300,
      threshold: 500
    });
  }); // Интро-слайдер полноэкранный

  $('.intro-slider__body').slick({
    centerMode: false,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    arrows: false,
    dots: true
  }); // Слайдер Projects

  $('.projects-slider').slick({
    centerMode: false,
    slidesToShow: 3.5,
    // variableWidth: true,
    infinite: false,
    draggable: false,
    swipe: false,
    responsive: [{
      breakpoint: 1920,
      settings: {
        slidesToShow: 2.5
      }
    }, {
      breakpoint: 1199,
      settings: {
        slidesToShow: 1.5
      }
    }, {
      breakpoint: 991,
      settings: {
        slidesToShow: 1.5,
        draggable: true,
        swipe: true
      }
    }]
  }); // Слайдер превью-новостей

  $('.news-slider__stage').slick({
    centerMode: false,
    slidesToShow: 4,
    infinite: true,
    draggable: true,
    swipe: true,
    responsive: [{
      breakpoint: 1920,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 1439,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 769,
      settings: {
        slidesToShow: 1
      }
    }]
  }); // Слайдер с линейными dots

  $('.quotes-slider').slick({
    centerMode: false,
    slidesToShow: 1,
    infinite: true,
    draggable: true,
    swipe: true,
    arrows: false,
    dots: true
  }); // Кнопка переключения языка

  $('.js_lang-toggler').on('click', function () {
    $(this).find('.lang-toggler__variants').slideToggle(300);
  }); // Кнопка открытия меню

  $('.js_menu-trigger').on('click', function () {
    var menu = $('.menu');
    menu.addClass('menu--active');
    $('.js_menu-close').on('click', function () {
      menu.removeClass('menu--active');
    });
  }); // Кнопка Наверх

  $('.to-top').on('click', function () {
    $("html, body").animate({
      scrollTop: 0
    });
    return false;
  }); // Кнопка Play для видео

  $('.js_play-video').each(function () {
    var video = $(this).parents('.video').find('video');
    var playButton = $(this);

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
  }); // Скрипт плавной прокрутки до якорей

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