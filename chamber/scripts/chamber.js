const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const d = new Date();
let year = d.getFullYear();
document.getElementById('lastModified').innerHTML = (`Last Modifification: ${document.lastModified}`);
