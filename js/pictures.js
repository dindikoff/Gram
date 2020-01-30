

const picturesMain = document.querySelector(".pictures");

// upload menu

const uploadInput = document.querySelector("#upload-file");
const imageUploadOverlay = document.querySelector(".img-upload__overlay");
const closeUploadOverlay = document.querySelector(".img-upload__cancel");

const closeUploadOverlayByEsc = evt => {
  if (evt.keyCode == 27) {
    hideUploadOverlay();
  }
};

const showUploadOverlay = () => {
  let effectLevel = document.querySelector(".effect-level");
  effectLevel.style.display = "none";
  imageUploadOverlay.classList.remove("hidden");
  document.addEventListener("keydown", closeUploadOverlayByEsc);
};

const hideUploadOverlay = () => {
  if (
    document.activeElement.name === "hashtags" ||
    document.activeElement.name === "description"
  ) {
    return;
  } else {
    imageUploadOverlay.classList.add("hidden");
    document.removeEventListener("keydown", closeUploadOverlayByEsc);
  }
};

uploadInput.addEventListener("change", showUploadOverlay);
closeUploadOverlay.addEventListener("click", hideUploadOverlay);
// end upload menu

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

//Upload photo Zoom

const photoZoom = () => {
  const scaleControlSmall = document.querySelector(".scale__control--smaller");
  const scaleControlBig = document.querySelector(".scale__control--bigger");
  const scaleControlValue = document.querySelector(".scale__control--value");
  const uploadPreview = document.querySelector(".img-upload__preview");

  const SCALE_STEP = 25;
  const MIN_SCALE_NUMBER = 25;
  const MAX_SCALE_NUMBER = 100;

  const scaleBig = () => {
    if (parseInt(scaleControlValue.value) < MAX_SCALE_NUMBER) {
      let scaleSize = parseInt(scaleControlValue.value);
      scaleSize += SCALE_STEP;
      scaleControlValue.value = scaleSize + "%";
      uploadPreview.style.transform = "scale" + "(0." + scaleSize + ")";
      if (scaleSize === MAX_SCALE_NUMBER) {
        uploadPreview.style.transform = "scale(1)";
      }
    }
  };

  const scaleLow = () => {
    if (parseInt(scaleControlValue.value) > MIN_SCALE_NUMBER) {
      let scaleSize = parseInt(scaleControlValue.value);
      scaleSize -= SCALE_STEP;
      scaleControlValue.value = scaleSize + "%";
      uploadPreview.style.transform = "scale" + "(0." + scaleSize + ")";
    }
  };

  scaleControlBig.addEventListener("click", scaleBig);
  scaleControlSmall.addEventListener("click", scaleLow);
};

photoZoom();
//DragAndDrop;

const dragEffectLine = () => {
  const effectLevel = document.querySelector(".effect-level__pin");
  const effectDepth = document.querySelector(".effect-level__depth");

  effectLevel.addEventListener("mousedown", evt => {
    evt.preventDefault();

    let startCord = { x: evt.clientX };

    let dragged = false;

    const onMouseMove = moveEvt => {
      moveEvt.preventDefault();
      dragged = true;

      let shift = {
        x: startCord.x - moveEvt.clientX
      };

      startCord = { x: moveEvt.clientX };

      if (parseInt(effectLevel.style.left) >= 450) {
        effectLevel.style.left = "450px";
      }

      if (parseInt(effectLevel.style.left) <= 0) {
        effectLevel.style.left = "0px";
      }

      effectLevel.style.left = effectLevel.offsetLeft - shift.x + "px";
      effectDepth.style.width = effectLevel.offsetLeft - shift.x + "px";
      useEffectHandler();
    };

    const onMouseUp = upEvt => {
      upEvt.preventDefault();
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  });
};

dragEffectLine();

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

// Form Validation

const validationError = [
  "хэш-тег начинается с символа # (решётка);",
  "хеш-тег не может состоять только из одной решётки;",
  "хэш-теги разделяются пробелами;",
  "один и тот же хэш-тег не может быть использован дважды;",
  "нельзя указать больше пяти хэш-тегов;",
  "максимальная длина одного хэш-тега 20 символов, включая решётку.;"
];

const hashTagInput = document.querySelector(".text__hashtags");

const generateValues = () => {
  const userInput = hashTagInput.value.split(" ");
  return userInput;
};

const hashTagValidation = () => {
  const checkFirstSymbol = () => {
    const data = generateValues();
    for (let i = 0; i < data.length; i++) {
      if (data[i][0] !== "#") {
        hashTagInput.setCustomValidity(validationError[0]);
      } else {
        hashTagInput.setCustomValidity("");
      }
    }
  };

  const checkFirstSymbolHandler = () => {
    checkFirstSymbol();
  };

  const notOnlyOneHash = () => {
    const data = generateValues();
    for (let i = 0; i < data.length; i++) {
      if (data[i].length <= 1 && data[i] === "#") {
        hashTagInput.setCustomValidity(validationError[1]);
      }
    }
  };

  const notOnlyOneHashHandle = () => {
    notOnlyOneHash();
  };

  const hashOnlyFirst = () => {
    let string = "";
    const data = generateValues();

    for (let i = 0; i < data.length; i++) {
      string = data[i];
      const searchItem = "#";

      let pos = 0;

      while (true) {
        let foundPos = string.indexOf(searchItem, pos);
        if (foundPos == -1) break;

        if (foundPos > 0) {
          hashTagInput.setCustomValidity(validationError[2]);
        }

        pos = foundPos + 1;
      }
    }
  };

  const hashOnlyFirstHandle = () => {
    hashOnlyFirst();
  };

  const hashTagDuplicates = () => {
    const data = generateValues();
    const arr_len = data.length;
    for (let i = 0; i < arr_len; i++) {
      let val = data[i];
      for (let j = i + 1; j < arr_len; j++) {
        if (val === data[j] || val.toUpperCase() === data[j].toUpperCase()) {
          hashTagInput.setCustomValidity(validationError[3]);
          return true;
        }
      }
    }
    return false;
  };

  const hashTagDuplicatesHandler = () => {
    hashTagDuplicates();
  };

  const hashTagMaxNumber = () => {
    const data = generateValues();

    if (data.length >= 6) {
      hashTagInput.setCustomValidity(validationError[4]);
    }

    console.log(generateValues().length);
  };

  const hashTagMaxNumberHandler = () => {
    hashTagMaxNumber();
  };

  const hashTagMaxNumberLetter = () => {
    const data = generateValues();
    for (let i = 0; i < data.length; i++) {
      if (data[i].length > 20) {
        hashTagInput.setCustomValidity(validationError[5]);
      }
    }
  };

  const hashTagMaxNumberLetterHandler = () => {
    hashTagMaxNumberLetter();
  };
  hashTagInput.addEventListener("input", evt => {
    checkFirstSymbolHandler();
    notOnlyOneHashHandle();
    hashOnlyFirstHandle();
    hashTagDuplicatesHandler();
    hashTagMaxNumberHandler();
    hashTagMaxNumberLetterHandler();
  });
};

hashTagValidation();
