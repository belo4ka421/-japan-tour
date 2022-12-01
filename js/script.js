(function () {
  const header = document.querySelector(".header");
  window.onscroll = () => {
    if (window.pageYOffset > 50) {
      header.classList.add("header_active");
    } else {
      header.classList.remove("header_active");
    }
  };
})();

(function () {
  const burger = document.querySelector(".burger");
  const headerNav = document.querySelector(".header__nav");
  const burgerClose = document.querySelector(".header__nav-close ");

  burger.addEventListener("click", () => {
    headerNav.classList.add("header__nav_active");
  });

  burgerClose.addEventListener("click", () => {
    headerNav.classList.remove("header__nav_active");
  });
})();

// Navigation

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".header__link");

  for (let index = 0; index < links.length; index++) {
    links[index].addEventListener("click", function (event) {
      event.preventDefault();

      const stringID = event.target.getAttribute("href").substring(1);

      document.getElementById(stringID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  // Navigation LOGO
  const headerLogo = document.querySelector(".header__logo-pic");

  headerLogo.addEventListener("click", function (event) {
    event.preventDefault();
    const headerLink = headerLogo.closest(".header__logo-link");

    const logoID = headerLink.getAttribute("href").substring(1);
    document.getElementById(logoID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});
