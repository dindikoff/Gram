'use strict';

(function() {
  const pictureTemplate = document
  .querySelector("#picture")
  .content.querySelector("a");

const pictures = document.querySelector(".pictures");

//Render Single image;
const renderPicture = picture => {
  const pictureElement = pictureTemplate.cloneNode(true);
  const pictureImageSrc = pictureElement.querySelector("img");
  const pictureComments = pictureElement.querySelector(".picture__comments");
  const pictureLikes = pictureElement.querySelector(".picture__likes");

  pictureImageSrc.src = picture.url;
  pictureComments.textContent = picture.comments.length;
  pictureLikes.textContent = picture.likes;
  pictureImageSrc.id = picture.id;

  // Show big picture Handlers
  const bigPictureEl = document.querySelector(".big-picture");
  const showBigPictureHandler = evt => {
    bigPictureEl.classList.remove("hidden"); // Show big picture
    bigPicture(imageList[evt.target.id]);
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
// End Render Single Image;

// Show images on main page

const showImages = pictureList => {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < pictureList.length; i++) {
    fragment.appendChild(renderPicture(pictureList[i]));
  }
  pictures.appendChild(fragment);
};

showImages(imageList);

// End show images on main page;
})();