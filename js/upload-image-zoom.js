'use strict';

(function() {
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
})();