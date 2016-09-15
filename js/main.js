$(".hamburger").on("click",function(){
     $("header nav a").css("display","block").show();
     $(".hamburger").hide();
      $(".cross").show();
});

$(".cross").on("click",function(){
  $("header nav a").hide();
  $(".cross").hide();
  $(".hamburger").show();
});
