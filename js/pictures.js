'use strict';

var getImageUrl = function() {
    var url = 'img/photos/';
    var urlList = [];

    for (var i = 1; i < 26; i++) {
        urlList.push(url + i);
    }

    return urlList;
};

var getNumberOfLikes = function() {
    return Math.floor(Math.random() * (200 - 15 + 1) + 15);
};

var getComents = function() {
    return commentsList[Math.floor(Math.random() * commentsList.length)]
}

var getDescription = function() {
    return descriptionsList[Math.floor(Math.random() * descriptionsList.length)]
}

var commentsList = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

var descriptionsList = [
    'Тестим новую камеру!',
    'Затусили с друзьями на море',
    'Как же круто тут кормят',
    'Отдыхаем...',
    'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......',
    'Вот это тачка!'
];

var imagesList = getImageUrl();



console.log(imagesList.pop());
console.log(getNumberOfLikes());
console.log(getComents());
console.log(getDescription());


var userPhotos = [
    {
        url: 'img/photos/1.jpg',
        likes: 10,
        comments: 'Всё отлично!',
        description: 'Тестим новую камеру!'
    },

    {
        url: 'img/photos/2.jpg',
        likes: 15,
        comments: 'В целом всё неплохо. Но не всё.!',
        description: 'Затусили с друзьями на море'
    }
];