
let password1 = document.querySelector('#pwd');
let password2 = document.querySelector('#pwd2');
let displayMes = document.querySelector('.display');

password2.addEventListener('focusout', passwordPass);

function passwordPass(){
    if(password1.value !== password2.value){
        displayMes.textContent = 'Your password do not match!.';
        password1.value = "";
        password1.focus();
        password2.value = "";
        displayMes.style.color = 'black'

    }else{
        displayMes.textContent = 'Password Matched!';
		password2.style.backgroundColor = "#fff";
		password2.style.color = "#000";
    }

}

const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}

/*
const kp1 = document.querySelector("#keyphrase");
const kp2 = document.querySelector("#keyphrase2");
const message = document.querySelector("#formmessage");

kp2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
	if (kp1.value !== kp2.value) {
		message.textContent = "❗Key Phrases DO NOT MATCH!";
		message.style.visibility = "show";
		kp2.style.backgroundColor = "#fff0f3";
		kp2.value = "";
		kp2.focus();
	} else {
		message.style.display = "none";
		kp2.style.backgroundColor = "#fff";
		kp2.style.color = "#000";
	}
}
*/