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
      console.log("hi");
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

// Big picture;

const bigPicture = pictureElement => {
  const bigPicture = document.querySelector(".big-picture");

  const socialElement = document.querySelector(".social");
  const bigPictureImage = bigPicture.querySelector(".big-picture__img img");

  bigPictureImage.src = pictureElement.url; // Show Big Picture;

  //Generate Header;
  const getBigPictureHeader = () => {
    const bigPictureSocialHeaderPicture = document.querySelector(
      ".social__header img"
    );
    const bigPictureSocialHeaderCaption = document.querySelector(
      ".social__header p"
    );
    const bigPictureLikes = bigPicture.querySelector(
      ".social__header .likes-count"
    );

    bigPictureSocialHeaderPicture.src = "img/avatar-1.svg";
    bigPictureLikes.textContent = pictureElement.likes; // take likes from object
    bigPictureSocialHeaderCaption.textContent = pictureElement.comments; //take picture comment from object
  };
  getBigPictureHeader();

  //Hide Picture COunt and Download button;
  const getBigPictureCommentsCountAndDownload = () => {
    const bigPictureCommentsCount = bigPicture.querySelector(
      ".social__comment-count"
    );
    const bigPictureDownloadComments = bigPicture.querySelector(
      ".social__comments-loader"
    );
    bigPictureDownloadComments.classList.add("visually-hidden");
    bigPictureCommentsCount.classList.add("visually-hidden");
  };
  getBigPictureCommentsCountAndDownload();

  //Show Comments;
  const getBigPictureSocialComments = () => {
    const socialComments = document.querySelector(".social__comments");
    socialComments.innerHTML = "";

    const fragment = document.createDocumentFragment();
    for (let i = 0; i < 3; i++) {
      const socialCommentEl = document.createElement("li");
      socialCommentEl.classList.add("social__comment");

      const socialCommentImg = document.createElement("img");
      socialCommentImg.src = `img/avatar-${i + 1}.svg`;
      socialCommentImg.classList.add("social__picture");
      socialCommentImg.width = "35";
      socialCommentImg.height = "35";

      const socialCommentText = document.createElement("p");
      socialCommentText.classList.add("social__text");
      socialCommentText.textContent = COMMENTS[i];

      fragment.appendChild(socialCommentEl);
      socialCommentEl.appendChild(socialCommentImg);
      socialCommentEl.appendChild(socialCommentText);
    }
    socialComments.appendChild(fragment);
  };
  getBigPictureSocialComments();
};

bigPicture(imageList[0]); // Show Big Picture with one element;

//Show Big Picture by click

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
  imageUploadOverlay.classList.remove("hidden");
  document.addEventListener("keydown", closeUploadOverlayByEsc);
};

const hideUploadOverlay = () => {
  imageUploadOverlay.classList.add("hidden");
  document.removeEventListener("keydown", closeUploadOverlayByEsc);
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

const useEffectHandler = () => {
  if (filterRadioButtons[0].checked) {
    imageUploadPreview.className = "img-upload__preview";
  }

  if (filterRadioButtons[1].checked) {
    imageUploadPreview.className = "img-upload__preview" + " " + effectsList[0];
  }

  if (filterRadioButtons[2].checked) {
    imageUploadPreview.className = "img-upload__preview" + " " + effectsList[1];
  }

  if (filterRadioButtons[3].checked) {
    imageUploadPreview.className = "img-upload__preview" + " " + effectsList[2];
  }

  if (filterRadioButtons[4].checked) {
    imageUploadPreview.className = "img-upload__preview" + " " + effectsList[3];
  }

  if (filterRadioButtons[5].checked) {
    imageUploadPreview.className = "img-upload__preview" + " " + effectsList[4];
  }
};

effectLists.addEventListener("change", useEffectHandler);

// Effects end

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
        if (val === data[j]) {
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

  hashTagInput.addEventListener("input", evt => {
    checkFirstSymbolHandler();
    notOnlyOneHashHandle();
    hashOnlyFirstHandle();
    hashTagDuplicatesHandler();
    hashTagMaxNumberHandler();
  });
};

hashTagValidation();
