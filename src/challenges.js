// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;
  return result;
}

// Desafio 3
//O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array. A divisão é feita procurando um padrão, onde o padrão é fornecido como o primeiro parâmetro na chamada do método.
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split

function splitSentence(phrase) {
  let result = phrase.split(' ');
  return result;
}

// Desafio 4
function concatName(listaDeNomes) {
  let last = listaDeNomes[listaDeNomes.length - 1];
  let first = listaDeNomes[0];
  let result = last + ', ' + first;
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  let result = wins * 3 + ties * 1;
  return result;
}

// Desafio 6
//A função Math.max() retorna o maior de um ou mais números.
//O operador spread ( ...) nos permite copiar rapidamente todo ou parte de um array ou objeto existente em outro array ou objeto.
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max
function highestCount(valuesArr) {
  let max = Math.max(...valuesArr);
  let result = 0;
  for (let index = 0; index < valuesArr.length; index += 1) {
    if (max === valuesArr[index]) {
      result += 1;
    }
  }
  return result;
}
let teste = [0, 0, 0];
console.log(highestCount(teste));

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
