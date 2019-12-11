$(document).ready(function(){
    $(".design").click(function(){
        $(".showing").toggle();
        $(".show-hidden").toggle();
    });
    event.preventDefault();
    
});
$(document).ready(function(){
    $(".development").click(function () {
        $(".dev-showing").toggle();
        $(".dev-show-hidden").toggle();
    });
    event.preventDefault()
});
$(document).ready(function(){
    $(".productmanagement").click(function () {
        $("img.pro-showing").toggle();
        $(".pro-show-hidden").toggle();
    });
    event.preventDefault();
});  
$(document).ready(function (){
    $(".portoimage").hover(function(){
        $(this).css("opacity", "0.2");
    }, function(){
        $(this).css("opacity", "1");
    });
    
    $(".text").hover(function(){
        $(this).css("position", "absolute");
        $(this).css("top", "50%");
        $(this).css("left", "50%");
        $(this).css("color","#fff");
        $(this).css("font-size", "40px")
    });
    event.preventDefault();    
})