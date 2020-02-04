"use strict";

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
  // End Render Single Image;

  // Show images on main page
  const successHandler = picture => {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < picture.length; i++) {
      fragment.appendChild(renderPicture(picture[i]));
    }
    pictures.appendChild(fragment);
  };

  const errorHandle = errorMessage => {
    let node = document.createElement("div");
    node.style =
      "z-index: 100; margin: 0 auto; text-align: center; background-color: red;";
    node.style.position = "absolute";
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = "30px";
    node.textContent = errorMessage;
    document.body.insertAdjacentElement("afterbegin", node);
  };

  window.load(successHandler, errorHandle);

  // showImages(imageList);

  // End show images on main page;
})();
