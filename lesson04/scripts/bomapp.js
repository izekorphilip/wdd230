
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const ul = document.querySelector('#list');

/*
button = addEventListener('click', function () {
    if (input.value != '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        ul.append(li);
        deleteButton.addEventListener('click', function () {
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
*/

const chaptersArray = getChapterList() || [];
chaptersArray.forEach(chapter => {
    displayList(chapter)
});
button.addEventListener('click', function () {
    if (input.value != "") {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
})

function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item; // note the use of the displayList parameter 'item'
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
    li.append(deletebutton);
    list.append(li);
    deletebutton.addEventListener('click', function () {
      list.removeChild(li);
      deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage.
      input.focus(); // set the focus back to the input
    });
    console.log('I like to copy code instead of typing it out myself and trying to understand it.');
}

  function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
} 
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
  }
chapter = chapter.slice(0, chapter.length - 1);
chaptersArray = chaptersArray.filter((item) => item !== chapter);

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
  }