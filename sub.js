$(document).ready(function(){
    // 메뉴 호버
    $("nav div").hover(function(){
        $(this).find(".sub").stop().fadeToggle()
    })

    // 반응형 메뉴
    $("#tb-hd span").click(function(){
        $("#tbmenu").fadeIn(300)
    })

    // 반응형 메뉴 버튼
    $("#tbmenu button").click(function(){
        $("#tbmenu").fadeOut(300)
    })
})