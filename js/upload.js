'use strict';
// File Upload

var uploadButton = document.querySelector('#upload-file');
var imageUploadOverlay = document.querySelector('.img-upload__overlay');
var imageUploadCancelButton = document.querySelector('.img-upload__cancel');
var hashTagInput = document.querySelector('.text__hashtags');
var descriptionArea = document.querySelector('.text__description');

var scaleControlSmaller = document.querySelector(".scale__control--smaller");
var scaleControlBigger = document.querySelector(".scale__control--bigger");
var scaleControlValue  = document.querySelector(".scale__control--value");
var imageArea = document.querySelector('.img-upload__preview');

var effectLevelPanel = document.querySelector('.effect-level');




var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var onPopupEscPress = function(evt) {
    if (evt.keyCode === ESC_KEYCODE) {
        closePopup();
    }
};

var openPopup = function() {
    imageUploadOverlay.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function() {
    imageUploadOverlay.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
};

uploadButton.addEventListener('change', function() {
    openPopup();
});

uploadButton.addEventListener('keydown', function(evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
        openPopup();
    }
});

imageUploadCancelButton.addEventListener('click', function() {
    closePopup();
});

hashTagInput.addEventListener('focus', function() {
    document.removeEventListener('keydown', onPopupEscPress);
});

hashTagInput.addEventListener('blur', function() {
    document.addEventListener('keydown', onPopupEscPress);
});

descriptionArea.addEventListener('focus', function() {
    document.removeEventListener('keydown', onPopupEscPress);
});

descriptionArea.addEventListener('blur', function() {
    document.addEventListener('keydown', onPopupEscPress);
});

// Effects

var effectsListQuery = document.querySelector('.effects__list');
var imageUploaded = document.querySelector('.img-upload__preview');

var chosenFilter = '';

var effectList = {
    none: 'effects__preview--none',
    chrome: 'effects__preview--chrome',
    sepia: 'effects__preview--sepia',
    marvin: 'effects__preview--marvin',
    phobos: 'effects__preview--phobos',
    heat: 'effects__preview--heat'
}

var setFilters = function(filter) {
    imageUploaded.classList.add(filter);
}

var removeFilters = function() {
    imageUploaded.className = "img-upload__preview" + " " + effectList.none;
}

effectLevelPanel.classList.add("hidden");

effectsListQuery.addEventListener('click', function(evt) {
    chosenFilter = evt.target;

    if (chosenFilter.id == 'effect-none'){
        resetEffect();
        effectLevelPanel.classList.add("hidden");
        setFilters(effectList.none);
        removeFilters();
    }

    if (chosenFilter.id == 'effect-chrome'){
        resetEffect();
        effectLevelPanel.classList.remove("hidden");
        removeFilters();
        setFilters(effectList.chrome);
    }

    if (chosenFilter.id == 'effect-sepia'){
        resetEffect();
        effectLevelPanel.classList.remove("hidden");
        removeFilters();
        setFilters(effectList.sepia);
    }

    if (chosenFilter.id == 'effect-marvin'){
        resetEffect();
        effectLevelPanel.classList.remove("hidden");
        removeFilters();
        setFilters(effectList.marvin);
    }

    if (chosenFilter.id == 'effect-phobos'){
        resetEffect();
        effectLevelPanel.classList.remove("hidden");
        removeFilters();
        setFilters(effectList.phobos);
    }

    if (chosenFilter.id == 'effect-heat'){
        resetEffect();
        effectLevelPanel.classList.remove("hidden");
        removeFilters();
        setFilters(effectList.heat);
    }
});

var scaleControlSmallerHandler = function() {
    if (parseInt(scaleControlValue.value) > 25) {
        scaleControlValue.value = parseInt(scaleControlValue.value) - 25 + "%";
        imageArea.style="transform: scale(0." + parseInt(scaleControlValue.value) + ")";
    }   
};


var scaleControlBiggerHandler = function() {
    if (parseInt(scaleControlValue.value) < 100) {
        scaleControlValue.value = parseInt(scaleControlValue.value) + 25 + "%";
        imageArea.style="transform: scale(0." + parseInt(scaleControlValue.value) + ")";

        if (parseInt(scaleControlValue.value) == 100) {
            imageArea.style="transform: scale(1)";
        }

    }  
};

scaleControlSmaller.addEventListener("click", scaleControlSmallerHandler );

scaleControlBigger.addEventListener("click", scaleControlBiggerHandler);

// var effectLevel = parseInt(effectLevelValue.value);




