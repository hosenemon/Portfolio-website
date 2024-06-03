$(document).ready(function (){

    //go top
    $(".goTop").click(function (){
        $('html, body').animate({
            scrollTop: 0}, 500);
    });
    //goTop hide show
    $(window).scroll(function(){
        var windowScroll = $(this).scrollTop();
        /* totop fixed */
        if(windowScroll < 200) {
            $(".goTop").fadeOut();
        }else{
            $(".goTop").fadeIn();
        };

        /* menu fixed */
        if(windowScroll>10){
            $(".header").addClass("fixed");
        }else{
            $(".header").removeClass("fixed");
        }
        if(windowScroll>50){
            $(".service_tab").addClass("serviceTab");
        }else{
            $(".service_tab").removeClass("serviceTab");
        }
    }) //scroll end

    //scroll header fixed


});
