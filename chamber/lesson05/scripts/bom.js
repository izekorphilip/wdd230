
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const ul = document.querySelector('#list');

button = addEventListener('click', function(){
    if (input.value != ''){
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        ul.append(li);
        deleteButton.addEventListener('click', function(){
            ul.removeChild(li);
            input.focus();
        });
        input.focus();
        input.value = '';
        let el = document.getElementById("close-button");
        console.log(el.ariaLabel); // "Close"
        el.ariaLabel = "Close dialog";
        console.log(el.ariaLabel); // "Close dialog"
    }


})
d