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
  pictureComments.textContent = picture.comments;
  pictureLikes.textContent = picture.likes;

  return pictureElement;
};
// End Render Single Image;

// Show images on main page

// const showImages = (pictureList) => {
//     const fragment = document.createDocumentFragment();

//     for(let i = 0; i < pictureList.length; i++) {
//         fragment.appendChild(renderPicture(pictureList[i]));
//     }
//     pictures.appendChild(fragment);
// };

const fragment = document.createDocumentFragment();
for (let i = 0; i < imageList.length; i++) {
    fragment.appendChild(renderPicture(imageList[i]));
}
pictures.appendChild(fragment);

// End show images on main page;
