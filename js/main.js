$(document).ready(function (argument) {
    AOS.init();
    if ($('.img-tienda').length > 0) {
		$(".img-tienda").stick_in_parent({
			offset_top: 180
		});
	}   

	let collapsible = document.querySelectorAll('.faq-container')

	collapsible.forEach(element => {
		element.addEventListener('click', () => {
			element.querySelector('.faq-answer').classList.toggle('open')
			element.querySelector('.question').classList.toggle('active')
		})
	})
})