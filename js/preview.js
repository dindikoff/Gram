'use strict';

(function() {
    // Big picture;

window.bigPicture = pictureElement => {
    const bigPicture = document.querySelector(".big-picture");
  
    const socialElement = document.querySelector(".social");
    const bigPictureImage = document.querySelector(".big-picture__img img");
    bigPictureImage.src = 'photos/1.jpg'
    bigPictureImage.src = pictureElement.url; // Show Big Picture;
    console.log(pictureElement);
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
  
    //Hide Picture COunt and Download button;
    const getBigPictureCommentsCountAndDownload = () => {
      const bigPictureCommentsCount = bigPicture.querySelector(
        ".social__comment-count"
      );
      const bigPictureDownloadComments = bigPicture.querySelector(
        ".social__comments-loader"
      );
      // bigPictureDownloadComments.classList.add("visually-hidden");
      // bigPictureCommentsCount.classList.add("visually-hidden");
    };
    getBigPictureCommentsCountAndDownload();
  
    //Show Comments;
    
    const getBigPictureSocialComments = () => {

      const socialComments = document.querySelector(".social__comments");
      socialComments.innerHTML = "";
  
      const fragment = document.createDocumentFragment();
      for (let i = 0; i < pictureElement.comments.length; i++) {
        const socialCommentEl = document.createElement("li");
        socialCommentEl.classList.add("social__comment");
  
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

        while (pictureElement.comments.length < 3) {
          console.log('hi');
        }
        
      }
      socialComments.appendChild(fragment);
    };
    getBigPictureSocialComments();
  };
  
  bigPicture(imageList[0]); // Show Big Picture with one element;
  

  window.preview = {
    bigPicture
  };
  //Show Big Picture by click
})();