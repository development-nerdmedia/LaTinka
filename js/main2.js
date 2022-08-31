AOS.init();
var estadoform = sessionStorage.getItem("estado");
const URLactual = window.location;

if (window.performance.navigation.type == 1){
    // e.preventDefault();
    sessionStorage.setItem('estado', `none`);
    location.href = URLactual;
}



if (estadoform == "none") {
    document.querySelector(".pagethanksDesaprobada").classList.remove('open');
    document.querySelector(".pagethanksAprobada").classList.remove('open');
    document.querySelector(".pagethanksPreguntas").classList.remove('open');
    document.querySelector("body").classList.remove("scrollhidden")
}
if (estadoform == "aprobada") {
    document.querySelector(".pagethanksAprobada").classList.add('open');
    document.querySelector("body").classList.add("scrollhidden")
}
if (estadoform == "desaprobada") {
    document.querySelector(".pagethanksDesaprobada").classList.add('open');
    document.querySelector("body").classList.add("scrollhidden")
}
if (estadoform == "preguntarecibida") {
    document.querySelector(".pagethanksPreguntas").classList.add('open');
    document.querySelector("body").classList.add("scrollhidden")
}



var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();


/* efecto de desplazamiento de los botones de menú */

const menuItems = document.querySelectorAll(
    'a[href^="#"]'
);

function getScrollTopByHref(element) {
    const id = element.getAttribute("href");
    return document.querySelector(id).offsetTop;
}

function scrollToPosition(to) {
    smoothScrollTo(0, to);
}

function scrollToIdOnClick(event) {
    event.preventDefault();
    const to = getScrollTopByHref(event.currentTarget) - 80;
    scrollToPosition(to);
}

menuItems.forEach((item) => {
    item.addEventListener("click", scrollToIdOnClick);
});
function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();

    duration = typeof duration !== "undefined" ? duration : 600;

    const easeInOutQuart = (time, from, distance, duration) => {
        if ((time /= duration / 2) < 1)
            return (distance / 2) * time * time * time * time + from;
        return (
            (-distance / 2) * ((time -= 2) * time * time * time - 2) + from
        );
    };

    const timer = setInterval(() => {
        const time = new Date().getTime() - startTime;
        const newX = easeInOutQuart(time, startX, distanceX, duration);
        const newY = easeInOutQuart(time, startY, distanceY, duration);
        if (time >= duration) {
            clearInterval(timer);
        }
        window.scroll(newX, newY);
    }, 1000 / 60); // 60 fps
}

/* END efecto de desplazamiento de los botones de menú */

if ($('.home').length > 0) {
    $(".home .part1 .img").stick_in_parent({
        offset_top: 180
    });
}


