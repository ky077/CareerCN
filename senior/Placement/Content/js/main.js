(function ($) {
  "use strict";

  //load header
  $('header').load('master-header.html', function () {
    logState();
  });

  //load header
  $('footer').load('master-footer.html');

  logState();

  //Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($('#spinner').length > 0) {
        $('#spinner').removeClass('show');
      }
    }, 100);
  };
  spinner();

  //Initiate the wowjs
  new WOW().init();

  //Sticky Navbar
  $(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    var footerOffset = $('footer').offset().top;
    var windowHeight = $(window).height();

    if (scrollTop > 300 && scrollTop + windowHeight < footerOffset) {
      $('header .sticky-top').css('top', '0px');

    } else {
      $('header .sticky-top').css('top', $('header').outerHeight() * -1);
    }
  });


  //Back to top button
  $(window).scroll(function () {
    var scrollTop = $(this).scrollTop();

    if (scrollTop > 300) {
      $('.back-to-top').fadeIn('slow').css('display', 'flex');
    } else {
      $('.back-to-top').fadeOut('slow');
    }

    if (scrollTop + $(window).height() >= $('footer').offset().top - 20) {
      $('.back-to-top').css({
        position: 'absolute',
        top: $('footer').offset().top - $('.back-to-top').outerHeight() - 20
      });
    } else {
      $('.back-to-top').css({
        position: 'fixed',
        top: '',
        bottom: '4rem'
      });
    }
  });

  $('.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 800, 'easeInOutExpo');
    return false;
  });

  //隱藏/顯示密碼
  /*$('.btn-showHidePD').click(function() {
        var $button = $(this);
        var $input = $button.siblings('input');

        // 切換 icon 和 input 類型
        $button.find('i').toggleClass('bi-eye-fill bi-eye-slash-fill');
        $input.attr('type', $input.attr('type') === 'password' ? 'text' : 'password');
    });*/

  //BS tooltips
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

  //修改BS accordion不用設定目標id
  document.querySelectorAll('.accordion-button').forEach(button => {
    var item = button.closest('.accordion-item');
    var collapseElement = item.querySelector('.accordion-collapse');

    //手動添加手風琴狀態
    button.addEventListener('click', function () {
      var bsCollapse = bootstrap.Collapse.getOrCreateInstance(collapseElement);
      bsCollapse.toggle();
    });

    //展開狀態
    collapseElement.addEventListener('show.bs.collapse', function () {
      button.classList.remove('collapsed');
      button.setAttribute('aria-expanded', 'true');
    });

    //收合狀態
    collapseElement.addEventListener('hide.bs.collapse', function () {
      button.classList.add('collapsed');
      button.setAttribute('aria-expanded', 'false');
    });
  });

})(jQuery);
