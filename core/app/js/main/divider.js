// подчеркивание заголовка зависит от ширины заголовка
document.addEventListener("DOMContentLoaded", function () {
  let headline = document.getElementsByClassName("section-header__headline");

  document
    .getElementsByClassName("section-header__headline")
    .insertAdjacentHTML(
      "afterend",
      '<span class="divider">~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</span>'
    );

  let divider = document.getElementsByClassName("divider");
});
