'use strict';

(function() {
    // Effects

const effectsList = [
    "effects__preview--chrome",
    "effects__preview--sepia",
    "effects__preview--marvin",
    "effects__preview--phobos",
    "effects__preview--heat"
  ];
  const imageUploadPreview = document.querySelector(".img-upload__preview");
  const filterRadioButtons = document.querySelectorAll(".effects__radio");
  const effectLists = document.querySelector(".effects__list");
  
  const resetPins = () => {
    const effectLevel = document.querySelector(".effect-level__pin");
    const effectDepth = document.querySelector(".effect-level__depth");
  
    effectLevel.left = "20%";
    effectLevel.style = "left: 20%";
    effectDepth.width = "20%";
    effectDepth.style = "width: 20%";
  };
  
  const resetHandler = () => {
    if (
      filterRadioButtons[1].checked ||
      filterRadioButtons[2].checked ||
      filterRadioButtons[3].checked ||
      filterRadioButtons[4].checked ||
      filterRadioButtons[5].checked
    ) {
      resetPins();
    }
  };
  
  effectLists.addEventListener("click", resetHandler);
  
  const useEffectHandler = () => {
    let effectLevel = document.querySelector(".effect-level");
  
    if (filterRadioButtons[0].checked) {
      imageUploadPreview.className = "img-upload__preview";
      changeEffectLevel("none");
      effectLevel.style.display = "none";
    } else {
      effectLevel.style.display = "block";
    }
  
    if (filterRadioButtons[1].checked) {
      imageUploadPreview.className = "img-upload__preview" + " " + effectsList[0];
      changeEffectLevel("chrome");
    }
  
    if (filterRadioButtons[2].checked) {
      imageUploadPreview.className = "img-upload__preview" + " " + effectsList[1];
  
      const sepiaEffect = document.querySelector(".effects__preview--sepia");
      sepiaEffect.style = "filter: sepia(20%)";
      changeEffectLevel("sepia");
    }
  
    if (filterRadioButtons[3].checked) {
      imageUploadPreview.className = "img-upload__preview" + " " + effectsList[2];
      changeEffectLevel("marvin");
    }
  
    if (filterRadioButtons[4].checked) {
      imageUploadPreview.className = "img-upload__preview" + " " + effectsList[3];
      changeEffectLevel("phobos");
    }
  
    if (filterRadioButtons[5].checked) {
      imageUploadPreview.className = "img-upload__preview" + " " + effectsList[4];
      changeEffectLevel("heat");
    }
  };
  
  effectLists.addEventListener("change", useEffectHandler);
  
  // Effects end
  
  // Put Effect on image dynamicly
  
  const changeEffectLevel = filter => {
    const effectLevelPin = document.querySelector(".effect-level__pin");
    const imageUploadEffect = document.querySelector(".img-upload__preview");
  
    const numberToPercent = number => {
      return Math.floor((number * 100) / 450) + "%";
    };
  
    const numberToBlurPixel = number => {
      let blurPixel;
      if (number <= 150) {
        blurPixel = "1";
        return blurPixel;
      }
  
      if (number <= 300 && number >= 150) {
        blurPixel = "2";
        return blurPixel;
      }
  
      if (number <= 450 && number >= 300) {
        blurPixel = "3";
        return blurPixel;
      }
    };
  
    if (filter === "none") {
      imageUploadEffect.style = "";
    }
  
    if (filter === "chrome") {
      imageUploadEffect.style = `filter: grayscale(${numberToPercent(
        effectLevelPin.offsetLeft
      )})`;
    }
  
    if (filter === "sepia") {
      imageUploadEffect.style = `filter: sepia(${numberToPercent(
        effectLevelPin.offsetLeft
      )})`;
    }
  
    if (filter === "marvin") {
      imageUploadEffect.style = `filter: invert(${numberToPercent(
        effectLevelPin.offsetLeft
      )})`;
    }
  
    if (filter === "phobos") {
      let blurVariable =
        "filter: blur(" + numberToBlurPixel(effectLevelPin.offsetLeft) + "px)";
      imageUploadEffect.style = blurVariable;
    }
  
    if (filter === "heat") {
      let blurVariable =
        "filter: brightness(" +
        numberToBlurPixel(effectLevelPin.offsetLeft) +
        ")";
      imageUploadEffect.style = blurVariable;
    }
  };  

  window.effects = {
    useEffectHandler
  };

})();