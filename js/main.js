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

if ($(".img-tienda").length > 0) {
	$(".img-tienda").stick_in_parent({
		offset_top: 180,
	});
}

let collapsible = document.querySelectorAll(".faq-container");
let answer = document.querySelectorAll(".faq-answer");

function answerOpen() {
	for (let i = 0; i < answer.length; i++) {
		answer[i].classList.remove("open");
	}
}

collapsible.forEach((element) => {
	element.addEventListener("click", () => {
		answerOpen();
		element.querySelector(".faq-answer").classList.add("open");
	});
});

