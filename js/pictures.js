'use strict';

    var MIN_LIKES = 15;
    var MAX_LIKES = 200;

    var COMMENTS = [
        'Всё отлично!',
        'В целом всё неплохо. Но не всё.',
        'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
        'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
        'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
        'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
    ];

    var DESCRIPTIONS = [
        'Тестим новую камеру!',
        'Затусили с друзьями на море',
        'Как же круто тут кормят',
        'Отдыхаем...',
        'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......',
        'Вот это тачка!'
    ];

var picturesList = document.querySelector('.pictures');
var pictureTemplate = document.querySelector('#picture').content;
var bigPicture = document.querySelector('.big-picture');
bigPicture.classList.remove('hidden');
var commentsList = bigPicture.querySelector('.social__comments');
var socialPictures = bigPicture.querySelectorAll('.social__picture');
var commentCount = bigPicture.querySelector('.social__comment-count');
var userPhotos = [];


var getImageUrl = function() {
    var url = 'photos/';
    var urlList = [];

    for (var i = 1; i < 27; i++) {
        urlList.push(url + i +'.jpg');
    }

    return urlList;
};

var imagesList = getImageUrl();

var getNumberOfLikes = function() {
    return Math.floor(Math.random() * (MAX_LIKES - MIN_LIKES + 1) + MAX_LIKES);
};

var getComments = function() {
    return COMMENTS[Math.floor(Math.random() * COMMENTS.length)]
}

var generateComments = function(userPhotos) {
    var comments = [];

    for (var i = 1; i < socialPictures.length + 1; i++) {
        var commentItemAvatar = socialPictures[0].src = 'img/avatar-' + i + '.svg';
        comments.push({
            avatar: commentItemAvatar
        });
    }

    for (var i = 1; i < 5; i++) {
        var commentItemText = userPhotos[0].comments;

        comments.push({
            comment: commentItemText
        })
    }

    return comments;
}

var renderComments = function() {

}

var getDescription = function() {
    return DESCRIPTIONS[Math.floor(Math.random() * DESCRIPTIONS.length)]
}

var getRandomAvatar = function() {
    return Math.floor(Math.random() * (6 - 1) + 1);
}



// Test Data Start
var generateTestData = function() {
    for (var i = 0; i < 25; i++) {
        userPhotos.push(
            {
                url: imagesList.pop(),
                likes: getNumberOfLikes(),
                comments: getComments(),
                description: getDescription()
            }
        )
    }
}

generateTestData();

// Test Data End


var createPicture = function(userPhotos) {
    var pictureElement = pictureTemplate.cloneNode(true);

    pictureElement.querySelector('.picture__img').src = userPhotos.url;
    pictureElement.querySelector('.picture__likes').textContent = userPhotos.likes;
    pictureElement.querySelector('.picture__comments').textContent = userPhotos.comments.length;

    return pictureElement;
};

var renderPicture = function(userPhotos) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < userPhotos.length; i++) {
        fragment.appendChild(createPicture(userPhotos[i]));
    }

    picturesList.appendChild(fragment);
};

renderPicture(userPhotos);

var renderBigPicture = function(userPhotos) {
    bigPicture.querySelector('.big-picture__img img').src = userPhotos.url;
    bigPicture.querySelector('.likes-count').textContent = userPhotos.likes;
    bigPicture.querySelector('.comments-count').textContent = userPhotos.comments.length;
    bigPicture.querySelector('.social__text').textContent = userPhotos.comments;

    
    // bigPicture.querySelectorAll('.social__picture').src = generateComments().;

}

renderBigPicture(userPhotos[1]);
