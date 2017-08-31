jQuery(document).ready(function ($) {

  (function (window) {
    //Variables
    var menu = $('#stickyMenu');
    var mScroll = '';

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
    
    //Functions
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
      });
    };

    window.app = {
      enquire: enquireModule,
      
    };

  }(window));

  app.enquire();

});