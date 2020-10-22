$(function(){ 
//start   
    var mianDiv
    $(document).on('scroll',function(){
        var offT = $('.page1').offset().top;
        var winH = $(window).innerHeight()/2;

        if($(window).scrollTop() >= offT - winH){
            $('.page1_top').addClass('play');
        }if($(window).scrollTop() >= (offT - winH)*1.5){
            $('.page1_bottom1').addClass('play');
        }if($(window).scrollTop() >= (offT - winH)*1.7){
            $('.page1_bottom2').addClass('play');
        }
        
        if($('.page1_bottom1').hasClass('play')){
            $('.a_img1, .wrt1 p').addClass('on');
            $(document).ready(function() {
                var textL = $(".clsc_c1 span");
                var inputs = textL.find($("label") );
                
                for(var i =0 ; i< inputs.length; i ++)
                { 
                     var index = i +1;
                     var time = ((inputs.length)-i ) * 100;
                    $(".clsc_c1 span label:nth-child("+index+")").css( "-animation", "anim .6s "+time+"ms forwards ease-out" );
                }    
            });

        }
    });
    $(document).on('scroll',function(){
        var offT = $('.page2').offset().top;
        var winH = $(window).innerHeight()/2;

        if($(window).scrollTop() >= offT - winH/0.5){
            $('.page2_top').addClass('play');
        }if($(window).scrollTop() >= offT - winH){
            $('.page2_top1').addClass('play');
        }if($(window).scrollTop() >= (offT - winH)*1.1){
            $('.page2_bottom').addClass('play');
        }
        
        if($('.page2_bottom').hasClass('play')){
            $('.a_img2, .wrt2 p').addClass('on');
            $(document).ready(function() {
                var textL = $(".clsc_c2 span");
                var inputs = textL.find($("label") );
                
                for(var i =0 ; i< inputs.length; i ++)
                { 
                     var index = i +1;
                     var time = ((inputs.length)-i ) * 100;
                    $(".clsc_c2 span label:nth-child("+index+")").css( "-animation", "anim2 .6s "+time+"ms forwards ease-out" );
                }    
            });
        }
    });
    $(document).on('scroll',function(){
        var offT = $('.page3').offset().top;
        var winH = $(window).innerHeight()/2;

        if($(window).scrollTop() >= offT - winH/0.5){
            $('.page3_top').addClass('play');
        }if($(window).scrollTop() >= offT - winH/0.8){
            $('.page3_top1').addClass('play');
        }if($(window).scrollTop() >= (offT - winH)){
            $('.page3_bottom').addClass('play');
        }
        
        if($('.page3_top1').hasClass('play')){
            $('.a_img3, .wrt3 p').addClass('on');
            $(document).ready(function() {
                var textL = $(".clsc_c3 span");
                var inputs = textL.find($("label") );
                
                for(var i =0 ; i< inputs.length; i ++)
                { 
                     var index = i +1;
                     var time = ((inputs.length)-i ) * 100;
                    $(".clsc_c3 span label:nth-child("+index+")").css( "-animation", "anim3 .6s "+time+"ms forwards ease-out" );
                }    
            });
        }
    });
    $(document).on('scroll',function(){
        var offT = $('.page4').offset().top;
        var winH = $(window).innerHeight()/2;

        if($(window).scrollTop() >= offT - winH/0.5){
            $('.page4_top1').addClass('play');
        }if($(window).scrollTop() >= offT - winH){
            $('.page4_top2').addClass('play');
        }if($(window).scrollTop() >= (offT - winH)*1.1){
            $('.page4_bottom').addClass('play');
        }
        
        if($('.page4_top2').hasClass('play')){
            $('.a_img4, .wrt4 p').addClass('on');
            $(document).ready(function() {
                var textL = $(".clsc_c4 span");
                var inputs = textL.find($("label") );
                
                for(var i =0 ; i< inputs.length; i ++)
                { 
                     var index = i +1;
                     var time = ((inputs.length)-i ) * 100;
                    $(".clsc_c4 span label:nth-child("+index+")").css( "-animation", "anim4 .6s "+time+"ms forwards ease-out" );
                }    
            });
        }
    });
    $(document).on('scroll',function(){
        var offT = $('.page5').offset().top;
        var winH = $(window).innerHeight()/2;

        if($(window).scrollTop() >= offT - winH){
            $('.page5_top1').addClass('play');
            $('.page5_top2').addClass('play');
        }if($(window).scrollTop() >= (offT - winH)*1.1){
            $('.page5_bottom').addClass('play');
        }
        
        if($('.page5_top2').hasClass('play')){
            $('.a_img5, .wrt5 p').addClass('on');
            $(document).ready(function() {
                var textL = $(".clsc_c5 span");
                var inputs = textL.find($("label") );
                
                for(var i =0 ; i< inputs.length; i ++)
                { 
                     var index = i +1;
                     var time = ((inputs.length)-i ) * 100;
                    $(".clsc_c5 span label:nth-child("+index+")").css( "-animation", "anim5 .6s "+time+"ms forwards ease-out" );
                }    
            });
        }
    });
    $(document).on('scroll',function(){
        var offT = $('.page6').offset().top;
        var winH = $(window).innerHeight()/2;

        if($(window).scrollTop() >= offT - winH){
            $('.page6_top').addClass('play');
            $('.page6_top1').addClass('play');
        }if($(window).scrollTop() >= (offT - winH)*1.1){
            $('.footer_top').addClass('play');
        }
        
        if($('.page6_top1').hasClass('play')){
            $('.a_img6, .wrt6 p').addClass('on');
            $(document).ready(function() {
                var textL = $(".clsc_c6 span");
                var inputs = textL.find($("label") );
                
                for(var i =0 ; i< inputs.length; i ++)
                { 
                     var index = i +1;
                     var time = ((inputs.length)-i ) * 100;
                    $(".clsc_c6 span label:nth-child("+index+")").css( "-animation", "anim6 .6s "+time+"ms forwards ease-out" );
                }    
            });
        }
    });

    


    //end  
});
    