// отмена перезагрузки страницы при отправке формы
let eventOff = document.querySelector('#event-off');
let form = document.querySelector('form');

eventOff.onclick = function (event) {
	event.preventDefault(); // предотвращает перезагрузку страници при попытке отправить пустую форму
	console.log(serialize(form));
}


// валидация формы

function validateForm() {
}

// Проверка поля name
function validateName(){
	let formName = document.forms["mainForm"]["fname"].value;

	if (formName.length == 0) {
		document.getElementById('fname').placeholder = 'Поле обязательно для заполнения';
    	document.getElementById('fname').style = 'border-color: red;';
		return false;
	}
  	else {
		document.getElementById('fname').style = '';
		return true;
	}
}
