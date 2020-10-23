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
                background:"#cbcac9",
                transition:".4s"
            });
        }if($(window).scrollTop() >= secArr[1]-400){
            $('main').css({background:"#fa5d57"});
        }if($(window).scrollTop() >= secArr[2]-400){
            $('main').css({background:"#fee101"});
        }if($(window).scrollTop() >= secArr[3]-400){
            $('main').css({background:"#deceba"});
        }
    }); 
 });

//end  
});
    