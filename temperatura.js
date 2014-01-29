"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
function calculate() {
  var result;
  var original = document.getElementById("original");
  var temp = original.value;
  // El formato es tal que: ['+' | '-']? [0-9]+ ('.'[0-9]* (['e' | 'E']['+' | '-']? [0-9]+)?)? (' '*) (['C' | 'c' | 'F' | 'f'])
  var regexp = /^([+-]?\d+(?:\.\d*)?(?:[e][+-]?\d+)?)\s*([cf])$/i;
  // Usamos ^ para definir el inicio del string y $ para definir el final. Así, no se aceptan expresiones como "24Fffgfgkunju"
  
  var m = temp.match(regexp);
  
  if (m) {
    var num = m[1];
    var type = m[2];
    num = parseFloat(num);
    if (type == 'c' || type == 'C') {
      result = (num * 9/5)+32;
      result = result.toFixed(1) + " Farenheit";
    }
    else {
      result = (num - 32)*5/9;
      result = result.toFixed(1) + " Celsius";
    }
    converted.innerHTML = result;
  }
  else {
    converted.innerHTML = "ERROR! Pruebe algo como '-4.2C'";
  }
}