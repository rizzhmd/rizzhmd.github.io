var slide = new Array("img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg", "img/photo4.jpg");
var slideAlt = new Array("image 1", "image 2", "image 3", "image 4");
var linkHref = new Array("school.html", "school.html", "lien3", "lien4");
var numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").setAttribute('src', slide[numero]);
    document.getElementById("slide").setAttribute('alt', slideAlt[numero]);
    document.getElementById("linkSlider").setAttribute('href', linkHref[numero]);
}

