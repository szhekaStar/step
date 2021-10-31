const dropdown = document.querySelector(".header__dropdown-btn");

dropdown.addEventListener("click", function() {        

    document.querySelector(".header__nav").classList.toggle("header__nav--is-active");

    const listItems = document.querySelectorAll(".header__nav-item");
    for (let listItem of listItems) {
        listItem.classList.toggle("header__nav-item--is-active");
    }
    dropdown.querySelector(".dropdown-btn__top-line").classList.toggle("dropdown-btn__top-line--is-active");
    dropdown.querySelector(".dropdown-btn__bottom-line").classList.toggle("dropdown-btn__bottom-line--is-active");
    dropdown.querySelector(".dropdown-btn__left-line").classList.toggle("dropdown-btn__left-line--is-active");
    dropdown.querySelector(".dropdown-btn__right-line").classList.toggle("dropdown-btn__right-line--is-active");
    dropdown.querySelector(".dropdown-btn__center-line").classList.toggle("dropdown-btn__center-line--is-active");
});