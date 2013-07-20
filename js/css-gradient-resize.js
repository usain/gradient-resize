/* jquery downloaded version jquery-2.0.2
 * Custom Styles Author:  James Wigg, Dylan Scott.
*/
$(document).ready(function(){

    //colors
    var topColor    = 'red',
    bottomColor     = 'blue';

// ---------------------------- Gradient Styling [ Dylan and James ]

    gradientResize();// init the gradient
    
    $(window).resize(function(){
    gradientResize();
    
    });//end of resize

function gradientResize(){

//declare variable for gradient div innerheight
var $height     = $('.gradient').innerHeight(),
    $width      = $('.gradient').innerWidth(),
    $radian     = Math.atan($width/$height),
    $newAngle   = -$radian *(180/Math.PI);

//variable for browser user agent required to detect browser type
//required for cross browser compatiblity for HTML5 browser types only
    jQuery.browser = {};
        jQuery.browser.mozilla = /mozilla/.test(navigator.userAgent.toLowerCase()) && !/webkit/.test(navigator.userAgent.toLowerCase());
        jQuery.browser.webkit = /webkit/.test(navigator.userAgent.toLowerCase());
        jQuery.browser.opera = /opera/.test(navigator.userAgent.toLowerCase());
        jQuery.browser.msie = /msie/.test(navigator.userAgent.toLowerCase());

    if (jQuery.browser.mozilla){
        $('.gradient').css({ background: "-moz-linear-gradient("+$newAngle+"deg,"+topColor+" 50%,"+bottomColor+" 50%) no-repeat" 
        });
    } else if(jQuery.browser.webkit){
        $('.gradient').css({ background: "-webkit-linear-gradient("+$newAngle+"deg,"+topColor+" 50%,"+bottomColor+" 50%) no-repeat" 
        });
    }else if(jQuery.browser.opera){
        $('.gradient').css({ background: "-o-linear-gradient("+$newAngle+"deg,"+topColor+" 50%,"+bottomColor+" 50%) no-repeat" 
        });
    }else if(jQuery.browser.msie){
        $('.gradient').css({ background: "-ms-linear-gradient("+$newAngle+"deg,"+topColor+" 50%,"+bottomColor+" 50%) no-repeat" 
        });
    }
};
    
        
});//jQuery