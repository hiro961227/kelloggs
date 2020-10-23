$(function(){ 
//start   
    var divAll = $('.page1, .page2, .page3');
    var secArr = [];
        
    divAll.each(function(idx){
        secArr.push(divAll.eq(idx).offset().top); 
    });

    $(window).scroll(function(){
    $.each(secArr,function(idx){
        if($(window).scrollTop() >= secArr[0]){
            $('main').css({
                background:"#232f73",
                transition:".3s"
            });
        }if($(window).scrollTop() >= secArr[1]-200){
            $('main').css({background:"#333e7c"});
        }if($(window).scrollTop() >= secArr[2]+100){
            $('main').css({background:"#455087"});
        }if($(window).scrollTop() >= secArr[2]*3){
            $('main').css({background:"#59649a"});
        }
    }); 
    });


    //인덱스가안잡혀용..
    var liAll = $('.page3 ul li p');
    var popAll = $('.page3 .popup_a');
    
    console.log(popAll);

    liAll.hover(function(){
        // idx = $(this).index();
        
        $(this).next().stop().fadeIn(250);
    },function(){
        // idx = $(this).index();
        $(this).next().stop().fadeOut(250);
    });


    //end  
});
    