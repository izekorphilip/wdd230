const hamButton = document.querySelector('.menu');
let logo = document.querySelector('.logo')
let companyName = document.querySelector('.company-name');

const mediaQuery = window.matchMedia('(max-width: 500px)')
hamButton.addEventListener('click', () => {
	let navigation = document.querySelector('.nav-mobile');

	if (navigation.style.display === 'flex') {
		navigation.style.display = 'none';
		hamButton.textContent = '☰';
        logo.style.display = 'flex';
        companyName.style.display = 'flex';
	} else {
		navigation.style.display = 'flex';
		hamButton.textContent = '❌';
        logo.style.display = 'none';
		companyName.style.display = 'none';
	}
});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}