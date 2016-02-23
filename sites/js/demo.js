/**
 * Created by erikholmberg17 on 2016-02-09.
 */
$(function(){
    // Check the initial Poistion of the Sticky Header
    var stickyHeaderTop = $('nav').offset().top;

    $('.gallery').each(function() { // the containers for all your galleries
        $(this).magnificPopup({
            delegate: 'a', // the selector for gallery item
            type: 'image',
            gallery: {
                enabled:true
            }
        });
    });
    $(window).scroll(function(){
        if( $(window).scrollTop() > stickyHeaderTop ) {
            $('nav').css({position: 'fixed', top: '0px', margin: 'auto',width: '80%'});
            $('#flagz').css({position: 'fixed', top: '-5px',right: '140px'});
            $('#stickyalias').css('display', 'block');
        } else {
            $('nav').css({position: 'static', top: '0px',width: '100%'});
            if ($('#flagz').css("position") === 'fixed'){
                $('#flagz').css({position: 'absolute',right: '0px', bot: '0px'});
            }
            $('#stickyalias').css('display', 'none');
        }
    });
});