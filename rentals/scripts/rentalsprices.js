const urlink = "https://izekorphilip.github.io/wdd230/rentals/data/rentals.json";
const rentalsPrices = document.querySelector('.rentals');

async function getdirectory(){
    const response = await fetch(urlink);
    const data = await response.json();
    //console.table(data.companies);
    displaydirectory(data.rentals)
}
getdirectory();

const displaydirectory = (myRentals) => {
    myRentals.forEach((myRentalsPrices) => {
         
        const section = document.createElement('section');
        const brand = document.createElement('h3');
        const maxPerson = document.createElement('p');
        const rentalsImage = document.createElement('img');
        const reservation = document.createElement('p');
        const reserved = document.createElement('p');
        const walkIn = document.createElement('p');
        const walkin = document.createElement('p');
         
        
        rentalsImage.setAttribute('src', myRentalsPrices.imageName);
        rentalsImage.setAttribute('alt', `Portrait of ${myRentalsPrices.brand}`); // fill in the blank
        rentalsImage.setAttribute('loading', 'lazy');
        rentalsImage.setAttribute('width', '130');
        rentalsImage.setAttribute('height', '60');
        brand.textContent = myRentalsPrices.brand;
        maxPerson.innerHTML = (`<strong>Max Person:<strong> ${myRentalsPrices.maxperson}`);
        reservation.innerHTML = (`Reservation for half day: ${myRentalsPrices.reservation[0].halfday}`);
        reserved.innerHTML = (`Reseration full day: ${myRentalsPrices.reservation[0].fullday}`)
        walkIn.innerHTML = (`Reservation for half Day: ${myRentalsPrices.walkin[0].halfday}`);
        walkin.innerHTML = (`Reservation for full day: ${myRentalsPrices.walkin[0].fullday}`);
        
        
        section.appendChild(rentalsImage);
        section.appendChild(brand);
        section.appendChild(maxPerson);
        section.appendChild(reserved);
        section.appendChild(reservation);
        section.appendChild(walkIn);
        section.appendChild(walkin);

        rentalsPrices.appendChild(section);
        
    });
}

let reserved = document.querySelector('.reservation')