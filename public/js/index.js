$(window).scroll(function () {
    if ($(window).scrollTop() > 900) {
       
        $(".gotop").stop().slideDown()
        $(".gotop").addClass("gotop_active")

        
    } else {
        // ($(window).scrollTop() < 600) {
            
            $(".gotop").stop().slideUp()
    }
    
})

$(".p_box").hover(function(){


    $(this).find(".p_box_icon").toggle()
  
  

}
)


