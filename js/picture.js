"use strict";

(function() {
  window.pictures = [];
  let likesNumber;
  let commentsNumber;

  const updateFilter = function () {
    window.render(pictures);
  };

  const showPopular = () => {
    window.render(popularFilter(pictures, 'likes'));
  }

  const showDiscuss = () => {
    window.render(popularFilter(pictures, 'comment'));
  }

  const popularFilter = (array, type) => {
    let newSortedList = array.slice();
    let sortedList = newSortedList.sort((left, right) => {
      if (type === 'likes') {
        return right.likes - left.likes;
      } else if (type === 'comment') {
        return right.comments.length - left.comments.length;
      }
    });
    return sortedList;
  }

  

  //buttons popular

  

  // Show images on main page
  const successHandler = picture => {
    pictures = picture;
    updateFilter();
  };

  const filterPopularButton = document.querySelector('#filter-popular');
  const filterNewButton = document.querySelector('#filter-new');
  const filterMoreDiscuss = document.querySelector('#filter-discussed');
  const removeAllActiveClasses = () => {
    filterPopularButton.classList.remove('img-filters__button--active');
    filterNewButton.classList.remove('img-filters__button--active');
    filterMoreDiscuss.classList.remove('img-filters__button--active');
  };

  filterPopularButton.addEventListener('click', (evt) => {
    showPopular();
    removeAllActiveClasses();
    filterPopularButton.classList.add('img-filters__button--active');
  });

  
  filterNewButton.addEventListener('click', (evt) => {
    updateFilter();
    removeAllActiveClasses();
    filterNewButton.classList.add('img-filters__button--active');
  });

  filterMoreDiscuss.addEventListener('click', (evt) => {
    showDiscuss();
    removeAllActiveClasses();
    filterMoreDiscuss.classList.add('img-filters__button--active');
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
