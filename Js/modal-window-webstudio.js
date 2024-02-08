var modal = document.querySelector('.page04__modal');
var modalWindow = document.querySelector('.page04__modal__window');
var BtnOpen = document.querySelector('.page04__hero__btn');
var Btnclose = document.querySelector('.close');

var toggle = () => {
	modal.classList.toggle('off__modal');
	modalWindow.classList.toggle('modal__on')
};

modalWindow.addEventListener('click', (e) => {
	e.stopPropagation();
});
modal.addEventListener('click', toggle);
BtnOpen.addEventListener('click', toggle);
Btnclose.addEventListener('click', toggle);
