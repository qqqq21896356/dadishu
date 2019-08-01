$('.nav>li').mouseover(function(){
    $(this).children('ul').show();
}).mouseleave(function(){
    $(this).children('ul').hide();
})



function scrollBehavior (arr){
    $(window).scroll(function () {
        var wst = $(window).scrollTop();  
        for (var i = 0; i < arr.length; i++) {  
            if ($("#" + arr[i].id).offset().top <= wst +10 ){ 
                $('.menuSub a').removeClass('active')
                $("." + arr[i].id).addClass("active");
            }
        }
    });
}


$('.content h3').click(function () {
    $('html').animate({scrollTop: $(this).offset().top}, 500);
});


$('.menuSub a').click(function(){
    $('.menuSub a').removeClass('active')
    setTimeout(function(){
        $(this).addClass('active');
    },500) 
    $('html').animate({scrollTop: $("#" + this.name).offset().top}, 500);
})








    $('.container').css('display','block')
    $('.container-fluid').css({
        'display':'none'
    })
    $('.minibar').css({
        'display':'block'
    })
    $('.LeftNav').css({
        'background':'rgb(249,249,249)',
        'top':'0'
    })
    $('.specialSponsor>h2').css({
        'font-size':'1.5em',
    })
    $('.menuRoot a').css({
        'font-size':'14px'
    })
    $('.menuRoot h3').css({
        'font-size':'1.17em'
    })


    $('.main').css({
        'position':'static',
        'padding': '2em 1.4em 0'
    })
    

    $('.content').css({
        'padding': '0',
        'margin-left': '0',
        'padding':'2.2em 0'
    })
    $('.content h1').css({
        'font-size':'2em'
    })
    $('.content h2').css({
        'font-size':'1.5em'
    })
    $('.content h3').css({
        'font-size':'1.17em'
    })
    $('.content p').css({
        'font-size':'14px'
    })
    $('.content h3>a::before').css({
        'left':'-20px'
    })
    $('.guild-link span a').css({
        'font-size':'14px'
    })
    $('footer').css({
        'font-size':'14px',
        'text-align':'center'
    })

    $('.TXnext').css({
        'position': 'relative',
        'float': 'right',
        'background-color': '#fff',
        'right': 0,
        'bottom': 0,
        'padding': '0 0 20px 30px'
    })


    $('.MiniLeftNavBar').css('display','none')
    $('.LeftNav').css({
        'background':'#fff',
        'top':'0'
    })
    $('.LeftNav').css({
        'left':'0',
        'top':'61px',
        'box-shadow': 'none'
    })
    $('.specialSponsor>h2').css({
        'font-size':'25px',
    })
    $('.menuRoot a').css({
        'font-size':'16px'
    })
    $('.menuRoot h3').css({
        'font-size':'20px'
    })

    $('.container-fluid').css({
        'display':'block'
    })
    $('.minibar').css({
        'display':'none'
    })
    $('.LeftNav').css('display','block')
    $('.main').css({
        'position':'static',
        'padding': '0 60px 30px'
    })
    $('.content').css({
        'padding': '35px 0 0 50px',
        'margin-left': '290px'
    })

    $('.content h1').css({
        'font-size':'2.2em'
    })
    $('.content h2').css({
        'font-size':'25px'
    })
    $('.content h3').css({
        'font-size':'20px'
    })
    $('.content p').css({
        'font-size':'16px'
    })
    $('.guild-link span a').css({
        'font-size':'16px'
    })
    $('footer').css({
        'font-size':'16px',
        'text-align':'left'
    })
    $('.TXnext').css({
        'position': 'fixed',
        'background-color': '#fff',
        'right': '10px',
        'bottom': '10px',
        'padding': '0'
    })



    $('.container-fluid').css({
        'display':'block'
    })

    $('.minibar').css({
        'display':'none'
    })
    $('.LeftNav').css('display','block')
    $('.main').css({
        'position':'static',
        'padding': '0 60px 30px'
    })
    $('.main').css({
        'position':'relative'
    })


