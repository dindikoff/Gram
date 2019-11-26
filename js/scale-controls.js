'use strict';

(function(){

    var imageArea = document.querySelector('.img-upload__preview');
    var scaleControlSmaller = document.querySelector(".scale__control--smaller");
    var scaleControlBigger = document.querySelector(".scale__control--bigger");
    var scaleControlValue = document.querySelector(".scale__control--value");

    var scaleControlSmallerHandler = function() {
        if (parseInt(scaleControlValue.value) > 25) {
          scaleControlValue.value = parseInt(scaleControlValue.value) - 25 + "%";
          imageArea.style = "transform: scale(0." + parseInt(scaleControlValue.value) + ")";
        }
      };
      
      
      var scaleControlBiggerHandler = function() {
        if (parseInt(scaleControlValue.value) < 100) {
          scaleControlValue.value = parseInt(scaleControlValue.value) + 25 + "%";
          imageArea.style = "transform: scale(0." + parseInt(scaleControlValue.value) + ")";
      
          if (parseInt(scaleControlValue.value) == 100) {
            imageArea.style = "transform: scale(1)";
          }
      
        }
      };
      
      scaleControlSmaller.addEventListener("click", scaleControlSmallerHandler);
      
      scaleControlBigger.addEventListener("click", scaleControlBiggerHandler);
})();