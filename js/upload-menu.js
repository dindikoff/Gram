"use strict";

(function() {
  // upload menu

  const uploadInput = document.querySelector("#upload-file");
  const imageUploadOverlay = document.querySelector(".img-upload__overlay");
  const closeUploadOverlay = document.querySelector(".img-upload__cancel");

  const ESC_KEY_CODE = 27;

  const closeUploadOverlayByEsc = evt => {
    if (evt.keyCode == ESC_KEY_CODE) {
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

  const uploadForm = document.querySelector(".img-upload__form");
  const uploadFormButton = document.querySelector(".img-upload__submit");
  uploadForm.addEventListener("submit", function(evt) {
    window.upload(new FormData(uploadForm), function() {
      uploadFormButton.disabled = "disabled";
      hideUploadOverlay();
    });
    evt.preventDefault();
  });
})();
