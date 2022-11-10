const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn =document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', btnOnClick);

function btnOnClick() {
  const sumaInputs = input1.value + input2.value;
  pResult.innerText = "Resutado: " + sumaInputs;
}

// si ponemos los input en un form, la forma sería esta

// form.addEventListener('submit', sumarInputValues);
// function sumarInputValues(event) {
//   event.defaultPrevented();
//   const sumaInputs = input1.value + input2.value;
//   pResult.innerText = "Resutado: " + sumaInputs;
//}