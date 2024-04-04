
const baseURL = "https://izekorphilip.github.io/wdd230/";
const linksURL = "https://izekorphilip.github.io/wdd230/data/links.json";
let mycards = document.querySelector('.mycards');
async function getLinks(){
    const dataResponse = await fetch(linksURL);
    const dataLink = await dataResponse.json();
    //console.table(dataLink.lessons);
    displayLinks(dataLink.lessons)
} 

getLinks();

const displayLinks = (weeks) => {
     
    let secard = document.createElement('section');
    let achorlink = document.createElement('h1');
    let MyTitle = document.createElement('h2');

    achorlink.textContent = weeks.lesson;
    MyTitle.innerHTML = weeks.link.url;

    secard.appendChild(achorlink);
    secard.appendChild(MyTitle);
    mycards.appendChild(secard);
}