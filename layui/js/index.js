$('._button').click(function () {
    var _this = $(this);
    if (_this.attr('alt') === '关') {
        tyhide(_this);
        _this.attr('alt', '开')
    } else if (_this.attr('alt') === '开') {
        tyshow(_this);
        _this.attr('alt', '关')
    }
})


function tyhide(_this) {
    _this.parent().css({
        'padding-left': 0,
    })
    $('.container').css({
        'padding-left': 0,
    })
    $('.sidebar').css({
        'left': '-220px'
    })
    $('.nav').css({
        'left': '-220px'
    })
    
}
$('.count-top').css({
    'padding-left': '0px',
 })

function tyshow(_this) {
    $('.container').css({
        'padding-left': '220px',
    })
    $('.sidebar').css({
        'left': '0px'
    })
    $('.nav').css({
        'left': '0px'
    })
    $('.count-top').css({
        'float': 'left',
        'left': '-220px',
    })
    
}




$('a').click(function () {
    $(this).next('div').toggle();

    var divs = $(this).siblings("a").next("div");
    divs.hide();
})

$('b').click(function () {
    $(this).next('div').toggle();

    var divs = $(this).siblings("b").next("div");
    divs.hide();
})

$('.sidebar a').on({
    mouseenter : function () { 
        var Top = $(this).position().top;
        $('#admin').css({
            top : Top,
            height : '55px',
            'overflow':'hidden',
            'display' : 'block',
        })
    },
})



$('.sidebar').on({
    mouseout : function(){
        $('#admin').css({
            height : '0px',
            'display' : 'none',
            'overflow':'hidden'
        })
    }
},3000)



$(function () {	
    $('.nav .left li').hover(function () {
        $('span', this).stop().css('height', '2px');
        $('span', this).animate({
            left: '0',
            width: '100%',
            right: '0',
        },100);
    }, function () {
        $('span', this).stop().animate({
            left: '50%',
            width: '0'
        }, 100);
    });
});

$(function () {	
    $('.nav .right li').hover(function () {
        $('span', this).stop().css('height', '2px');
        $('span', this).animate({
            left: '0',
            width: '100%',
            right: '0'
        },100);
    }, function () {
        $('span', this).stop().animate({
            left: '50%',
            width: '0'
        }, 100);
    });
});