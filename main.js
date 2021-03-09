var posBombe = [];
var posFree = [];
var maxNumber = 0;

difficolta();

//console.log(maxNumber);
//console.log(bombsGenerator(posBombe, 100));

posBombe = bombsGenerator(posBombe, maxNumber);

var score = gioco(posBombe, posFree, maxNumber);

console.log("punteggio: "+score);
document.getElementById('score').innerHTML = "Il tuo punteggio è: "+score;
document.getElementById('bombs').innerHTML = "Le bombe erano: "+posBombe;


function randomNumber(min, max) {
  if (isNaN(min) || isNaN(max)) {
    console.log("non sono numeri");
  } else {
  return Math.floor(Math.random() * (max - min) ) + min;
  }
}

//genero num pc non duplicati
function bombsGenerator(array, max){
  while (array.length < 16) {
    var num = randomNumber(1, max);

    if (!array.includes(num)) {
      array.push(num);
    }
  }
  return array;
}

function gioco(posBombe, posFree, maxNumber){
  while (posFree.length < maxNumber - 16) {
    var numUser = parseInt(prompt("Inserisci numero, evita le BOMBE!"));
    if (!isNaN(numUser) && numUser >= 1 && numUser <= maxNumber && !posFree.includes(numUser)) {
      if (!posBombe.includes(numUser)) {
        posFree.push(numUser);
      } else {
        return posFree.length;
      }
    } else alert("Numero fuori range o già inserito!");
  } return posFree.length;
}

function difficolta(){
  var diffUser = parseInt(prompt("Inserisci livello di difficoltà tra 0 e 2"));
  var valid=true;
  while (valid) {
    if (diffUser==0) {
      maxNumber=100;
      valid=false;
    } else if (diffUser==1) {
      maxNumber=80;
      valid=false;
    } else if (diffUser==2) {
      maxNumber=50;
      valid=false;
    } else diffUser = parseInt(prompt("Errore, inserisci difficoltà valida: 0, 1 oppure 2"));
    // } else alert("valore di difficolta non valido: Inserisci 0, 1 oppure 2");
  }
}
