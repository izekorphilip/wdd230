const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const d = new Date();
let year = d.getFullYear();
document.getElementById('lastModified').innerHTML = (`Last Modifification: ${document.lastModified}`);


const checkButton = document.querySelector('.input');
const webMain = document.querySelector('main');
const WebBody = document.querySelector('body');
const section = document.querySelector('.card-11');
const header = document.querySelector('header');
const footer = document.querySelector('footer');


checkButton.addEventListener('click', () => {
	webMain.classList.toggle('dark-mode');
	WebBody.classList.toggle('dark-mode');
	section.classList.toggle('dark-mode');
	header.classList.toggle('dark-mode');
	footer.classList.toggle('dark-mode');
});

