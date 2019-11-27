// подчеркивание заголовка зависит от ширины заголовка
let headline = document.getElementById('section__headline');
let divider = document.getElementById('divider');
divider.style.width = headline.offsetWidth + 'px';
// ширина заголовка задана как fit-content в файле _tools.scss