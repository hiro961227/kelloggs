$(function(){ 
    //start    
        $('.menu_1').load('inc_head_foot.html #header',header);
       
        function header(){
            var btn = $('.inner_circle');
            var leftMenu = $('.menu_1_2');
            var rigthMenu = $('.main_main');
            var allMemu = $('.menu_1_2, .main_main');
            var menuLine = $('.classic_main, .choco_main, .granola_main, .protein_main, .grain_main, .engbar_main');

            
            btn.hover(function(){
                btn.stop().css('transform','scale(1.3)');
            },function(){
                btn.stop().css('transform','scale(1)');
                if(leftMenu.hasClass('active')){
                    btn.stop().css('transform','scale(1.3)');
                }
            });
            btn.click(function(){                
                name = $(this).find('#munubtn').text();
                name2 = $(this).find('#closebtn').text();
                
                if(leftMenu.hasClass('active')){
                    btn.css('transform','scale(1)');
                    btn.html('MENU').css('justify-content','center');
                }else{
                    btn.css('transform','scale(1.3)');
                    btn.html('CLOSE').css('justify-content','center');
                }                

                allMemu.toggleClass('active');
                $('.main_content').toggleClass('acitve');
            });                

            function menuHover(){
                menuLine.hover(function(idx){
                    var idx = $(this).index();
                    $('.item_img').eq(idx).addClass('on');
                    $('.item_name').eq(idx).addClass('on');
                    menuLine.eq(idx).addClass('on');
                },function(idx){
                    var idx = $(this).index();
                    $('.item_img').eq(idx).removeClass('on');
                    $('.item_name').eq(idx).removeClass('on');
                    menuLine.eq(idx).removeClass('on');
                })
            }
            menuHover();            
            menuLine.click(function(){
                if(leftMenu.hasClass('active')){
                    btn.css('transform','scale(1)');
                    btn.html('MENU').css('justify-content','center');
                    allMemu.removeClass('active');
                }else{
                    btn.css('transform','scale(1.3)');
                    btn.html('CLOSE').css('justify-content','center');
                }
            })
        };
//end  
});
    