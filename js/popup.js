$(function(){
    $('.page5 img').click(function(){
        $('.popupValue').fadeIn(200);        
    });

    $(document).mouseup(function (e){
        var popup = $(".popupValue");
        if(popup.has(e.target).length === 0){
            popup.fadeOut(200);
        }
    });

    $('.page4 img').click(function(){
        $('.historypop').fadeIn(200);
    });
    $(document).mouseup(function (e){
        var popup = $(".historypop");
        if(popup.has(e.target).length === 0){
            popup.fadeOut(200);
        }
    });

});