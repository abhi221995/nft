
$(document).ready(function(){

    // ready function start //

    let stickynavTop=$('nav').offset().top;

    function stickynav(){
        let scrollTop=$(window).scrollTop();

        if(scrollTop > stickynavTop){
            $('nav').addClass('sticky');
        }

        else{
            $('nav').removeClass('sticky');
        }
    }

    stickynav();
    $(window).scroll(function(){
        stickynav()
    });





    // ready function end //
});