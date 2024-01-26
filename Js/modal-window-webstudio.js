var body = document.querySelector('body');
var modalWindow = document.querySelector('.page04__modal');
var BtnOpen = document.querySelector('.page04__hero__btn');
var Btnclose = document.querySelector('.close');

var toggle = () => {
	modalWindow.classList.toggle('off');
	body.classList.toggle('fixed');
};

BtnOpen.addEventListener('click', toggle);
Btnclose.addEventListener('click', toggle);
