"use strict";

(function() {
  window.pictures = [];
  let likesNumber;
  let commentsNumber;

  const updateFilter = function() {
    window.render(pictures);
  };

  const showPopular = () => {
    window.render(popularFilter(pictures, "likes"));
  };

  const showDiscuss = () => {
    window.render(popularFilter(pictures, "comment"));
  };

  const popularFilter = (array, type) => {
    let newSortedList = array.slice();
    let sortedList = newSortedList.sort((left, right) => {
      if (type === "likes") {
        return right.likes - left.likes;
      } else if (type === "comment") {
        return right.comments.length - left.comments.length;
      }
    });
    return sortedList;
  };

  

  const debounce = (cb) => {
    let isTimeOut;
    if (isTimeOut) {
      window.clearTimeout(isTimeOut);
    }

    isTimeOut = setTimeout(() => {
      cb();
      
      
    }, 500);
  };

  const successHandler = picture => {
    pictures = picture;
    updateFilter();
  };

  const filterPopularButton = document.querySelector("#filter-popular");
  const filterNewButton = document.querySelector("#filter-new");
  const filterMoreDiscuss = document.querySelector("#filter-discussed");
  const removeAllActiveClasses = () => {
    filterPopularButton.classList.remove("img-filters__button--active");
    filterNewButton.classList.remove("img-filters__button--active");
    filterMoreDiscuss.classList.remove("img-filters__button--active");
  };

  filterPopularButton.addEventListener("click", evt => {
    removeAllActiveClasses();
    filterPopularButton.classList.add("img-filters__button--active");
    debounce(showPopular);
  });

  filterNewButton.addEventListener("click", evt => {
    removeAllActiveClasses();
    filterNewButton.classList.add("img-filters__button--active");
    debounce(updateFilter);
  });

  filterMoreDiscuss.addEventListener("click", evt => {
    removeAllActiveClasses();
    filterMoreDiscuss.classList.add("img-filters__button--active");
    debounce(showDiscuss);
  });

  const errorHandle = errorMessage => {
    let node = document.createElement("div");
    node.style =
      "z-index: 100; margin: 0 auto; text-align: center; background-color: red;";
    node.style.position = "absolute";
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = "30px";
    node.textContent = errorMessage;
    document.body.insertAdjacentElement("afterbegin", node);
  };

  window.load(successHandler, errorHandle);

  // showImages(imageList);

  // End show images on main page;
})();
