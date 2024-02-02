const d = new Date();
let year = d.getFullYear();


document.getElementById('year').innerHTML =  (`Ⓒ ${year}`);

document.getElementById('lastModified').innerHTML = (`Last Modifification: ${document.lastModified}`);

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});
