$(document).ready(function() {
    var textL = $(".main_c1 .page1");
    var inputs = textL.find($("label") );
    
    for(var i =0 ; i< inputs.length; i ++)
    { 
         var index = i +1;
         var time = ((inputs.length)-i ) * 50;
        $(".main_c1 .page1 label:nth-child("+index+")").css( "-animation", "labelAni .6s "+time+"ms forwards ease-out" );
    }    
});

$(document).on('scroll',function(){
    var img = $('.main_img');
    var offT1 = $('.main_c1').offset().top;
    var offT2 = $('.main_c2').offset().top;
    var offT3 = $('.main_c3').offset().top;
    var winH = $(window).innerHeight()/2;

    if($(window).scrollTop() > offT1 - winH){
        img.css({
            left:"40%",
            top:"6%",
            transition:".8s",
            transform:"rotateZ(15deg)",
            animation: "move .5s linear forwards"
        });
    }if($(window).scrollTop() >= offT2 - winH/0.7){
        img.css({
            left:"48%",
            top:"38%",
            transition:".8s",
            transform:"rotateZ(-18deg)",
            animation: "move .5s linear forwards"
        });
    }if($(window).scrollTop() > offT3 - winH/0.7){
        img.css({
            left:"11%",
            top:"70%",
            transition:".8s",
            transform:"rotateZ(0deg)",
            animation: "move .5s linear forwards"
        });
    }

});