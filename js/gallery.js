'use strict';

(function () {
    var commentsList = document.querySelector('.social__comments');
    var pic = pictures.item;

    var renderPictures = function (pic) {
        var fragment = document.createDocumentFragment();

        for (var i = 0; i < pic.length; i++) {
            fragment.appendChild(pictures.createImage(pic[i]));
        }
        pictures.list.appendChild(fragment);
    };

    var renderComments = function (pic) {
        commentsList.innerHTML = '';
        var fragment = document.createDocumentFragment();

        for (var i = 0; i < pic.length; i++) {
            fragment.appendChild(pictures.createComment(pic[i]));
        }

        commentsList.appendChild(fragment);
    };

    window.gallery = {
        renderPicture: renderPictures,
        renderComments: renderComments
    }

    renderPictures(pic);


})();