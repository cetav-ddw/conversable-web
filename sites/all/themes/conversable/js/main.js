jQuery(document).ready(function ($) {

  (function (window) {
    
    var menu = $('#stickyMenu');
    var mScroll = '';
    var openMenu = $('<div id="openMenu"></div>');
    var header = $('header');
    header.append(openMenu);
    var mainMenu = $('#block-system-main-menu');
    var closeMenu = $('<div id="closeMenu"></div>');
    mainMenu.prepend(closeMenu);
    
    var startScroll = function() {
      $(window).scroll(function () {
        var wScroll = $(this).scrollTop();
        
        if (wScroll >= mScroll) {
          menu.addClass('sticky-menu-fixed');
        } else {    
          menu.removeClass('sticky-menu-fixed');
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
    }
    
    var enquireModule = function () {
      // Register when match a viewport of 650px
      enquire.register('screen and (min-width: 650px)', {
        match: function() {
          if(menu.length) {
            mScroll =  menu.offset().top;
            menu.removeClass('hidden');
            startScroll();
          }
        },
        unmatch: function() {
          if(menu.length) {
            menu.addClass('hidden');
            menu.unbind('scroll');
          }
        },
      })
      .register('screen and (min-width:320px) and (max-width:550px)', {
        match: function() {
          $("#logo").attr("src", "/conversable/sites/all/themes/conversable/img/isologo.png");
        },
        unmatch: function() {
          $("#logo").attr("src", "/conversable/sites/default/files/logo-w-en.png");
        },
      }) 
      .register('screen and (min-width:320px) and (max-width:1039px)', {
        match: function() {
          header.addClass('bg-pattern-turquoise');
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
          header.removeClass('bg-pattern-turquoise');
          mainMenu.removeClass('hidden');
          openMenu.removeClass('open-menu');
          closeMenu.removeClass('close-menu');
        },
      })
    };

    window.app = {
      enquire: enquireModule,
    };

  }(window));

  app.enquire();

});