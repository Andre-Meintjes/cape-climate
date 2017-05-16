

var index = 0; //index for slides
var slideAnimation;

$(document).ready(function(){
    currentSlide(index);
    slideAnimation = setInterval(nextSlide, 5000);
});

function currentSlide(int){
    var slides = ["/img/maldives.jpg", "/img/artcool.jpg", "/img/emura.jpg"];
    var element = document.getElementById("slides");
        
        element.style.backgroundImage = "url('https://raw.githubusercontent.com/Andre-Meintjes/cape-climate/master/" + slides[int] + "')";
        $('#slides').animateCss('zoomInUp');
}

function nextSlide(){
    if (index == 2){
        index = 0;
    } else {
        index++;
    }

    currentSlide(index);
}

function prevSlide(){
    if (index == 0){
        index = 2;
    } else {
        index--;
    }
    currentSlide(index);
}

function reset(){
    clearInterval(slideAnimation);
    slideAnimation = setInterval(nextSlide, 5000);
}

function prevSlideCall(){
    prevSlide();
    reset();
}
function nextSlideCall(){ 
    nextSlide();
    reset();
}

$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

function calculateBTU(){
    var width = parseInt(document.getElementById("width").Value);
    var length = parseInt(document.getElementById("length").Value);
    var btu= 0;

    btu = width * length * 500;

    document.getElementById('btu').innerHTML = "BTUs nedded: " + parseInt(btu);


}