(function name(params) {
  const burger = document.querySelector(".burger")
  const headerNav = document.querySelector(".header__nav")
  const menuClose = document.querySelector(".header__nav-close")

  burger.addEventListener("click", () => {
    headerNav.classList.add("header__nav_active")
  })
  menuClose.addEventListener("click", () => {
    headerNav.classList.remove("header__nav_active")
  })
}())