const url = "https://izekorphilip.github.io/wdd230/chamber/data/members.json";
const direcard = document.querySelector('.directory-card');

async function getdirectory(){
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.companies);
    displaydirectory(data.companies)
}
getdirectory();

const displaydirectory = (myDirectory) => {
    myDirectory.forEach((myDirectories) => {
        
        const section = document.createElement('section');
        const comName = document.createElement('h3');
        const comAddresses= document.createElement('p');
        const comPhone= document.createElement('p');
        const comEmail = document.createElement('p');
        const comWebsite= document.createElement('a');
        const comImage= document.createElement('img');
        const comMemberLevel= document.createElement('p');
        const comLocation= document.createElement('p');

        comName.textContent =`${myDirectories.name}`;
        comAddresses.textContent = myDirectories.addresses;
        comPhone.textContent = myDirectories.phone;
        comWebsite.textContent = myDirectories.websiteURL;
        comImage.setAttribute('src', myDirectories.imageName);
        comImage.setAttribute('alt', `Portrait of ${myDirectories.name}`); // fill in the blank
        comImage.setAttribute('loading', 'lazy');
        comImage.setAttribute('width', '130');
        comImage.setAttribute('height', '60');
        comEmail.textContent = myDirectories.email;
        comMemberLevel.textContent = myDirectories.membershipLevel;
        comLocation.textContent = myDirectories.location;
        
        section.appendChild(comImage);
        section.appendChild(comName);
        section.appendChild(comAddresses);
        section.appendChild(comPhone);
        section.appendChild(comEmail);
        section.appendChild(comWebsite);
        section.appendChild(comMemberLevel);
        section.appendChild(comLocation);

        direcard.appendChild(section);
        
    });
}

const buttongrid = document.querySelector('#grid');
const buttonlist = document.querySelector('#list');
const article = document.querySelector('article');

buttongrid.addEventListener('click',() => {
    article.classList.add('directory-card');
    article.classList.remove('list');
})

buttonlist.addEventListener('click', showList);

function showList(){
    article.classList.add('list');
    article.classList.remove('directory-card');
}