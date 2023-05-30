/*
alert("Working ;) !!")
$("button").click(function(){
    $("h1").text("Hello World !!");
    $("h1").css("color","red");
});
*/
$(document).keypress(function(event){
    $("h1").text(event.key);
});
$("button").on("click",function(){
    $("h1").slideUp().slideDown().animate({opacity: 0.5});

});