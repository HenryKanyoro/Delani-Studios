$(document).ready(function () {
    $(".moto").click(function () {
         $(".moto").hide(550);
         $(".fly").show(550);
    });
    $(".fly").click(function () {
         $(".fly").hide(550);
         $(".moto").show(550);
    });
    $(".tamu").click(function () {
         $(".tamu").hide(550);
         $(".cup").show(550);
    });
    $(".cup").click(function () {
         $(".cup").hide(550);
         $(".tamu").show(550);
    });
    $(".plate").click(function () {
         $(".plate").hide(550);
         $(".kijiko").show(550);
    });
    $(".kijiko").click(function () {
         $(".kijiko").hide(550);
         $(".plate").show(550);
    });
});



$(document).ready(function() {
     $(".photo").hover(function(){
          $("#kali").toggle();
     });
     $(".photo1").hover(function(){
          $("#kali1").toggle();
     });
     $(".photo2").hover(function(){
          $("#kali2").toggle();
     });
     $(".photo3").hover(function(){
          $("#kali3").toggle();
     });
     $(".photo4").hover(function(){
          $("#kali4").toggle();
     });
     $(".photo5").hover(function(){
          $("#kali5").toggle();
     });
     $(".photo6").hover(function(){
          $("#kali6").toggle();
     });
     $(".photo7").hover(function(){
          $("#kali7").toggle();
     });
});