;(function($, window, undefined) {
    'use strict';
  
    var pluginName = 'menu-scroll';
  
    function Plugin(element, options) {
      this.element = $(element);
      this.options = $.extend({}, $.fn[pluginName].defaults, this.element.data(), options);
      this.init();
    }
  
    Plugin.prototype = {
      init: function() {
        var $el = this.element;
        var $window = $(window);

        var $logo = $el.find(".logo-image.d-desktop");
        var originalImage = $logo.prop("src");
        var scrollImage = $el.data("image-scroll");

        $window.scroll(function() {
            var top = $(this).scrollTop();
            if($window.width() > 767) {
              if (top > 150) {
                $el.addClass("menu-white header-fixed");
                $logo.prop("src", scrollImage);
              } else {
                  $el.removeClass("menu-white header-fixed");
                  $logo.prop("src", originalImage);
              }
            }
            
        });

        var click = false;
        $('.login-box-component [data-sign-up]').on('click', function() {
          click = true;
          $('.modal.show').modal('hide');
          $('.login-popup').on('hidden.bs.modal', function (e) {
            if(click) {
              $('.sign-up-popup').modal('show');
            }
            click = false;
          });
        });

        $('.signup-box-component [data-login]').on('click', function() {
          click = true;
          $('.modal.show').modal('hide');
          $('.sign-up-popup').on('hidden.bs.modal', function (e) {
            if(click) {
              $('.login-popup').modal('show')
            }
            click = false;
          });
        });

        $('.login-box-component [data-login-btn]').on('click', function() {
          click = true;
          $('.modal.show').modal('hide');
          $('.login-popup').on('hidden.bs.modal', function (e) {
            if(click) {
              $('.confirmation-popup').modal('show')
            }
            click = false;
          });
          
        });

        $('.confirmation-popup [data-login-from-code]').on('click', function() {
          click = true;
          $('.modal.show').modal('hide');
          $('.confirmation-popup').on('hidden.bs.modal', function (e) {
            if(click) {
              $('.login-popup').modal('show')
            }
            click = false;
          });
        });

        $('.confirmation-popup [data-login-enter-code]').on('click', function() {
          click = true;
          $('.modal.show').modal('hide');
          $('.confirmation-popup').on('hidden.bs.modal', function (e) {
            if(click) {
              $('[data-menu-login]').addClass('hidden');
              $('[data-menu-account]').removeClass('hidden');
            }
            click = false;
          });
        });

        $('.profile-popup button.logout').on('click', function() {
          $('.modal.show').modal('hide');
        });

       $('body').on('click', function(e) {
        if($(e.target).hasClass('image-sign-up')) {
          click = true;
          $('.modal.show').modal('hide');
          $('.dialog-popup').on('hidden.bs.modal', function (e) {
            if(click) {
              $('.sign-up-popup').modal('show');
            }
            click = false;
          });
        }
       });

      },
  
      destroy: function() {
        $.removeData(this.element[0], pluginName);
      }
    };
  
    $.fn[pluginName] = function(options, params) {
      return this.each(function() {
        var instance = $.data(this, pluginName);
        if (!instance) {
          $.data(this, pluginName, new Plugin(this, options));
        } else if (instance[options]) {
          instance[options](params);
        }
      });
    };
  
    $.fn[pluginName].defaults = {};
  
    $(function() {
      $('[data-' + pluginName + ']')[pluginName]({
      });
    });
  
  }(jQuery, window));
