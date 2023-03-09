$(document).ready(function(){
   // 메뉴 호버
   $("nav div").hover(function(){
      $(this).find(".sub").stop().fadeToggle()
   })
   
   $("#bxslide ul").bxSlider()
   
   // 반응형 메뉴
   $("#tb-hd span").click(function(){
      $("#tbmenu").fadeIn(300)
   })
   // 반응형 메뉴 버튼
   $("#tbmenu button").click(function(){
      $("#tbmenu").fadeOut(300)
   })
   // 메인 이미지 슬라이더
   $(".hislide").bxSlider({
      minSlides: 2,
      maxSlides: 4,
      slideWidth: 360,
      slideMargin:20,
      controls: false,
      pager:false,
      moveSlides: 1,
      auto:true,
      pause:3000
   })
   
})