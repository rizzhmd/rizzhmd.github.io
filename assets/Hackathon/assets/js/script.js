let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let ten = document.getElementById("ten");
let eleven = document.getElementById("eleven");
let twelve = document.getElementById("twelve");
let thirteen = document.getElementById("thirteen");
let fourteen = document.getElementById("fourteen");
let fifteen = document.getElementById("fifteen");
let sixteen = document.getElementById("sixteen");
let seventeen = document.getElementById("seventeen");
let eighteen = document.getElementById("eighteen");
let nineteen = document.getElementById("nineteen");
let twenty = document.getElementById("twenty");
let twentyOne = document.getElementById("twenty-one");
let twentyTwo = document.getElementById("twenty-two");
let twentyThree = document.getElementById("twenty-three");
let twentyFour = document.getElementById("twenty-four");

let modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

let imgModal = document.getElementById("imgModal");

/*------------------------gestion des jours---------------------------- */
const d = new Date(); // recup de la date
let day = d.getDate(); // renvoie 13 (le jours du mois)

let calendarCase = {
  1: one, 2: two, 3: three, 4: four, 5: five, 6: six, 7:
    seven, 8: eight, 9: nine, 10: ten, 11: eleven, 12: twelve, 13: thirteen, 14:
    fourteen, 15: fifteen, 16: sixteen, 17: seventeen, 18: eighteen, 19: nineteen, 20: twenty, 21:
    twentyOne, 22: twentyTwo, 23: twentyThree, 24: twentyFour
};
let openCase = [];
// let openCaseStorage = JSON.parse(localStorage.openCase);
// function setstorage(){
//   openCaseStorage = JSON.parse(localStorage.openCase);
// }
function caseOpening(n) {
  if (day >= n) {
    modal.style.display = "block";
    imgModal.src = "assets/img/" + n + ".jpg";
    // calendarCase[n].classList.add("open");
    // openCase.push(n);
    // localStorage.setItem("openCase",JSON.stringify(openCase));
    // setstorage()
  }
}
// function test(){
//   for(let i = 0; i<openCaseStorage.length; i++){
//     calendarCase[openCaseStorage[i-1]].classList.add("open");
//   }
// }
// document.getElementById("body").onload = function (){test()};
one.onclick = function () { caseOpening(parseInt(one.innerHTML)) };
two.onclick = function () { caseOpening(parseInt(two.innerHTML)) };
three.onclick = function () { caseOpening(parseInt(three.innerHTML)) };
four.onclick = function () { caseOpening(parseInt(four.innerHTML)) };
five.onclick = function () { caseOpening(parseInt(five.innerHTML)) };
six.onclick = function () { caseOpening(parseInt(six.innerHTML)) };
seven.onclick = function () { caseOpening(parseInt(seven.innerHTML)) };
eight.onclick = function () { caseOpening(parseInt(eight.innerHTML)) };
nine.onclick = function () { caseOpening(parseInt(nine.innerHTML)) };
ten.onclick = function () { caseOpening(parseInt(ten.innerHTML)) };
eleven.onclick = function () { caseOpening(parseInt(eleven.innerHTML)) };
twelve.onclick = function () { caseOpening(parseInt(twelve.innerHTML)) };
thirteen.onclick = function () { caseOpening(parseInt(thirteen.innerHTML)) };
fourteen.onclick = function () { caseOpening(parseInt(fourteen.innerHTML)) };
fifteen.onclick = function () { caseOpening(parseInt(fifteen.innerHTML)) };
sixteen.onclick = function () { caseOpening(parseInt(sixteen.innerHTML)) };
seventeen.onclick = function () { caseOpening(parseInt(seventeen.innerHTML)) };
eighteen.onclick = function () { caseOpening(parseInt(eighteen.innerHTML)) };
nineteen.onclick = function () { caseOpening(parseInt(nineteen.innerHTML)) };
twenty.onclick = function () { caseOpening(parseInt(twenty.innerHTML)) };
twentyOne.onclick = function () { caseOpening(parseInt(twentyOne.innerHTML)) };
twentyTwo.onclick = function () { caseOpening(parseInt(twentyTwo.innerHTML)) };
twentyThree.onclick = function () { caseOpening(parseInt(twentyThree.innerHTML)) };
twentyFour.onclick = function () { caseOpening(parseInt(twentyFour.innerHTML)) };

/*-------------------fermeture modal---------------------- */
span.onclick = function () {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}









