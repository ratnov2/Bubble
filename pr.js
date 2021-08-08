let game = document.querySelector('.game');
let rows = 5;
let cols = 16

function boolsCreate() {
  let cols = 16;
  let rows = 5;
  let result = [];
  for (let i = 0; i < 4; i++) {

    for (let j = 0; j < cols; j++) {
      if (result[i] == undefined) {
        result[i] = [];
      }
      div = document.createElement('div');
      result[i][j] = div;
      if (i % 2 == 0 && j == 0) {
        div.classList.add('marginLeftClass');
      }
      div.classList.add('bolls');
      game.appendChild(div);
    }
  }
  return result;
}
let rk = boolsCreate();

///////////// 1)ПОЛУЧИТЬ КООРДИНАТЫ ШАРОВ
////////////  2) ФУНКЦИЯ ОПРЕДЕЛЯЮЩАЯ КООРДИНАТЫ НУЖНОЙ ТОЧКИ МАССИВА.
////////////  3)бЕРЁМ РАНДОМНУЮ ТОЧКУ - ЗАПИСАТЬ ТУДА НАШ ШАР.
function addFirstRiad() {
  rk = getNewArray();
  console.log(rk);
  if (!(rk[1][0].classList.contains('marginLeftClass'))) {
    rk.unshift([]);
    for (let j = 0; j < cols; j++) {
      div = document.createElement('div');
      div.classList.add('bolls')
      rk[0].unshift(div);
    }
    return rk;
  }
  else {
    rk.unshift([]);

    for (let j = 0; j < cols; j++) {
      div = document.createElement('div');
      div.classList.add('bolls');
      rk[0].unshift(div);
    }
    rk[0][0].classList.add('marginLeftClass');
    return rk;
  }
}

function getNewArray() {///Исправить функцию, работает только при ровном количестве элементов в каждом ряду.Исправить скорее всего привязкой элементов к полю координатой. Количество строк найти по последнему привязанному элементу(его координате).Количество столбцов не меняется скорее всего
  let mas = game.querySelectorAll('.bolls');
  let k = 0;
  let result = [];
  for (let i = 0; i < (mas.length / cols); i++) {
    result[i] = [];
    for (let j = 0; j < cols; j++) {
      result[i][j] = mas[k];
      k++;
    }
  }
  return result;
}
getNewArray();
//Сделать функцию, когда 3 раза ничего не произошло
function newArrayBolls() {
  let k = true;
  if (k) { ///////Сделать бесдействие в 3 хода 
    let result = addFirstRiad();
    game.innerHTML = '';
    for (let i = 0; i < result.length; i++) {
      for (let j = 0; j < 16; j++) {
        game.appendChild(result[i][j]);
      }
    }
  }
}
//newArrayBolls();   Функция добавления нового верхнего ряда, вроде без багов.


function getCoordPoint(i, j, coord, rk) {
  // console.log(rk[0][1]);
  coordX = 31 * (j);
  coordY = 31 * (i);
  console.log(coordX, coordY);
}
