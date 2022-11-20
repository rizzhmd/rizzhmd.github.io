
// DISPLAY NONE VERSUS AU CLIC  . DISPLAY  BLOCK SECTIONGO

document.getElementById('validPlay').addEventListener("click", function () {

    var etat = document.getElementById("index");
    if (etat.style.display === "block") {
        etat.style.display = "none";
    } else {
        etat.style.display = "none";
    }

    var etat = document.getElementById("versus");
    if (etat.style.display === "none") {
        etat.style.display = "block";
    } else {
        etat.style.display = "block";
    }

});


// BTN FEUILLE

document.getElementById('btnFeuille').addEventListener("click", function () {

    var etat = document.getElementById("versus");
    if (etat.style.display === "none") {
        etat.style.display = "block";
    } else {
        etat.style.display = "none";
    }
    var etat = document.getElementById("index");
    if (etat.style.display === "block") {
        etat.style.display = "none";
    } else {
        etat.style.display = "none";
    }

    var etat = document.getElementById("sectionGo");
    if (etat.style.display === "none") {
        etat.style.display = "block";
    } else {
        etat.style.display = "block";
    }

    var etat = document.getElementById("imgPokemonLgoEau");
    if (etat.style.display === "none") {
        etat.style.display = "block";
    } else {
        etat.style.display = "none";
    }
    var etat = document.getElementById("imgPokemonLgoFeu");
    if (etat.style.display === "none") {
        etat.style.display = "block";
    } else {
        etat.style.display = "none";
    }

    const imageArray = ["./img/feuille.png", "./img/eau.png", "./img/feu.png"];
    const image = document.querySelector("img");
    const button = document.querySelector("btnFeuille");

    window.onload = () => generateRandomPicture(imageArray);

    button.addEventListener("click", () => generateRandomPicture(imageArray));

    function generateRandomPicture(array) {
        let randomNum = Math.floor(Math.random() * array.length);
        image.setAttribute("src", array[randomNum]);
    }
});

// BTN FEU

document.getElementById('btnFeu').addEventListener("click", function () {

    var etat = document.getElementById("versus");
    if (etat.style.display === "none") {
        etat.style.display = "block";
    } else {
        etat.style.display = "none";
    }

    var etat = document.getElementById("index");
    if (etat.style.display === "block") {
        etat.style.display = "none";
    } else {
        etat.style.display = "none";
    }

    var etat = document.getElementById("sectionGo");
    if (etat.style.display === "none") {
        etat.style.display = "block";
    } else {
        etat.style.display = "block";
    }

    var etat = document.getElementById("imgPokemonLgoEau");
    if (etat.style.display === "none") {
        etat.style.display = "block";
    } else {
        etat.style.display = "none";
    }
    var etat = document.getElementById("imgPokemonLgoFeuille");
    if (etat.style.display === "none") {
        etat.style.display = "block";
    } else {
        etat.style.display = "none";
    }

    const imageArray = ["asset/img/feuille.png", "asset/img/eau.png", "asset/img/feu.png"];
    const image = document.querySelector("img");
    const button = document.querySelector("btnFeu");

    window.onload = () => generateRandomPicture(imageArray);

    button.addEventListener("click", () => generateRandomPicture(imageArray));

    function generateRandomPicture(array) {
        let randomNum = Math.floor(Math.random() * array.length);
        image.setAttribute("src", array[randomNum]);
    }


});

// BTN EAU

document.getElementById('btnEau').addEventListener("click", function () {

    var etat = document.getElementById("versus");
    if (etat.style.display === "none") {
        etat.style.display = "block";
    } else {
        etat.style.display = "none";
    }

    var etat = document.getElementById("index");
    if (etat.style.display === "block") {
        etat.style.display = "none";
    } else {
        etat.style.display = "none";
    }

    var etat = document.getElementById("sectionGo");
    if (etat.style.display === "none") {
        etat.style.display = "block";
    } else {
        etat.style.display = "block";
    }

    var etat = document.getElementById("imgPokemonLgoFeuille");
    if (etat.style.display === "none") {
        etat.style.display = "block";
    } else {
        etat.style.display = "none";
    }
    var etat = document.getElementById("imgPokemonLgoFeu");
    if (etat.style.display === "none") {
        etat.style.display = "block";
    } else {
        etat.style.display = "none";
    }


    const imageArray = ["asset/img/feuille.png", "asset/img/eau.png", "asset/img/feu.png"];
    const image = document.querySelector("img");
    const button = document.querySelector("btnEau");

    window.onload = () => generateRandomPicture(imageArray);

    button.addEventListener("click", () => generateRandomPicture(imageArray));

    function generateRandomPicture(array) {
        let randomNum = Math.floor(Math.random() * array.length);
        image.setAttribute("src", array[randomNum]);
    }

});

