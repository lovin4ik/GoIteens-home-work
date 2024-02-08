const modal = document.querySelector('.page04__modal');
const modalWindow = document.querySelector('.page04__modal__window');
const BtnOpen = document.querySelector('.page04__hero__btn');
const Btnclose = document.querySelector('.close');
const toggle = () => {
	modal.classList.toggle('off__modal');
	modalWindow.classList.toggle('modal__on')
};

modalWindow.addEventListener('click', (e) => {
	e.stopPropagation();
});

modal.addEventListener('click', toggle);
BtnOpen.addEventListener('click', toggle);
Btnclose.addEventListener('click', toggle);
