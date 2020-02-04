"use strict";

(function() {
  const URL = "https://js.dump.academy/kekstagram";
  window.upload = function(data, onSuccess) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.addEventListener("load", function() {
      switch(xhr.status) {
          case 200: 
            onSuccess(xhr.response);
            break;
          case 500:
              console.error('Wrong address');
      }
    });

   

    xhr.open("POST", URL);
    xhr.send(data);
  };
})();
