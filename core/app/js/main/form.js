// отмена перезагрузки страницы при отправке формы
let eventOff = document.querySelector("#event-off");
let form = document.querySelector("form");

eventOff.onclick = function (event) {
  event.preventDefault(); // предотвращает перезагрузку страници при попытке отправить пустую форму
  console.log(serialize(form));
};

// валидация формы

function validateForm() {}

// Проверка поля name
function validateName() {
  let formName = document.forms["mainForm"]["fname"].value;
  let fname = document.getElementById("fname");

  if (formName.length == 0) {
    fname.placeholder = "Поле обязательно для заполнения";
    fname.style = "border-color: red;";
    return false;
  }

  if (/^[a-zA-Z1-9]+$/.test(formName) === false) {
    alert("В имени должны быть только латинские буквы");
    fname.style = "border-color: red;";
    return false;
  }

  if (parseInt(formName.substr(0, 1))) {
    alert("Имя должно начинаться с буквы");
    fname.style = "border-color: red;";
    return false;
  } else {
    fname.style = "";
    return true;
  }
}
