const modal = document.querySelector('.webstudio__modal');
const btn = document.querySelector('.page04__hero__btn');

let toggle = modal.classList.toggle('.off');

btn.addEventListener('click', toggle);
