'use strict';

    var picture = {
        COUNT: 25,

        MIN_LIKES: 15,
        MAX_LIKES: 200,

        MIN_COMMENTS: 0,
        MAX_COMMENTS: 10,

        MIN_AVATAR_NUM: 1,
        MAX_AVATAR_NUM: 6,
        
        COMMENTS: [
            'Всё отлично!',
            'В целом всё неплохо. Но не всё.',
            'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
            'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
            'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
            'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
        ],

        DESCRIPTIONS: [
            'Тестим новую камеру!',
            'Затусили с друзьями на море',
            'Как же круто тут кормят',
            'Отдыхаем...',
            'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......',
            'Вот это тачка!'
        ]

    };


var picturesList = document.querySelector('.pictures');
var pictureTemplate = document.querySelector('#picture').content;
var bigPicture = document.querySelector('.big-picture');

var commentsList = bigPicture.querySelector('.social__comments');
var commentCount = bigPicture.querySelector('.social__comment-count');
var commentsLoader = bigPicture.querySelector('.comments-loader');

var getRandomInRange = function(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);

    return rand;
};

var getRandomElement = function(arr) {
    var randEl = Math.floor(Math.random() * arr.length);
    return arr[randEl];
}

var generateRandomComments = function() {
    var results = [];
    var quantity = getRandomInRange(picture.MIN_COMMENTS, picture.MAX_COMMENTS);
    
    for (var i = 0; i < quantity; i++) {
        var index = getRandomInRange(picture.MIN_COMMENTS, picture.COMMENTS.length - 1);
        results.push(picture.COMMENTS[index]);
    }

    return results;
};

var generatePictures = function() {
    var pictures = [];

    for (var i = 1; i <= picture.COUNT; i++) {
        pictures.push({
            url: 'photos/' + i +'.jpg',
            likes: getRandomInRange(picture.MIN_LIKES, picture.MAX_LIKES),
            comments: generateRandomComments(),
            description: getRandomElement(picture.DESCRIPTIONS)
        });
    }

    return pictures;
}

var createPictures = function (picture) {
	var pictureElement = pictureTemplate.cloneNode(true);

	pictureElement.querySelector('.picture__img').src = picture.url;
	pictureElement.querySelector('.picture__likes').textContent = picture.likes;
	pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;

	return pictureElement;
};


var renderPictures = function (pictures) {
	var fragment = document.createDocumentFragment();

	for (var i = 0; i < pictures.length; i++) {
		fragment.appendChild(createPictures(pictures[i]));
	}
	picturesList.appendChild(fragment);
};

var makeElement = function(tagName, className) {
    var element = document.createElement(tagName);
    element.classList.add(className);

    return element;
}

var createComment = function (pictures) {
    var listItem = makeElement('li', 'social__comment');
  
    var image = makeElement('img', 'social__picture');
    image.src = 'img/avatar-' + getRandomInRange(picture.MIN_AVATAR_NUM, picture.MAX_AVATAR_NUM) + '.svg';
    image.alt = 'Аватар комментатора фотографии';
    image.width = '35';
    image.height = '35';
    listItem.appendChild(image);
  
      var commentText = makeElement('p', 'social__text');
      commentText.textContent = pictures;
      listItem.appendChild(commentText);
  
    return listItem;
  };

  var renderComments = function(pictures) {
    commentsList.innerHTML = '';
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < pictures.length; i++) {
        fragment.appendChild(createComment(pictures[i]));
    }

    commentsList.appendChild(fragment);
  };


  var renderBigPicture = function (picture) {
	bigPicture.querySelector('.big-picture__img img').src = picture.url;
	bigPicture.querySelector('.likes-count').textContent = picture.likes;
	bigPicture.querySelector('.comments-count').textContent = picture.comments.length;
	renderComments(picture.comments);
	bigPicture.querySelector('.social__caption').textContent = picture.description;
};

var pictures = generatePictures();

renderPictures(pictures);

var showBigPicture = function () {

    renderBigPicture(pictures[0]);
    bigPicture.classList.remove('hidden');
    commentCount.classList.add('visually-hidden');
    commentsLoader.classList.add('visually-hidden');
  };

// showBigPicture();


// File Upload

var uploadButton = document.querySelector('#upload-file');
var imageUploadOverlay = document.querySelector('.img-upload__overlay');
var imageUploadCancel = document.querySelector('.img-upload__cancel');

var uploadButtonHandler = function() {
    imageUploadOverlay.classList.remove('hidden');
};

var imageUploadCancelHandler = function() {
    imageUploadOverlay.classList.add('hidden');
};

uploadButton.addEventListener('change', function() {
    uploadButtonHandler();
    document.addEventListener('keydown', function(evt) {
        if (evt.keyCode == 27) {
            imageUploadCancelHandler();
            console.log("hello");
        }
    });
});

imageUploadCancel.addEventListener('click', imageUploadCancelHandler);




// End File Upload