'use strict';

(function() {
    const URL = 'https://js.dump.academy/kekstagram/data';

    window.load = function(onSuccess, onError) {
        const xhr = new this.XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open('GET', URL);

        xhr.addEventListener('load', function() {
            switch(xhr.status) {
                case 200:
                    onSuccess(xhr.response);
                    break;
                default:
                    onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
            }
        });

        xhr.addEventListener('error', function() {
            onError('Ошибка соединения!');
        });

        xhr.send();
    };

})();