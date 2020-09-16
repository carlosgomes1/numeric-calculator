const decimal = document.getElementById('decimal');
const binario = document.getElementById('binario');
const octal = document.getElementById('octal');
const hexadecimal = document.getElementById('hexadecimal');
const button = document.getElementById('button');

decimal.addEventListener('keyup', (event) => {
  binario.value = Number(decimal.value).toString(2);
  octal.value = Number(decimal.value).toString(8);
  hexadecimal.value = Number(decimal.value).toString(16).toUpperCase();
});

binario.addEventListener('keyup', (event) => {
  decimal.value = parseInt(binario.value, 2);
  octal.value = parseInt(binario.value, 2).toString(8);
  hexadecimal.value = parseInt(binario.value, 2).toString(16).toUpperCase();
});

octal.addEventListener('keyup', (event) => {
  decimal.value = parseInt(octal.value, 8);
  binario.value = parseInt(octal.value, 8).toString(2);
  hexadecimal.value = parseInt(octal.value, 8).toString(16);
});

hexadecimal.addEventListener('keyup', (event) => {
  decimal.value = parseInt(hexadecimal.value, 16);
  binario.value = parseInt(hexadecimal.value, 16).toString(2);
  octal.value = parseInt(hexadecimal.value, 16).toString(8);
});

button.addEventListener('click', (event) => {
  decimal.value = 0;
  binario.value = 0;
  octal.value = 0;
  hexadecimal.value = 0;
});
