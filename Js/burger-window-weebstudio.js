var body = document.querySelector('body');
var burgerWindow = document.querySelector('.page04__burger');
var BtnOpen = document.querySelector('.burgerOpen');
var Btnclose = document.querySelector('.burgerBtn');

var toggle = () => {
	burgerWindow.classList.toggle('off');
	body.classList.toggle('fixed');
	burgerWindow.classList.toggle('burger__on')
};

BtnOpen.addEventListener('click', toggle);
Btnclose.addEventListener('click', toggle);
