 $(function(){
            $('#container').css('height',document.body.clientWidth*0.9+'px'); //网页可见区域宽
            $(window).resize(function(){
                $('#container').css('height',document.body.clientWidth*0.9+'px');
            })
            var c;
			var t;
			var prev;
            $('#play').click(function(){
                if($(this).text()=="开始游戏"){
                    $(this).text("结束游戏");
                    var i=30;
					var x=0;
                    var $imgs=$('img');
                    c=setInterval(function(){
                        $('#time').text(--i); //--i是先运算在赋值  i--是先赋值在运算
                        if(i==0){
                            clearInterval(c);
                            clearInterval(t);
                            $('#play').text("开始游戏");
                            prev.src='img/hole.png';
                            alert("游戏结束，本次游戏共得到 "+$('#fraction').text()+' 分，加油^_^');
                            $('#time').text(30);
                        }
                    },1000)
                    t=setInterval(function(){
                        if(x==1)prev.src='img/hole.png';
                        x=1;
                        prev=$imgs[Math.floor(Math.random()*9)]; //会对由上面的语句产生的数值进行向下取整
                        prev.src='img/mole.png';
                    },1000)
                }else if($(this).text()=="结束游戏"){
                    alert("很遗憾您已选择结束游戏，本次游戏共得到 "+$('#fraction').text()+' 分，再接再厉哦^_^');
                    $(this).text("开始游戏");
                    clearInterval(c);
                    clearInterval(t);
                    $('#time').text('30');
                    $('#fraction').text('0');
                    prev.src='img/hole.png';
                }
            })
            var fenshu=parseInt($('#fraction').text()); //取整
            $('img').on('click',function(e){
                if($(this).attr('src').indexOf('img/mole.png')==0 && $('#play').text()!="开始游戏"){ //indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
                    fenshu+=1;
                     $('#fraction').text(fenshu);
                }
            })
        })