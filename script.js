$(document).ready(function(){
   
//   메뉴를 호버하면 그메뉴 소속 인 .sub가 부드럽게 나오도록
   $("nav div").hover(function(){
      $(this).find(".sub").stop().fadeToggle()
//      내가 호버한 그 div태그의 하위에 있는 .sub를 찾아서 부드럽게 나타났다가 들어갔다가 하게 해달라
//   ※주의※
//      hover 이벤트가 마우스 갖다댐+뗌 2가지를 한꺼번에 수행하는 메소드이므로, 이벤트를 받는 동작 메소드도 toggle종류로 작성해야 한다!
   })
   
   $("#bxslide ul").bxSlider()
   
//   #tb-hd span을 클릭하면 #tbmenu가 부드럽게 나왔으면 좋겠다!
   $("#tb-hd span").click(function(){
      $("#tbmenu").fadeIn(300)
   })
   
//   #tbmenu button을 클릭하면 #tbmenu가 부드럽게 사라졌으면 좋겠다!
   
   $("#tbmenu button").click(function(){
      $("#tbmenu").fadeOut(300)
   })
   
//   #con2 소속 .hislide에게 bxslider를 걸어준다.
//   한 라인에 슬라이드가 여러장이 표시될 수 있도록
   
   $(".hislide").bxSlider({
      minSlides: 2,
//      ㄴ화면이 아무리 작아져도 요만큼은 표시 하겠다 싶은 갯수
      maxSlides: 4,
//      ㄴ 화면이 아무리 커져도 이만큼까지만 표시하겠다 싶은 슬라이드 갯수
      slideWidth: 360,
      slideMargin:20,
      controls: false,
      pager:false,
      moveSlides: 1,
      auto:true,
      pause:1000
   })
   
})