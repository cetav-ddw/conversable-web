jQuery(document).ready(function ($) {

  (function (window) {
    //Variables
    var menu = $('#stickyMenu');
    var mScroll = '';
    
    var startScroll = function() {
      $(window).scroll(function () {
        var wScroll = $(this).scrollTop();
        if(wScroll >= mScroll) {
          menu.addClass('sticky-menu-fixed');
        } else {    
          menu.removeClass('sticky-menu-fixed');
        }
      } );
    }
    
    //Functions
    var enquireModule = function () {
      // Register when match a viewport of 650px
      enquire.register('screen and (min-width:650px)', {
        match: function () {
          if(menu.length){
            mScroll =  menu.offset().top;
            menu.removeClass('hidden');
            startScroll();
          }
        },
        unmatch: function () {
          if(menu.length){
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