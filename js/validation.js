"use strict";

(function() {
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
})();
