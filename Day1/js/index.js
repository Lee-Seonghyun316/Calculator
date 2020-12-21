// import App from './components/App.js';
//
// App();

function add(char) {
  var exp = document.getElementById("exp");
  exp.value = exp.value + char;
}
function calculate() {
  var exp = document.getElementById("exp");
  var result = eval(exp.value);
  document.getElementById("result").value = result;
}
function reset() {
  document.getElementById("display").value = "";
  document.getElementById("result").value = "";
}

