"use strict";

//Demo data (must delete after internal data)

const COMMENTS = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально',
    'Моя бабушка случайно чихнула с фотоаппаратом в рука и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппара на кота и у меня получилась фотография лучше',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTION = [
    'Тестим новую камеру!',
    'Затусили с друзьями на море',
    'Как же круто тут кормят',
    'Отдыхаем...',
    'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......',
    'Вот это тачка!'
];

//End Demo data (must delete after internal data)

//Generate Random Likes Numbers

const getRandomLikeNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

//End Generation Random Likes Numbers

//Create Mock Data;

const imageList = [
  {
    url: 'photos/1.jpg',
    likes: getRandomLikeNumber(15, 200),
    comments: 'Всё отлично!',
    description: 'Тестим новую камеру!'
  },
  {
    url: 'photos/2.jpg',
    likes: getRandomLikeNumber(15, 200),
    comments: 'Всё отлично! 2',
    description: 'Тестим новую камеру! 2'
  },
  {
    url: 'photos/3.jpg',
    likes: getRandomLikeNumber(15, 200),
    comments: 'Всё отлично! 3',
    description: 'Тестим новую камеру! 3'
  },
  {
    url: 'photos/4.jpg',
    likes: getRandomLikeNumber(15, 200),
    comments: 'Всё отлично! 4',
    description: 'Тестим новую камеру! 4'
  },
  {
    url: 'photos/5.jpg',
    likes: getRandomLikeNumber(15, 200),
    comments: 'Всё отлично! 5',
    description: 'Тестим новую камеру! 5'
  },
  {
    url: 'photos/6.jpg',
    likes: getRandomLikeNumber(15, 200),
    comments: 'Всё отлично! 6',
    description: 'Тестим новую камеру! 6'
  },
  {
    url: 'photos/7.jpg',
    likes: getRandomLikeNumber(15, 200),
    comments: 'Всё отлично! 7',
    description: 'Тестим новую камеру! 7'
  },
  {
    url: 'photos/8.jpg',
    likes: getRandomLikeNumber(15, 200),
    comments: 'Всё отлично! 8 ',
    description: 'Тестим новую камеру! 8'
  },
  {
    url: 'photos/9.jpg',
    likes: getRandomLikeNumber(15, 200),
    comments: 'Всё отлично! 9',
    description: 'Тестим новую камеру! 9'
  },
  {
    url: 'photos/10.jpg',
    likes: getRandomLikeNumber(15, 200),
    comments: 'Всё отлично! 10',
    description: 'Тестим новую камеру! 10'
  },
  {
    url: 'photos/11.jpg',
    likes: getRandomLikeNumber(15, 200),
    comments: 'Всё отлично! 11',
    description: 'Тестим новую камеру! 12'
  },
  {
    url: 'photos/13.jpg',
    likes: getRandomLikeNumber(15, 200),
    comments: 'Всё отлично! 13',
    description: 'Тестим новую камеру! 13'
  },
  {
    url: 'photos/14.jpg',
    likes: getRandomLikeNumber(15, 200),
    comments: 'Всё отлично! 14',
    description: 'Тестим новую камеру! 14'
  },
  {
    url: 'photos/15.jpg',
    likes: getRandomLikeNumber(15, 200),
    comments: 'Всё отлично! 15',
    description: 'Тестим новую камеру! 15'
  },
  {
    url: 'photos/16.jpg',
    likes: getRandomLikeNumber(15, 200),
    comments: 'Всё отлично 16',
    description: 'Тестим новую камеру! 16'
  },
  {
    url: 'photos/17.jpg',
    likes: getRandomLikeNumber(15, 200),
    comments: 'Всё отлично! 17',
    description: 'Тестим новую камеру! 17'
  },
  {
    url: 'photos/18.jpg',
    likes: getRandomLikeNumber(15, 200),
    comments: 'Всё отлично! 18',
    description: 'Тестим новую камеру! 18'
  },
  {
    url: 'photos/19.jpg',
    likes: getRandomLikeNumber(15, 200),
    comments: 'Всё отлично! 19',
    description: 'Тестим новую камеру! 19'
  },
  {
    url: 'photos/20.jpg',
    likes: getRandomLikeNumber(15, 200),
    comments: 'Всё отлично! 20',
    description: 'Тестим новую камеру!20'
  },
  {
    url: 'photos/21.jpg',
    likes: getRandomLikeNumber(15, 200),
    comments: 'Всё отлично!21',
    description: 'Тестим новую камеру!21'
  },
  {
    url: 'photos/22.jpg',
    likes: getRandomLikeNumber(15, 200),
    comments: 'Всё отлично!22',
    description: 'Тестим новую камеру!22'
  },
  {
    url: 'photos/23.jpg',
    likes: getRandomLikeNumber(15, 200),
    comments: 'Всё отлично!23',
    description: 'Тестим новую камеру!23'
  },
  {
    url: 'photos/24.jpg',
    likes: getRandomLikeNumber(15, 200),
    comments: 'Всё отлично!24',
    description: 'Тестим новую камеру!24'
  },
  {
    url: 'photos/25.jpg',
    likes: getRandomLikeNumber(15, 200),
    comments: 'Всё отлично!25',
    description: 'Тестим новую камеру!25'
  },
  {
    url: 'photos/1.jpg',
    likes: getRandomLikeNumber(15, 200),
    comments: 'Всё отлично!',
    description: 'Тестим новую камеру!'
  },
  {
    url: 'photos/26.jpg',
    likes: getRandomLikeNumber(15, 200),
    comments: 'Всё отлично!26',
    description: 'Тестим новую камеру!26'
  },
];
