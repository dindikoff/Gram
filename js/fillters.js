'use strict';

var effectLevelPin = document.querySelector('.effect-level__pin');
var effectLevelDepth = document.querySelector('.effect-level__depth');
var effectLevelValue = document.querySelector('.effect-level__value');

var getPixels;
var MAX_NUMBER = 430;
var MAX_PERCENTAGE = 100;

effectLevelPin.addEventListener('mousedown', function(evt) {
    evt.preventDefault();

    var startCords = evt.clientX;

    var onMouseMove = function(moveEvt) {
        moveEvt.preventDefault();

        var shift = startCords - moveEvt.clientX;

        startCords = moveEvt.clientX;

        effectLevelPin.style.left = (effectLevelPin.offsetLeft - shift) + 'px';
        effectLevelDepth.style.width = (effectLevelPin.offsetLeft - shift) + 'px';

        getPixels = (effectLevelPin.offsetLeft - shift);
        effectLevelValue.value = (getPixels / MAX_NUMBER) * MAX_PERCENTAGE;


        if (effectLevelPin.offsetLeft >= 450) {
            effectLevelPin.style.left = 450 + 'px';
        }

        if (effectLevelPin.offsetLeft < 0) {
            effectLevelPin.style.left = 0 + 'px';
        }

    };

    var onMouseUp = function(upEvt) {
        upEvt.preventDefault();

        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);


});



effectLevelPin.addEventListener("mouseup", function() {
    
    if (chosenFilter.id == 'effect-chrome') {
        getEffectHandler("chrome");
    }

    if (chosenFilter.id == 'effect-sepia'){
        getEffectHandler("sepia");
    }

    if (chosenFilter.id == 'effect-marvin'){
        getEffectHandler("marvin");
    }

    if (chosenFilter.id == 'effect-phobos'){
        getEffectHandler("fobos");
    }

    if (chosenFilter.id == 'effect-heat'){
        getEffectHandler("heat");
    } 
});


var getEffectHandler = function(filter) {

    if (filter == 'chrome') {
        imageUploaded.style = "filter: grayscale(0." + parseInt(effectLevelValue.value) + ")";

        if (parseInt(effectLevelValue.value) == 100) {
            imageUploaded.style = "filter: grayscale(1)";
        }  
    } 
    
    else if (filter == 'sepia') {
        imageUploaded.style = "filter: sepia(0." + parseInt(effectLevelValue.value) + ")";

        if (parseInt(effectLevelValue.value) == 100) {
            imageUploaded.style = "filter: sepia(1)";
        }  
    } 
    
    else if (filter == 'marvin') {
        imageUploaded.style = "filter: invert(" + parseInt(effectLevelValue.value) + "%)";
    }

    else if (filter == 'fobos') {
        if (parseInt(effectLevelValue.value) <= 25) {
            imageUploaded.style = "filter: blur(1px)";
        } 

        else if (parseInt(effectLevelValue.value) <= 50) {
            imageUploaded.style = "filter: blur(2px)";
        }

        else if (parseInt(effectLevelValue.value) <= 75) {
            imageUploaded.style = "filter: blur(3px)";
        }

        else if (parseInt(effectLevelValue.value) <= 100) {
            imageUploaded.style= "filter: blur(4px)";
        }
        
    }

    else if (filter == 'heat') {
        imageUploaded.style = "filter: brightness(" + parseInt(effectLevelValue.value) + "%)";
    }
    
};

var resetEffect = function() {
    imageUploaded.style.filter = "";
    effectLevelValue.value = 20;
    effectLevelPin.style.left = 50 + 'px';
    effectLevelDepth.style.width = 50 + 'px';
    console.log('hi');

}
