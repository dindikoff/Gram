'use strict';

(function() {
    const pictureTemplate = document
    .querySelector("#picture")
    .content.querySelector("a");

  const pictures = document.querySelector(".pictures");

  //Render Single image;

  window.renderPicture = picture => {
    const pictureElement = pictureTemplate.cloneNode(true);
    const pictureImageSrc = pictureElement.querySelector("img");
    const pictureComments = pictureElement.querySelector(".picture__comments");
    const pictureLikes = pictureElement.querySelector(".picture__likes");

    pictureImageSrc.src = picture.url;
    pictureComments.textContent = picture.comments.length;
    pictureLikes.textContent = picture.likes;
    pictureImageSrc.id = 2;
    pictureImageSrc.alt = picture.description;

    // Show big picture Handlers
    const bigPictureEl = document.querySelector(".big-picture");
    const showBigPictureHandler = evt => {
      bigPictureEl.classList.remove("hidden"); // Show big picture
      preview.bigPicture(picture);
    };

    const closeOverlayByEsc = evt => {
      if (evt.keyCode === 27) {
        hideBitPictureHandle(); // Close big picture
      }
    };

    const bigPictureClose = document.querySelector(".big-picture__cancel");

    const hideBitPictureHandle = evt => {
      bigPictureEl.classList.add("hidden"); // Close big picture
      document.removeEventListener("keydown", closeOverlayByEsc);
    };

    pictureImageSrc.addEventListener("click", evt => {
      showBigPictureHandler(evt);
      document.addEventListener("keydown", closeOverlayByEsc);
    });

    bigPictureClose.addEventListener("click", hideBitPictureHandle);

    return pictureElement;
  };

  window.deleteAllPictures = () => {
    const picturesList = document.querySelectorAll(".picture");
    for(let i = 0; i < picturesList.length; i++) {
        picturesList[i].remove();
    }
  }

  const picturesArea = document.querySelector('.pictures');
  window.render = (data) => {
    deleteAllPictures();

    for (let i = 0; i < data.length; i++) {
        picturesArea.appendChild(renderPicture(data[i]));
    }
  };
  // End Render Single Image;
})();