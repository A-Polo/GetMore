$(document).ready(function() {
    $('.text .text-block').eq(0).addClass('active').fadeIn(1000);
    setInterval('blockAnimate();', 10000);
    $('.imgShow .show-block').eq(0).addClass('active').fadeIn(1000);

    $('#responsive').lightSlider({
        item:4,
        loop:true,
        auto:true,
        slideMove:2,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:6
                }
            },
            {
                breakpoint:480,
                settings: {
                    item:2,
                    slideMove:1
                }
            }
        ]
    });
    $('body').append('<div id="blackout"></div>');
    var boxWidth = 800;
    function centerBox() {
        var winWidth = $(window).width();
        var winHeight = $(document).height();
        var scrollPos = $(window).scrollTop();
        var disWidth = (winWidth - boxWidth) / 2;
        var disHeight = scrollPos + 150;
        $('.popup-box').css({'width' : boxWidth+'px', 'left' : disWidth+'px', 'top' : disHeight+'px'});
        $('#blackout').css({'width' : winWidth+'px', 'height' : winHeight+'px'});
        return false;
    }
    $(window).resize(centerBox);
    $(window).scroll(centerBox);
    centerBox();
    $('.btn-shout').click(function(e) {
        e.preventDefault();
        e.stopPropagation();

        var name = $(this).attr('class');
        var id = name[name.length - 1];
        var scrollPos = $(window).scrollTop();

        $('#popup-box').show();
        $('#blackout').show();
        $('html,body').css('overflow', 'hidden');
        $('html').scrollTop(scrollPos);
    });
    $('.popup-box').click(function(e) {
        e.stopPropagation();
    });
    $('html').click(function() {
        var scrollPos = $(window).scrollTop();
        $('#popup-box').hide();
        $('#blackout').hide();
        $("html,body").css("overflow","auto");
        $('html').scrollTop(scrollPos);
    });
});
function blockAnimate() {
    var length = $('.text .text-block').length - 1;
    var animate = $('.imgShow .show-block').length - 1;

    $('.text-block').each(function(index) {
        if($(this).hasClass('active') && index != length) {
            $(this).removeClass("active").fadeOut(1000).next('.text-block').addClass("active").delay(1000).fadeIn(1000);
            return false;
        } else if (index == length) {
            $(this).removeClass('active').fadeOut(1000);
            $('.text .text-block').eq(0).addClass("active").delay(1000).fadeIn(1000);
            return false;
        }
    });
    $('.show-block').each(function(index) {
        if($(this).hasClass('active') && index != animate) {
            $(this).removeClass('active').fadeOut(1000).next('.show-block').addClass('active').delay(1000).fadeIn(1000);
            return false;
        } else if (index == animate) {
            $(this).removeClass('active').fadeOut(1000);
            $('.imgShow .show-block').eq(0).addClass('active').delay(1000).fadeIn(1000);
            return false;
        }
    });
}


