document.querySelector(".header__icon").addEventListener("click", function () {
    this.classlist.toggle("active");
    document.querySelector(".navigation-list").classList.toggle("open");
} )