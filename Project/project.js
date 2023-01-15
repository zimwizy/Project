
var clicked = false;
       
        $('.buta').click(function () {
            clicked = !clicked;
            clicked ? $(this).css({ left: '50%' }) && $('#img10').hide(200) && $('#img20').show(200) && $("#product").fadeToggle(1000) &&  $('.pages').fadeToggle(1000) && $('#maps').fadeIn(1000) : $(this).css({ left: '0%' }) && $('#img20').hide(200) && $('#img10').show(200) && $("#maps").fadeToggle(1000) && $('#product').fadeIn(1000) && $('.pages').fadeIn(1000);
 
            
     
        })

