'use strict';

(function () {
    //Big Picture

    var bigPicture = document.querySelector('.big-picture');
    var bigPictureClose = bigPicture.querySelector('.big-picture__cancel');


    var commentCount = bigPicture.querySelector('.social__comment-count');
    var commentsLoader = bigPicture.querySelector('.comments-loader');

    var renderBigPicture = function (picture) {
        bigPicture.querySelector('.big-picture__img img').src = picture.url;
        bigPicture.querySelector('.likes-count').textContent = picture.likes;
        bigPicture.querySelector('.comments-count').textContent = picture.comments.length;
        gallery.renderComments(picture.comments);
        bigPicture.querySelector('.social__caption').textContent = picture.description;
    };

    var showBigPicture = function (item) {

        renderBigPicture(pictures.item[item - 1]);
        bigPicture.classList.remove('hidden');
        commentCount.classList.add('visually-hidden');
        commentsLoader.classList.add('visually-hidden');
    };

    pictures.list.addEventListener('click', function (evt) {

        if (evt.target.id == parseInt(evt.target.id, 10)) {
            showBigPicture(evt.target.id);
        }

        document.addEventListener('keydown', function (evt) {
            if (evt.keyCode === utils.ESC_KEYCODE) {
                bigPicture.classList.add('hidden');
            }
        });
    });

    bigPictureClose.addEventListener('click', function () {
        bigPicture.classList.add('hidden');
    });

})();