// CHOIX PERSO


// Quand le joueur clique sur le bouton "jouer", son nom de base sera Georgette si l'input était vide. Sinon, son pseudo choisi apparaîtra
document.getElementById('validPlay').addEventListener("click", function () {
    var firstname = document.getElementById('firstname').value;
    var nameplayer = document.getElementById('nameplayer');
    var namebase = document.getElementById('namebase');

    if (firstname == '') {
        nameplayer.style.display = 'none';
        namebase.style.display = 'block';
    }
    else {
        nameplayer.style.display = 'block';
        nameplayer.innerHTML = firstname;
        namebase.style.display = 'none';
    }
});

// Quand tu cliques sur valider sans faire ton choix, ton avatar de base est Aurore. Sinon ton choix apparaît. SECTION "SELECTION"

document.getElementById('avatarChoice1').addEventListener("click", function () {
    var choiceavatar = document.getElementById('choiceavatar');
    var baseavatar = document.getElementById('baseavatar');

    baseavatar.style.display = 'none';
    choiceavatar.innerHTML = '<img src="asset/img/avatar1B.png" alt="Aurore">'
});

document.getElementById('avatarChoice2').addEventListener("click", function () {
    var choiceavatar = document.getElementById('choiceavatar');
    var baseavatar = document.getElementById('baseavatar');

    baseavatar.style.display = 'none';
    choiceavatar.innerHTML = '<img src="asset/img/avatar2B.png" alt="Mewtwo">'
});

document.getElementById('avatarChoice3').addEventListener("click", function () {
    var choiceavatar = document.getElementById('choiceavatar');
    var baseavatar = document.getElementById('baseavatar');

    baseavatar.style.display = 'none';
    choiceavatar.innerHTML = '<img src="asset/img/avatar3B.png" alt="Louka">'
});

// Quand tu cliques sur valider sans faire ton choix, ton avatar de base est Aurore. Sinon ton choix apparaît. SECTION "COMBAT"

document.getElementById('avatarChoice1').addEventListener("click", function () {
    var choiceavatarL = document.getElementById('choiceavatarL');
    var baseavatarL = document.getElementById('baseavatarL');

    baseavatarL.style.display = 'none';
    choiceavatarL.innerHTML = '<img src="asset/img/avatar1B.png" alt="Aurore">'
});

document.getElementById('avatarChoice2').addEventListener("click", function () {
    var choiceavatarL = document.getElementById('choiceavatarL');
    var baseavatarL = document.getElementById('baseavatarL');

    baseavatarL.style.display = 'none';
    choiceavatarL.innerHTML = '<img src="asset/img/avatar2B.png" alt="Mewtwo">'
});

document.getElementById('avatarChoice3').addEventListener("click", function () {
    var choiceavatarL = document.getElementById('choiceavatarL');
    var baseavatarL = document.getElementById('baseavatarL');

    baseavatarL.style.display = 'none';
    choiceavatarL.innerHTML = '<img src="asset/img/avatar3B.png" alt="Louka">'
});

// PARTIE JEU

//   CHOIX
var btnFeu = document.getElementById('btnFeu');
var btnFeuille = document.getElementById('btnFeuille');
var btnEau = document.getElementById('btnEau');

//   SECTIONS
var choiceFight = document.getElementById('versus');
var viewFight = document.getElementById('sectionGo');
var youWin = document.getElementById('youwin');
var youLoose = document.getElementById('youloose');

//   AFFICHAGES
var userSelect = document.getElementById('avatarGo');
var iaSelect = document.getElementById('avatarGoPc');

//  INTEGRATION JOUEUR
var arrayChoice = ["Feu", "Feuille", "Eau"];

// RESULTAT-POINTS
var computerChoice = null;
var userChoice = null;
var userWin = 0;
var computerWin = 0;

// FONCTION DU JEU
btnFeu.addEventListener('click', function() {
   choiceFight.style.display = 'none';
   viewFight.style.display = 'block';
   userSelect.innerHTML = '<img src="asset/img/feu.png" alt="Feu">';
   userChoice = 'Feu';

   var randomArray = Math.floor(Math.random() * arrayChoice.length);

if(randomArray == 0){
   computerChoice = 'Feu';
   iaSelect.innerHTML = '<img src="asset/img/feu.png" alt="Feu">';
} else if(randomArray == 1){
   computerChoice = 'Feuille';
   iaSelect.innerHTML = '<img src="asset/img/feuille.png" alt="Feuille">';
} else {
   computerChoice = 'Eau';
   iaSelect.innerHTML = '<img src="asset/img/eau.png" alt="Eau">';
}
});

