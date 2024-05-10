// magnetic-curberto.js

(function ($) {
    function Magnetic(el, options) {
        this.el = $(el);
        this.options = $.extend(true, {
            y: 0.2,
            x: 0.2,
            s: 0.2,
            rs: 0.7
        }, this.el.data('magnetic') || options);

        this.y = 0;
        this.x = 0;
        this.width = 0;
        this.height = 0;

        if (this.el.data('magnetic-init')) return;
        this.el.data('magnetic-init', true);

        this.bind();
    }

    Magnetic.prototype.bind = function () {
        var self = this;

        this.el.on('mouseenter', function () {
            self.y = self.el.offset().top - window.pageYOffset;
            self.x = self.el.offset().left - window.pageXOffset;
            self.width = self.el.outerWidth();
            self.height = self.el.outerHeight();
        });

        this.el.on('mousemove', function (e) {
            var y = (e.clientY - self.y - self.height / 2) * self.options.y;
            var x = (e.clientX - self.x - self.width / 2) * self.options.x;

            self.move(x, y, self.options.s);
        });

        this.el.on('mouseleave', function (e) {
            self.move(0, 0, self.options.rs);
        });
    };

    Magnetic.prototype.move = function (x, y, speed) {
        gsap.to(this.el, {
            y: y,
            x: x,
            force3D: true,
            overwrite: true,
            duration: speed
        });
    };

    window.Magnetic = Magnetic;

})(jQuery);


//
$(document).ready(function() {
  $('.make_payment h3').click(function() {
    $('.cell-md-6').slideDown();
  })
  $('.make_payment h3').hover(function() {
    $('.make_payment').css('background', 'rgb(216, 152, 216)').css('color', 'black');
  }, function() {
    $('.make_payment').css('background', 'black').css('color', '#fff');
  })

  $('.key').hover(function() {
    $(this).css('width', '68px').css('height', '68px');
  }, function() {
    $(this).css('width', '48px').css('height', '48px');
  })

  $('.key').click(function() {
    let value = $(this).text();
    if (value === 'clear') {
        $('.calculator_input').val('')
        return;
    }
    let calValue = $('.calculator_input').val();
    if (value === 'delete') {
        let smtin = calValue.substring(0, calValue.length - 1);
        $('.calculator_input').val(smtin);
        return;
    }
    if (calValue.length === 0) {
        $('.calculator_input').val(`£ ${value}`);
        return;
    } else {
        $('.calculator_input').val(`${calValue}${value}`);
        return;
    }
  })
})
//
