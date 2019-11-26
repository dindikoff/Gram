'use strict';

(function () {

  // Generate images

  var pictureTemplate = document.querySelector('#picture').content;
  var picturesList = document.querySelector('.pictures');


  var getRandomInRange = function (min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);

    return rand;
  };

  var getRandomElement = function (arr) {
    var randEl = Math.floor(Math.random() * arr.length);
    return arr[randEl];
  }

  var generateId = function () {
    var imageId = [];
    for (var i = 0; i <= data.picture.COUNT; i++) {
      imageId.push(i);
    }

    return imageId;
  }

  var generateRandomComments = function () {
    var results = [];
    var quantity = getRandomInRange(data.picture.MIN_COMMENTS, data.picture.MAX_COMMENTS);

    for (var i = 0; i < quantity; i++) {
      var index = getRandomInRange(data.picture.MIN_COMMENTS, data.picture.COMMENTS.length - 1);
      results.push(data.picture.COMMENTS[index]);
    }

    return results;
  };

  var generatePictures = function () {
    var pictures = [];

    for (var i = 1; i <= data.picture.COUNT; i++) {
      pictures.push({
        url: 'photos/' + i + '.jpg',
        likes: getRandomInRange(data.picture.MIN_LIKES, data.picture.MAX_LIKES),
        comments: generateRandomComments(),
        description: getRandomElement(data.picture.DESCRIPTIONS),
        id: generateId()[i]
      });
    }

    return pictures;
  }

  var pictures = generatePictures();

  var createPictures = function (picture) {
    var pictureElement = pictureTemplate.cloneNode(true);

    pictureElement.querySelector('.picture__img').src = picture.url;
    pictureElement.querySelector('.picture__img').id = picture.id;
    pictureElement.querySelector('.picture__likes').textContent = picture.likes;
    pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;

    return pictureElement;
  };




  var makeElement = function (tagName, className) {
    var element = document.createElement(tagName);
    element.classList.add(className);

    return element;
  }

  var createComment = function (pictures) {
    var listItem = makeElement('li', 'social__comment');

    var image = makeElement('img', 'social__picture');
    image.src = 'img/avatar-' + getRandomInRange(data.picture.MIN_AVATAR_NUM, data.picture.MAX_AVATAR_NUM) + '.svg';
    image.alt = 'Аватар комментатора фотографии';
    image.width = '35';
    image.height = '35';
    listItem.appendChild(image);

    var commentText = makeElement('p', 'social__text');
    commentText.textContent = pictures;
    listItem.appendChild(commentText);

    return listItem;
  };

  window.pictures = {
    item: pictures,
    createImage: createPictures,
    createComment: createComment,
    list: picturesList
  }

})();