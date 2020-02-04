'use strict';

(function() {
    const URL = 'https://js.dump.academy/kekstagram/data';

    window.load = function(onSuccess, onError) {
        const xhr = new this.XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open('GET', URL);

        xhr.addEventListener('load', function() {
            onSuccess(xhr.response);
        });

        xhr.send();
    };

})();