'use strict';

(function () {
  var hashTagInput = document.querySelector('.text__hashtags');

  var submitButton = document.querySelector('.img-upload__submit');

  var errorList = {
    NOT_HASH: "Хеш-тег не может состоять только из одной решётки.",
    NOT_SPACE: 'Хэш-теги разделяются пробелами.',
    HASH_CLONE: 'Один и тот же хэш-тег не может быть использован дважды.',
    MAX_HASH: 'Нельзя указать больше пяти хэш-тегов.',
    MAX_LENGTH: 'Максимальная длина одного хэш-тега 20 символов, включая решётку.',
  };

  var MAX_HASHTAGS = 5;
  var MAX_HASH_LENGTH = 20;

  var generateValuesHandler = function () {
    var inputValue = hashTagInput.value;
    var hashtags = inputValue.split(" ");
    var sortedHashTags = [];

    for (var i = 0; i < hashtags.length; i++) {
      sortedHashTags.push(hashtags[i].toLowerCase());
    }

    return sortedHashTags;
  };

  var hashNotImportant = function () {
    var newArray = [];
    for (var i = 0; i < generateValuesHandler().length; i++) {
      if (generateValuesHandler()[i][0] == '#') {
        newArray.push(generateValuesHandler()[i]);
      } else {
        newArray.push(generateValuesHandler()[i] = '#' + generateValuesHandler()[i]);
      }
    }

    return newArray;
  };

  var hashAloneHandler = function () {
    for (var i = 0; i < generateValuesHandler().length; i++) {
      if (generateValuesHandler().length == 1 && generateValuesHandler()[0] === '#') {
        hashTagInput.setCustomValidity(errorList.NOT_HASH);
      } else {
        hashTagInput.setCustomValidity("");
      }
    }
  };

  var hashCloneHandler = function (array) {
    var numbers = array;

    for (var i = 0; i <= numbers.length - 1; i++) {
      var check = true;
      for (var j = 0; j <= numbers.length - 1; j++) {
        if (numbers[j] == numbers[i] && j != i) {
          check = false;
        }
      }
    }

    if (check == false) {
      hashTagInput.setCustomValidity(errorList.HASH_CLONE);
    }
  };

  var hashMaxLengthHandler = function (array) {
    for (var i = 0; i < array.length; i++) {
      if (array[i].length > MAX_HASH_LENGTH) {
        hashTagInput.setCustomValidity(errorList.MAX_LENGTH);
      }
    }
  };

  var notSpaceHandler = function (array) {
    var string = "";

    for (var i = 0; i < array.length; i++) {
      string = array[i];

      var searchTerm = '#';

      let pos = 0;
      while (true) {
        let foundPos = string.indexOf(searchTerm, pos);
        if (foundPos == -1) break;

        if (foundPos > 0) {
          hashTagInput.setCustomValidity(errorList.NOT_SPACE);
        }

        pos = foundPos + 1;

      }
    };
  };

  var maxNumberHashHandler = function (array) {
    if (array.length >= MAX_HASHTAGS) {
      hashTagInput.setCustomValidity(errorList.MAX_HASH);
    }
  };

  var descriptionArea = document.querySelector('.text__description');
  var hashTagInput = document.querySelector('.text__hashtags');

  hashTagInput.addEventListener('focus', function () {
    document.removeEventListener('keydown', popup.pressed);
  });

  hashTagInput.addEventListener('blur', function () {
    document.addEventListener('keydown', popup.pressed);
  });

  descriptionArea.addEventListener('focus', function () {
    document.removeEventListener('keydown', popup.pressed);
  });

  descriptionArea.addEventListener('blur', function () {
    document.addEventListener('keydown', popup.pressed);
  });


  hashTagInput.addEventListener("input", function (evt) {
    generateValuesHandler();

    hashAloneHandler();

    hashCloneHandler(generateValuesHandler());

    hashMaxLengthHandler(generateValuesHandler());

    notSpaceHandler(generateValuesHandler());

    maxNumberHashHandler(generateValuesHandler());

  });

})();