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
        $(this).css("text-align","center");
    }, function(){
        $(this).css("opacity", "1");
    })
})