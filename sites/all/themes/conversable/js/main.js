jQuery(document).ready(function ($) {
  (function (window) {
    var stickyMenu = $('#stickyMenu');
    var mScroll = '';
    var openMenu = $('<div id="openMenu"></div>');
    var header = $('header');
    var mainMenu = $('#block-system-main-menu');
    var closeMenu = $('<div id="closeMenu"></div>');

    var startScroll = function() {
      $(window).scroll(function () {
        var wScroll = $(this).scrollTop();
        
        if (wScroll >= mScroll) {
          stickyMenu.addClass('sticky-menu-fixed');
        } else {    
          stickyMenu.removeClass('sticky-menu-fixed');
        }
      });
      
      $('.sticky-icon').click(function(event) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          
          if (target.length) {
            event.preventDefault();
            
            $('html, body').animate({
              scrollTop: target.offset().top - 130
            }, 1000);
          }
        }
      });
    };

    header.append(openMenu);
    mainMenu.prepend(closeMenu);
    
    var enquireModule = function() {
      // Register when match a viewport of 650px
      enquire.register('screen and (min-width: 650px)', {
        match: function() {
          if (stickyMenu.length) {
            mScroll =  stickyMenu.offset().top;
            startScroll();
          }
        },
        unmatch: function() {
          if (stickyMenu.length) {
            stickyMenu.unbind('scroll');
          }
        }
      })
      .register('screen and (min-width:320px) and (max-width:550px)', {
        match: function() {
          $("#logo").attr("src", "/sites/all/themes/conversable/img/isologo.png");
        },
        unmatch: function() {
          $("#logo").attr("src", "/sites/default/files/logo-w-en.png");
        }
      }) 
      .register('screen and (min-width: 0) and (max-width:1039px)', {
        match: function() {
          var $homePage = $('.front');

          if ($homePage.length) {
            header.addClass('bg-pattern-turquoise');
          }
        
          mainMenu.addClass('hidden');
          openMenu.addClass('open-menu');

          openMenu.click(function () {
            openMenu.removeClass('open-menu');
            mainMenu.removeClass('hidden');
            closeMenu.addClass('close-menu');
          });

          closeMenu.click(function () {
            openMenu.addClass('open-menu');
            mainMenu.addClass('hidden');
          });
        },
        unmatch: function() {
          var $homePage = $('.front');

          if ($homePage.length) {
            header.removeClass('bg-pattern-turquoise');
          }

          mainMenu.removeClass('hidden');
          openMenu.removeClass('open-menu');
          closeMenu.removeClass('close-menu');
        }
      })
    };

    window.app = {
      enquire: enquireModule,
    };

  }(window));

  app.enquire();

});