'use strict';

(function () {

  // Effects

  var effectsListQuery = document.querySelector('.effects__list');
  var imageUploaded = document.querySelector('.img-upload__preview');
  var effectLevelPanel = document.querySelector('.effect-level');

  var chosenFilter = '';

  var effectList = {
    none: 'effects__preview--none',
    chrome: 'effects__preview--chrome',
    sepia: 'effects__preview--sepia',
    marvin: 'effects__preview--marvin',
    phobos: 'effects__preview--phobos',
    heat: 'effects__preview--heat'
  }

  var setFilters = function (filter) {
    imageUploaded.classList.add(filter);
  }

  var removeFilters = function () {
    imageUploaded.className = "img-upload__preview" + " " + effectList.none;
  }

  effectLevelPanel.classList.add("hidden");

  effectsListQuery.addEventListener('click', function (evt) {
    chosenFilter = evt.target;

    if (chosenFilter.id == 'effect-none') {
      resetEffect();
      effectLevelPanel.classList.add("hidden");
      setFilters(effectList.none);
      removeFilters();
    }

    if (chosenFilter.id == 'effect-chrome') {
      resetEffect();
      effectLevelPanel.classList.remove("hidden");
      removeFilters();
      setFilters(effectList.chrome);
    }

    if (chosenFilter.id == 'effect-sepia') {
      resetEffect();
      effectLevelPanel.classList.remove("hidden");
      removeFilters();
      setFilters(effectList.sepia);
    }

    if (chosenFilter.id == 'effect-marvin') {
      resetEffect();
      effectLevelPanel.classList.remove("hidden");
      removeFilters();
      setFilters(effectList.marvin);
    }

    if (chosenFilter.id == 'effect-phobos') {
      resetEffect();
      effectLevelPanel.classList.remove("hidden");
      removeFilters();
      setFilters(effectList.phobos);
    }

    if (chosenFilter.id == 'effect-heat') {
      resetEffect();
      effectLevelPanel.classList.remove("hidden");
      removeFilters();
      setFilters(effectList.heat);
    }
  });

  //Change Effects

  var effectLevelPin = document.querySelector('.effect-level__pin');
  var effectLevelDepth = document.querySelector('.effect-level__depth');
  var effectLevelValue = document.querySelector('.effect-level__value');

  var pinPixelPosition;
  var MAX_NUMBER = 450;
  var MIN_NUMBER = 0;
  var MAX_PERCENTAGE = 100;

  var DEFAULT_PIN_POSITION_NUMBER = 50;

  effectLevelPin.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCords = evt.clientX;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      var shift = startCords - moveEvt.clientX;

      startCords = moveEvt.clientX;

      effectLevelPin.style.left = (effectLevelPin.offsetLeft - shift) +
        'px';
      effectLevelDepth.style.width = (effectLevelPin.offsetLeft - shift) +
        'px';

      pinPixelPosition = (effectLevelPin.offsetLeft - shift);
      effectLevelValue.value = (pinPixelPosition / MAX_NUMBER) * MAX_PERCENTAGE;


      if (effectLevelPin.offsetLeft >= MAX_NUMBER) {
        effectLevelPin.style.left = MAX_NUMBER + 'px';
      }

      if (effectLevelPin.offsetLeft < MIN_NUMBER) {
        effectLevelPin.style.left = MIN_NUMBER + 'px';
      }

    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);


  });



  effectLevelPin.addEventListener("mouseup", function () {

    if (chosenFilter.id == 'effect-chrome') {
      getEffectHandler("chrome");
    }

    if (chosenFilter.id == 'effect-sepia') {
      getEffectHandler("sepia");
    }

    if (chosenFilter.id == 'effect-marvin') {
      getEffectHandler("marvin");
    }

    if (chosenFilter.id == 'effect-phobos') {
      getEffectHandler("fobos");
    }

    if (chosenFilter.id == 'effect-heat') {
      getEffectHandler("heat");
    }
  });


  var getEffectHandler = function (filter) {

    if (filter == 'chrome') {
      imageUploaded.style = "filter: grayscale(0." +
        parseInt(effectLevelValue.value) + ")";

      if (parseInt(effectLevelValue.value) == 100) {
        imageUploaded.style = "filter: grayscale(1)";
      }
    } else if (filter == 'sepia') {
      imageUploaded.style = "filter: sepia(0." +
        parseInt(effectLevelValue.value) + ")";

      if (parseInt(effectLevelValue.value) == 100) {
        imageUploaded.style = "filter: sepia(1)";
      }
    } else if (filter == 'marvin') {
      imageUploaded.style = "filter: invert(" +
        parseInt(effectLevelValue.value) + "%)";
    } else if (filter == 'fobos') {
      if (parseInt(effectLevelValue.value) <= 25) {
        imageUploaded.style = "filter: blur(1px)";
      } else if (parseInt(effectLevelValue.value) <= 50) {
        imageUploaded.style = "filter: blur(2px)";
      } else if (parseInt(effectLevelValue.value) <= 75) {
        imageUploaded.style = "filter: blur(3px)";
      } else if (parseInt(effectLevelValue.value) <= 100) {
        imageUploaded.style = "filter: blur(4px)";
      }

    } else if (filter == 'heat') {
      imageUploaded.style = "filter: brightness(" +
        parseInt(effectLevelValue.value) + "%)";
    }

  };

  var resetEffect = function () {
    imageUploaded.style.filter = "";
    effectLevelValue.value = DEFAULT_PIN_POSITION_NUMBER;
    effectLevelPin.style.left = DEFAULT_PIN_POSITION_NUMBER + 'px';
    effectLevelDepth.style.width = DEFAULT_PIN_POSITION_NUMBER + 'px';

  }



})();