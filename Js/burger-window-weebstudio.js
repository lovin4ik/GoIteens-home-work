document.addEventListener('DOMContentLoaded', function() {
	const burger = document.querySelector('.page04__burger');
	const BtnOpen = document.querySelector('.burgerOpen');
	const Btnclose = document.querySelector('.burgerBtn');
	const burgerWindow = document.querySelector('.page04__burger__menu')
	const body = document.querySelector('body')
	BtnOpen.addEventListener('click', () => {
		burger.classList.add('burger__on')
		burger.classList.remove('off')
		burgerWindow.classList.add('burger__on')
		burgerWindow.classList.remove('off')
		body.classList.add('fixed')
		Btnclose.classList.remove('off')
	})

	Btnclose.addEventListener('click', () => {
		Btnclose.classList.add('off')
		burger.classList.remove('burger__on')
		burger.classList.add('off')
		burgerWindow.classList.remove('burger__on')
		burgerWindow.classList.add('off')
		body.classList.remove('fixed')
	})

})
