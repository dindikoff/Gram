"use strict";

(function() {
  // Big picture;

  window.bigPicture = pictureElement => {
    const bigPicture = document.querySelector(".big-picture");

    const socialElement = document.querySelector(".social");
    const bigPictureImage = document.querySelector(".big-picture__img img");
    bigPictureImage.src = "photos/1.jpg";
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
      bigPictureSocialHeaderCaption.textContent = pictureElement.description; //take picture comment from object
    };
    getBigPictureHeader();

    //Hide Download button;
    const showMoreComments = () => {
      const bigPictureDownloadComments = bigPicture.querySelector(
        ".social__comments-loader"
      );

      if (pictureElement.comments.length > 5) {
        bigPictureDownloadComments.classList.remove("visually-hidden");
      } else {
        bigPictureDownloadComments.classList.add("visually-hidden");
      }
    };
    showMoreComments();

    const maxCommentsCountField = (num) => {
      const commentsCount = document.querySelector(".social__comment-count");
      const commentsDisplay =
        pictureElement.comments.length < 5 ? pictureElement.comments.length : num;
      commentsCount.textContent = `${commentsDisplay} из ${pictureElement.comments.length} комментариев`;
    };
    maxCommentsCountField(5);

    //Show Comments;

    const getBigPictureSocialComments = () => {
      let MAX_COMMENT_COUNT = 4;
      const socialComments = document.querySelector(".social__comments");

      socialComments.innerHTML = "";

      const fragment = document.createDocumentFragment();
      for (let i = 0; i < pictureElement.comments.length; i++) {
        const socialCommentEl = document.createElement("li");
        socialCommentEl.classList.add("social__comment");

        if (i > MAX_COMMENT_COUNT) {
          socialCommentEl.classList.add("visually-hidden");
        }

        const socialCommentImg = document.createElement("img");
        socialCommentImg.src = pictureElement.comments[i].avatar;
        socialCommentImg.classList.add("social__picture");
        socialCommentImg.width = "35";
        socialCommentImg.height = "35";

        const socialCommentText = document.createElement("p");
        socialCommentText.classList.add("social__text");
        socialCommentText.textContent = pictureElement.comments[i].message;

        fragment.appendChild(socialCommentEl);
        socialCommentEl.appendChild(socialCommentImg);
        socialCommentEl.appendChild(socialCommentText);
      }
      const socialCommentEl = document.createElement("li");

      socialComments.appendChild(fragment);

      const showAllComments = () => {
        const some = document.querySelectorAll('.social__comment');
        for (let i = 0; i < some.length; i++) {
          some[i].classList.remove('visually-hidden');
          maxCommentsCountField(pictureElement.comments.length);
        }
      };

      const showMoreButton = document.querySelector('.social__comments-loader');
      showMoreButton.addEventListener('click', showAllComments);

    };
    getBigPictureSocialComments();
  };

  window.preview = {
    bigPicture
  };
  //Show Big Picture by click
})();