btnFeuille.addEventListener('click', function() {
   choiceFight.style.display = 'none';
   viewFight.style.display = 'block';
   userSelect.innerHTML = '<img src="asset/img/feuille.png" alt="Feuille">';
   userChoice = 'Feuille';

   var randomArray = Math.floor(Math.random() * arrayChoice.length);

if(randomArray == 0){
   computerChoice = 'Feu';
   iaSelect.innerHTML = '<img src="asset/img/feu.png" alt="Feu">';
} else if(randomArray == 1){
   computerChoice = 'Feuille';
   iaSelect.innerHTML = '<img src="asset/img/feuille.png" alt="Feuille">';
} else {
   computerChoice = 'Eau';
   iaSelect.innerHTML = '<img src="asset/img/eau.png" alt="Eau">';
}
});

btnEau.addEventListener('click', function() {
   choiceFight.style.display = 'none';
   viewFight.style.display = 'block';
   userSelect.innerHTML = '<img src="asset/img/eau.png" alt="Eau">';
   userChoice = 'Eau';

   var randomArray = Math.floor(Math.random() * arrayChoice.length);


if(randomArray == 0){
   computerChoice = 'Feu';
   iaSelect.innerHTML = '<img src="asset/img/feu.png" alt="Feu">';
} else if(randomArray == 1){
   computerChoice = 'Feuille';
   iaSelect.innerHTML = '<img src="asset/img/feuille.png" alt="Feuille">';
} else {
   computerChoice = 'Eau';
   iaSelect.innerHTML = '<img src="asset/img/eau.png" alt="Eau">';
}
});

document.getElementById('mancheSuivante').addEventListener('click', function() {
   if (userChoice == computerChoice) {
       alert('Zut, il y a égalité')

       document.getElementById('next').style.display = 'block';
       document.getElementById('rowFight').style.display = 'none';
       document.getElementById('gogo').style.display = 'none';
       document.getElementById('mancheSuivante').style.display = 'none';

       document.getElementById('next').addEventListener('click', function() {
        viewFight.style.display = 'none';
        choiceFight.style.display = 'block';
        document.getElementById('next').style.display = 'none';
       document.getElementById('rowFight').style.display = 'flex';
       document.getElementById('gogo').style.display = 'flex';
       document.getElementById('mancheSuivante').style.display = 'flex';
     });

   } else if ((userChoice == 'Feu' && computerChoice == 'Feuille') || (userChoice == 'Feuille' && computerChoice == 'Eau') ||(userChoice == 'Eau' && computerChoice == 'Feu')) {
       alert("Bien joué, c'est gagné !")
       userWin++;

       document.getElementById('next').style.display = 'block';
       document.getElementById('rowFight').style.display = 'none';
       document.getElementById('gogo').style.display = 'none';
       document.getElementById('mancheSuivante').style.display = 'none';

       document.getElementById('next').addEventListener('click', function() {
        viewFight.style.display = 'none';
        choiceFight.style.display = 'block';
        document.getElementById('next').style.display = 'none';
        document.getElementById('rowFight').style.display = 'flex';
        document.getElementById('gogo').style.display = 'flex';
        document.getElementById('mancheSuivante').style.display = 'flex';

     });
   } else {
       alert("Oups, c'est perdu !")
       computerWin++;

       document.getElementById('next').style.display = 'block';
       document.getElementById('rowFight').style.display = 'none';
       document.getElementById('gogo').style.display = 'none';
       document.getElementById('mancheSuivante').style.display = 'none';

       document.getElementById('next').addEventListener('click', function() {
        viewFight.style.display = 'none';
        choiceFight.style.display = 'block';
        document.getElementById('next').style.display = 'none';
       document.getElementById('rowFight').style.display = 'flex';
       document.getElementById('gogo').style.display = 'flex';
       document.getElementById('mancheSuivante').style.display = 'flex';
     });

   }
    if (userWin == 3) {
       viewFight.style.display = 'none';
       youWin.style.display = 'block';
   } else if (computerWin == 3) {
       viewFight.style.display = 'none';
       youLoose.style.display = 'block';
   }
});

document.getElementById('next').addEventListener('click', function() {
   viewFight.style.display = 'none';
   choiceFight.style.display = 'block';
})





// RESULTAT



var averag = document.getElementById('averag');
var sco = 123;
var gams = 68;
var result = sco/gams;
averag.innerHTML = result.toFixed(2);

