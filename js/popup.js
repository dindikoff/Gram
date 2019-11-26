'use strict';

(function(){
  // File Upload

var uploadButton = document.querySelector('#upload-file');
var imageUploadOverlay = document.querySelector('.img-upload__overlay');
var imageUploadCancelButton = document.querySelector('.img-upload__cancel');


var onPopupEscPress = function (evt) {
  if (evt.keyCode === utils.ESC_KEYCODE) {
      closePopup();
  }
};

window.popup = {
  pressed: onPopupEscPress
}

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
  if (evt.keyCode === utils.ENTER_KEYCODE) {
    openPopup();
  }
});

imageUploadCancelButton.addEventListener('click', function() {
  closePopup();
});

})();
