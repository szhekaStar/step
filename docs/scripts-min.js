const t=document.querySelector(".header__dropdown-btn");t.addEventListener("click",function(){var e;document.querySelector(".header__nav").classList.toggle("header__nav--is-active");for(e of document.querySelectorAll(".header__nav-item"))e.classList.toggle("header__nav-item--is-active");t.querySelector(".dropdown-btn__top-line").classList.toggle("dropdown-btn__top-line--is-active"),t.querySelector(".dropdown-btn__bottom-line").classList.toggle("dropdown-btn__bottom-line--is-active"),t.querySelector(".dropdown-btn__left-line").classList.toggle("dropdown-btn__left-line--is-active"),t.querySelector(".dropdown-btn__right-line").classList.toggle("dropdown-btn__right-line--is-active"),t.querySelector(".dropdown-btn__center-line").classList.toggle("dropdown-btn__center-line--is-active")});