$(document).ready(function () {
    $(".moto").click(function () {
         $(".moto").hide(750);
         $(".fly").show(750);
    });
    $(".fly").click(function () {
         $(".fly").hide(750);
         $(".moto").show(750);
    });
    $(".tamu").click(function () {
         $(".tamu").hide(750);
         $(".cup").show(750);
    });
    $(".cup").click(function () {
         $(".cup").hide(750);
         $(".tamu").show(750);
    });
    $(".plate").click(function () {
         $(".plate").hide(750);
         $(".kijiko").show(750);
    });
    $(".kijiko").click(function () {
         $(".kijiko").hide(750);
         $(".plate").show(750);
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