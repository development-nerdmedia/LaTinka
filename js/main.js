AOS.init();

var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();

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


/* contacto */

var formespacio = document.querySelectorAll('.home .form-group');
var formespacioinput = document.querySelectorAll('.home .form-input');
var formespacioselect = document.querySelectorAll('.home form select');

function validateInput(e){
	for (let y = 0; y < formespacioinput.length; y++) {
		if (!formespacioinput[y].value) {
			formespacioinput[y].classList.add("error");
			e.preventDefault();              
		}
	}
}

function validateSelect(e){
	for (let y = 0; y < formespacioselect.length; y++) {
		if (formespacioselect[y].value == "0") {
			formespacioselect[y].classList.add("error");
			e.preventDefault();              
		}              
	}
}

document.addEventListener("click", function (e) {
	if (e.target.closest(".home form select")) {
		formespacioselect.forEach(function (shinyItem2) {
			shinyItem2.parentElement.classList.remove("active");  
		})
		e.target.parentElement.classList.add("active");  
	}else{
		formespacioselect.forEach(function (shinyItem2) {
			shinyItem2.parentElement.classList.remove("active"); 
		});
	}
	if (e.target.closest(".home form input[type='submit']")) {
		validateInput(e)
		validateSelect(e)
	}
})

/* end contacto */

MyApp = {
	inputTarjeta: {
        init: function () {
			var formespacioinput2 = document.querySelectorAll(".tarjeta-preg input[type='text']");

			function validateInput2(e){
				for (let y = 0; y < formespacioinput2.length; y++) {
					if (!formespacioinput2[y].value) {
						formespacioinput2[y].classList.add("error");
						e.preventDefault();              
					}
				}
			}

			document.addEventListener("click", function (e) {
				if (e.target.closest(".tarjeta-preg form input[type='submit']")) {
					validateInput2(e)
				}
			})			
        }
    },
}

if ($('.tarjeta-preg form').length > 0) {
    MyApp.inputTarjeta.init();
}


var mediaqueryList = window.matchMedia("(max-width: 1201px)");
if(mediaqueryList.matches) {
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
        	listaItem[i].setAttribute("data-aos-offset", "500")
    	}
	}
}else{
	if ($(".img-tienda").length > 0) {
		$(".img-tienda").stick_in_parent({
			offset_top: 180,
		});
	}
}

let collapsible = document.querySelectorAll(".faq-container");
let answer = document.querySelectorAll(".faq-answer");
let flecha = document.querySelectorAll(".faq-collapsible img");

function answerOpen() {
	for (let i = 0; i < answer.length; i++) {
		answer[i].classList.remove("open");
	}
}

function flechagiro() {
	for (let i = 0; i < flecha.length; i++) {
		flecha[i].classList.remove("giro");
	}
}


collapsible.forEach((element) => {
	element.addEventListener("click", () => {
		answerOpen();
		flechagiro();
		element.querySelector(".faq-answer").classList.add("open");
		element.querySelector(".faq-collapsible img").classList.add("giro");
	});
});
