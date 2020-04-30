// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("heroSlide");
//   if (n > x.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = x.length}
//   for (i = 0; i < x.length; i++) {
//      x[i].style.display = "none";
//   }
//   x[slideIndex-1].style.display = "block";
// }


// прежде чем писать жаба скрипт код объявляй window.onload = function!!!!
// ООПэшный слайдер, можно переиспользовать много много раз, просто при вызове менять параметры вот пример:
/*
  new Slider({
      content: '.content_slider-2 .info__slide',
      btn_prev: '.content_slider-2 .btn_prev',
      btn_next: '.content_slider-2 .btn_next',
      auto: true,
      rate: 4500
  });


*/
window.onload = function() {

  // вызов слайдера с опциями:
  new Slider({
      content: '.content_slider .info__slide',
      btn_prev: '.content_slider .btn_prev',
      btn_next: '.content_slider .btn_next',
      auto: true,
      rate: 4500
  });
	
	// Храним в классе весь функционал слайдера:
	function Slider(obj) {
		this.content = document.querySelectorAll(obj.content); //получим всем элементы

		this.auto = obj.auto;

		this.btn_prev = obj.btn_prev;
		this.btn_next = obj.btn_next;

		this.rate = obj.rate || 1000;

		//счетчик на нуле
		var i = 0;

		//присваиваем переменной this
		var slider = this;

		// переключалки:
		this.prev = function() {
			slider.content[i].classList.remove('showed');
			i--;
				if (i < 0) { i = slider.content.length - 1; }

			slider.content[i].classList.add('showed');
		}

		this.next = function() {
			slider.content[i].classList.remove('showed');
			i++;

			if (i >= slider.content.length) { i = 0; }

			slider.content[i].classList.add('showed');
		}

		//получим кнопки:
		document.querySelector(slider.btn_prev).onclick = slider.prev;
		document.querySelector(slider.btn_next).onclick = slider.next;

		if (slider.auto) { setInterval(slider.next, slider.rate); }
	}
}