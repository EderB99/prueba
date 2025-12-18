/*TODO HECHO POR MUA (Sin IA) *risita orgullosa* */

let popup = document.querySelector('#menu-popup');
let arrayArticulos = document.querySelectorAll('.lista-productos li');

for (let i = 0; i < arrayArticulos.length; i++) {

    let pArticulos = arrayArticulos[i].querySelector("p");
    let pArticulosCLON = pArticulos.cloneNode(true); //Para guardar la info original

    /*Recorto el texto de los artículos*/
    let pRecortado = pArticulos.innerText.substring(0, 50) + "... <span>Leer más</span>";
    pArticulos.innerHTML = pRecortado;

    /*Activador de menú Popup con la info del artículo*/
    arrayArticulos[i].addEventListener(
        'click',
        function () {
            /*Info del artículo*/
            let imgArticulo = arrayArticulos[i].querySelector("img");

            /*Info en el popup*/
            let imgPopup = document.querySelector("#menu-popup .popup-info-articulo img");
            let tituloPopup = document.querySelector("#menu-popup .popup-info-titulo");
            let negritaPopup = document.querySelector("#menu-popup .popup-info-bold");
            let principalPopup = document.querySelector("#menu-popup .popup-info-principal");

            /*PONGO LA IMAGEN*/
            imgPopup.src = imgArticulo.getAttribute("src");
            imgPopup.alt = imgArticulo.getAttribute("alt");
            imgPopup.title = "Un michi te prepara un " + imgArticulo.getAttribute("alt");

            /*PONGO EL TEXTO*/
            tituloPopup.innerText = imgArticulo.alt;

            let textoSeparado = pArticulosCLON.innerHTML.split("<br>");
            console.log(textoSeparado);
            if (textoSeparado[1] != undefined) {
                negritaPopup.style.display = "block";
                negritaPopup.innerHTML = textoSeparado[0];
                principalPopup.innerText = textoSeparado[1];
            } else {
                negritaPopup.style.display = "none";
                principalPopup.innerText = textoSeparado[0];
            }

            /*MIESTRO EL POPUP*/
            popup.classList.remove('js-popUp-invisible');
            popup.classList.add('js-popUp-visible');
        },
        false
    );
}
//CERRAR EL POPUP
let haClickadoDentro = false;

let divPopupPrincipal = popup.querySelector(".popup-info-articulo");
divPopupPrincipal.addEventListener(
    'click',
    function () {
        haClickadoDentro = true
    },
    false
);
popup.addEventListener(
    'click',
    function () {
        if (!haClickadoDentro) {
            popup.classList.add('js-popUp-invisible');
            popup.classList.remove('js-popUp-visible');
        }
        haClickadoDentro = false;
    },
    false
);

//Cambio de nav al scrollear
let miHeader = document.querySelector("header");
let logo = document.querySelector(".logo");
let miNav = document.querySelector(".menu-nav");
let subMenuNav = document.querySelector(".submenu-servicios");
var estaArriba = 0;

window.addEventListener(
    'scroll',
    function () {
        estaArriba = window.scrollY || document.documentElement.scrollTop;
        if (estaArriba == 0) {
            miHeader.classList.add("jsTamañoTop");

            logo.src = "https://i.postimg.cc/LhKJdqPQ/BCO_bc2453b0_2ac7_4337_b585_44d93388aa09.png";
            logo.classList.remove("jsLogoChiquito");

            subMenuNav.classList.remove("js-submenu-servicios-chiquito");

            miNav.classList.remove("js-menu-nav-chiquito");
        } else {
            miHeader.classList.remove("jsTamañoTop");

            logo.src = "https://i.postimg.cc/xqDXrkm3/Proyecto_nuevo2.png";
            logo.classList.add("jsLogoChiquito");

            subMenuNav.classList.add("js-submenu-servicios-chiquito");

            miNav.classList.add("js-menu-nav-chiquito");
        }
    },
    false
);

//Botón de ocultar nav
let imgHeader = document.querySelector("header button img");
let haClickado = false;

imgHeader.addEventListener(
    'click',
    function () {
        if (!haClickado) {
            imgHeader.src = "https://i.postimg.cc/dQrFVScJ/MANO_MOSTRAR.png";
            imgHeader.title = "Mostrar menú";
            imgHeader.classList.remove('botonOculta');
            imgHeader.classList.add('botonMuestra');

            miHeader.classList.add('jsHeaderOculto');

            haClickado = true;
        } else {
            imgHeader.src = "https://i.postimg.cc/FF3vHnXN/mano_ocultar.png";
            imgHeader.title = "Ocultar menú";
            imgHeader.classList.remove('botonMuestra');
            imgHeader.classList.add('botonOculta');


            miHeader.classList.remove('jsHeaderOculto');
            haClickado = false;
        }
    },
    false
);

//Tacita del menú de nav
let liMenuNav = document.querySelectorAll("nav li");
let aMenuNav = document.querySelectorAll("nav a");
let imgNuevaNav = document.createElement("img");
imgNuevaNav.src = "https://media.tenor.com/hYF2xR0mYTIAAAAi/coffee-tea.gif";
imgNuevaNav.alt = "";
imgNuevaNav.classList.add("img-tacita-nav");


for (let i = 0; i < liMenuNav.length; i++) {
    liMenuNav[i].addEventListener(
        "mouseenter",
        function () {
            if (estaArriba != 0) {
                imgNuevaNav.classList.add("img-tacita-chiquita");
            } else {
                imgNuevaNav.classList.remove("img-tacita-chiquita");
            }
            aMenuNav[i].appendChild(imgNuevaNav);
        },
        false
    );
    liMenuNav[i].addEventListener(
        "mouseleave",
        function () {
            imgNuevaNav.remove();

        },
        false
    );
}

//Mostrar iFrame en encontrarnos
let iframeEncontrarnos = document.querySelector(".mapaEncontrarnos iframe");
let miDivIframe = document.querySelector(".mapaEncontrarnos");
let spanIframe = document.querySelector(".mapaEncontrarnos span")

miDivIframe.addEventListener(
    'click',
    function () {
        iframeEncontrarnos.style.visibility = "visible";
        spanIframe.style.display = "none";
    },
    false
);

let pausaTimeout;
miDivIframe.addEventListener(
    "mouseleave",
    function () {
        pausaTimeout = setTimeout(() => {
            iframeEncontrarnos.style.visibility = "hidden";
            spanIframe.style.display = "flex";
        }, 5000);

    },
    false
);

miDivIframe.addEventListener(
    "mouseenter",
    function () {
        clearTimeout(pausaTimeout);
    },
    false
);

/* Transición de polaroids
Código de internet*/
const polaroids = document.querySelectorAll('.polaroid');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // solo una vez
      }
    });
  },
  {
    threshold: 0.4
  }
);

polaroids.forEach(polaroid => {
  observer.observe(polaroid);
});