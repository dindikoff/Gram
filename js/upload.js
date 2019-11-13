// File Upload

var uploadButton = document.querySelector('#upload-file');
var imageUploadOverlay = document.querySelector('.img-upload__overlay');
var imageUploadCancel = document.querySelector('.img-upload__cancel');

var scaleControlSmaller = document.querySelector(".scale__control--smaller");
var scaleControlBigger = document.querySelector(".scale__control--bigger");
var scaleControlValue  = document.querySelector(".scale__control--value");
var imageArea = document.querySelector('.img-upload__preview');

var uploadButtonHandler = function() {
    imageUploadOverlay.classList.remove('hidden');
};

var imageUploadCancelHandler = function() {
    imageUploadOverlay.classList.add('hidden');
};

uploadButton.addEventListener('change', function() {
    uploadButtonHandler();
    document.addEventListener('keydown', function(evt) {
        if (evt.keyCode == 27) {
            imageUploadCancelHandler();
            console.log("hello");
        }
    });
});

imageUploadCancel.addEventListener('click', imageUploadCancelHandler);

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

effectsListQuery.addEventListener('click', function(evt) {
    chosenFilter = evt.target;

    if (chosenFilter.id == 'effect-none'){
        setFilters(effectList.none);
        removeFilters();
    }

    if (chosenFilter.id == 'effect-chrome'){
        
        removeFilters();
        setFilters(effectList.chrome);
    }

    if (chosenFilter.id == 'effect-sepia'){
        removeFilters();
        setFilters(effectList.sepia);
    }

    if (chosenFilter.id == 'effect-marvin'){
        removeFilters();
        setFilters(effectList.marvin);
    }

    if (chosenFilter.id == 'effect-phobos'){
        removeFilters();
        setFilters(effectList.phobos);
    }

    if (chosenFilter.id == 'effect-heat'){
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

var scaleControlTransformHandler = function() {
    
};

scaleControlSmaller.addEventListener("click", function() {
    scaleControlSmallerHandler();
    scaleControlTransformHandler();
});
scaleControlBigger.addEventListener("click", scaleControlBiggerHandler);