MyApp = {
    testimonios: {
        init: function () {
            var mediaqueryList = window.matchMedia("(max-width: 1201px)");
            if (mediaqueryList.matches) {
                if ($(".img-tienda").length > 0) {
                    $(".img-tienda").stick_in_parent({
                        offset_top: 180,
                        offset_right: 52,
                    });
                }

                if ($('.person-testimonios .cards .card').length > 0) {
                    listaItem = document.querySelectorAll(".person-testimonios .cards .card");
                    for (let i = 0; i < listaItem.length; i++) {
                        listaItem[i].setAttribute("data-aos", "fade-right")
                        listaItem[i].setAttribute("data-aos-once", "true")
                        listaItem[i].setAttribute("data-aos-offset", "570")
                    }
                }
            } else {
                if ($(".img-tienda").length > 0) {
                    $(".img-tienda").stick_in_parent({
                        offset_top: 180,
                    });
                }
            }
        }
    },
    preguntas: {
        init: function () {
            let collapsible = document.querySelectorAll(".faq-container");
            collapsible.forEach((element) => {
                element.addEventListener("click", (element) => {
                    if (!element.target.classList.contains('open')) {
                        for (let i = 0; i < collapsible.length; i++) {
                            collapsible[i].classList.remove("open");
                        }
                        element.target.classList.add("open");
                    } else {
                        element.target.classList.remove("open");
                    }
                });
            });
        }
    },
    contacto: {
        init: function () {
            var formespacioinput = document.querySelectorAll('.home .form-input');
            var formespacioselect = document.querySelectorAll('.home form select');
            var valorArea = document.querySelector('#area');
            const thanksAprobada = document.getElementById('pagethanksAprobada');
            const thanksDesaprobada = document.getElementById('pagethanksDesaprobada');
            var thanks = document.querySelectorAll('.thanks');

            $(document).on("wheel", "input[type=number]", function (e) { $(this).blur(); });
            var mensaje = document.getElementById('msm');
            const form = document.getElementById('form');

            form.addEventListener('focusin', (event) => {
                if (event.target.type === "radio" & event.target.name === "ubicacion" & event.target.checked == true) {
                    var elemento = document.querySelectorAll('input[name="ubicacion"]')
                    for (var i = 0; i < elemento.length; i++) {
                        elemento[i].setAttribute("validate", "1");
                    }
                }
                if (event.target.type === "radio" & event.target.name === "tipoArea" & event.target.checked == true) {
                    var elemento = document.querySelectorAll('input[name="tipoArea"]')
                    // validarDatos(form);
                    for (var i = 0; i < elemento.length; i++) {
                        elemento[i].setAttribute("validate", "1");
                    }
                }
            });

            form.addEventListener('focusout', (event) => {
                // if (event.target.value != '') {
                // 	event.target.style.background = 'green';
                // 	event.target.setAttribute('validate', '1')

                // }else{
                // 	event.target.style.background = 'red';
                // 	event.target.setAttribute('validate', '0')
                // }
                if (event.target.type === "radio" & event.target.name === "ubicacion" & event.target.checked == true) {
                    var elemento = document.querySelectorAll('input[name="ubicacion"]')
                    for (var i = 0; i < elemento.length; i++) {
                        elemento[i].setAttribute("validate", "1");
                    }
                }
                if (event.target.type === "radio" & event.target.name === "tipoArea" & event.target.checked == true) {
                    var elemento = document.querySelectorAll('input[name="tipoArea"]')
                    for (var i = 0; i < elemento.length; i++) {
                        elemento[i].setAttribute("validate", "1");
                    }
                }
                document.addEventListener("click", function (e) {
                    if (e.target.closest(".home form input[type='submit']")) {
                        validarDatos(form, e);
                    }
                })
            });

            function validarDatos(form, e) {
                var dato = 0;
                var info = document.querySelectorAll("#form [validate]");
                Array.from(info).forEach(element => {
                    if (element.value == '' || (element.checked == false & element.value == "on" & element.type == "checkbox")) {
                        // console.log(element.checked);
                        dato++
                    }
                    if (element.type === "radio" & element.name === "tipoArea" & element.checked == false & element.attributes.validate.value === "0") {
                        dato++
                    }
                    if (element.type === "radio" & element.name === "ubicacion" & element.checked == false & element.attributes.validate.value === "0") {

                        dato++
                    }
                });
                if (dato == 0) {
                    mensaje.classList.add('mostrar');
                    e.preventDefault(e)

                } else {
                    console.log(dato + 'falta');
                    mensaje.classList.remove('mostrar');
                }
            }

            function validateInput(e) {
                for (let y = 0; y < formespacioinput.length; y++) {
                    if (!formespacioinput[y].value) {
                        formespacioinput[y].classList.add("error");
                        e.preventDefault();
                    } else {
                        formespacioinput[y].classList.remove("error");
                    }
                }
            }

            function validateSelect(e) {
                for (let y = 0; y < formespacioselect.length; y++) {
                    if (formespacioselect[y].value == "") {
                        formespacioselect[y].classList.add("error");
                        e.preventDefault();
                    } else {
                        formespacioselect[y].classList.remove("error");
                    }
                }
            }

            function validatecheckbox(e) {
                if (!document.querySelector('input[name="tipoArea"]:checked')) {
                    document.querySelector(".texto-check-area").classList.add("error");
                    e.preventDefault();
                } else {
                    document.querySelector(".texto-check-area").classList.remove("error");
                }
                if (!document.querySelector('input[name="ubicacion"]:checked')) {
                    document.querySelector(".texto-check-ubi").classList.add("error");
                    e.preventDefault();
                } else {
                    document.querySelector(".texto-check-ubi").classList.remove("error");
                }
            }

            function validatePoliticas(e) {
                if ($('#terminos').is(':checked')) {
                    document.querySelector(".checkbox-box").classList.remove("error");
                } else {
                    document.querySelector(".checkbox-box").classList.add("error");
                }
            }

            document.addEventListener("click", function (e) {
                if (e.target.closest(".home form select")) {
                    formespacioselect.forEach(function (shinyItem2) {
                        shinyItem2.parentElement.classList.remove("active");
                    })
                    e.target.parentElement.classList.add("active");
                } else {
                    formespacioselect.forEach(function (shinyItem2) {
                        shinyItem2.parentElement.classList.remove("active");
                    });
                }
                if (e.target.closest(".thanks .btn")) {
                    for (let i = 0; i < thanks.length; i++) {
                        thanks[i].classList.remove("open");
                        document.querySelector("body").classList.remove("scrollhidden")
                        sessionStorage.setItem('estado', `none`);
                        // document.querySelector('.home form').submit();
                        // document.querySelector('.home form').reset();
                    }
                }
                if (e.target.closest(".home form input[type='submit']")) {
                    validateInput(e);
                    validateSelect(e);
                    validatecheckbox(e);
                    validatePoliticas(e);
                    if (document.querySelector("#msm.mostrar")) {
                        // document.querySelector('.home form').submit();
                        if (valorArea.value < 70 & valorArea.value > 30) {
                            sessionStorage.setItem('estado', `aprobada`);
                            document.querySelector('.home form').submit();
                            // thanksAprobada.classList.add('open');
                            // document.querySelector("body").classList.add("scrollhidden")
                        } else {
                            sessionStorage.setItem('estado', `desaprobada`);
                            document.querySelector('.home form').submit();
                            // thanksDesaprobada.classList.add('open');
                            // document.querySelector("body").classList.add("scrollhidden")
                        }
                    }
                }
            })
        }
    },
    inputTarjeta: {
        init: function () {
            var formespacioinput2 = document.querySelectorAll(".tarjeta-preg input[type='text']");
            const thanksPreguntas = document.getElementById('pagethanksPreguntas');

            function validateInput2(e) {
                for (let y = 0; y < formespacioinput2.length; y++) {
                    if (!formespacioinput2[y].value) {
                        formespacioinput2[y].classList.add("error");
                        e.preventDefault();
                    } else {
                        sessionStorage.setItem('estado', `preguntarecibida`);
                        document.querySelector('.home form').submit();
                        // thanksPreguntas.classList.add('open');
                        // document.querySelector('.tarjeta-preg form').reset();
                        // document.querySelector("body").classList.add("scrollhidden")
                    }
                }
            }

            document.addEventListener("click", function (e) {
                if (e.target.closest(".tarjeta-preg form input[type='submit']")) {
                    validateInput2(e)
                }
				if (e.target.closest(".pagethanksPreguntas .btn")) {
                    document.querySelector(".pagethanksPreguntas").classList.remove("open");
                    sessionStorage.setItem('estado', `none`);
                    document.querySelector(".pagethanksPreguntas").classList.remove("scrollhidden")
                    // document.querySelector('.tarjeta-preg form').submit();
                    // document.querySelector('.tarjeta-preg form').reset();
                }
            })
        }
    },
    menupage: {
        init: function () {
            var enlacesMenu = document.querySelectorAll('.menupage .content ul li a');

            window.onscroll = function () {
                var scroll = document.documentElement.scrollTop;
                if (scroll <= 0) {
                    enlacesMenu.forEach((enlace) => enlace.classList.remove('select'));
                }
            }

            enlacesMenu.forEach((elemento) => {
                elemento.addEventListener('click', (evento) => {
                    enlacesMenu.forEach((enlace) => enlace.classList.remove('select'));
                    evento.target.classList.add('select');
                })
            })

            document.addEventListener("click", function (e) {
                if (e.target.closest("header nav .navigation ul li.btmmenumovil")) {
                    document.querySelector(".menupage").classList.add("open")
                    document.querySelector("body").classList.add("scrollhidden")
                }
                if (e.target.closest(".menupage .top img") || e.target.closest(".menupage .content ul li a")) {
                    document.querySelector(".menupage").classList.remove("open")
                    document.querySelector("body").classList.remove("scrollhidden")
                }
            })

            if (scrollTop = 0) {
                enlacesMenu.forEach((enlace) => enlace.classList.remove('select'));
            }
        }
    }
}

if ($('.tarjeta-preg form').length > 0) {
    MyApp.inputTarjeta.init();
}

if ($('.testimonios').length > 0) {
    MyApp.testimonios.init();
}

if ($('.preguntas').length > 0) {
    MyApp.preguntas.init();
}

if ($('.home form').length > 0) {
    MyApp.contacto.init();
}

if ($('.menupage').length > 0) {
    MyApp.menupage.init();
}

