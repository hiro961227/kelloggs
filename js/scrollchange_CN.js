$(function(){ 
//start   
 var divAll = $('.page1, .page2, .page3, .page4');
 var secArr = [];
        
 divAll.each(function(idx){
        secArr.push(divAll.eq(idx).offset().top); 
});

$(window).scroll(function(){
    $.each(secArr,function(idx){
        if($(window).scrollTop() >= secArr[0]-200){
            $('main').css({
                background:"#232f73",
                transition:".4s"
            });
        }if($(window).scrollTop() >= secArr[1]-400){
            $('main').css({background:"#505e20"});
        }if($(window).scrollTop() >= secArr[2]-400){
            $('main').css({background:"#a27f50"});
        }if($(window).scrollTop() >= secArr[3]-400){
            $('main').css({background:"#0091d6"});
        }
    }); 
 });

//end  
});
    