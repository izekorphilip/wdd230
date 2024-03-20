let detail = {
    name: 'Philip',
    age: 45
};

localStorage.setItem('right', JSON.stringify(detail));
localStorage.getItem('right');
console.log(localStorage);



localStorage.clear();

let comparedate = (d1, d2) => {
    let date01 = new Date (d1).getTime();
    let date02 = new Date (d2).getTime();

if (date01 > date02){
    console.log(`${d1} this date1 is greater than ${d2}`);
}else if (date01 < date02){
    console.log(`${d2} this date1 is greater ${d1}`)
}else{
    console.log('the both are equal')
}
}
comparedate("01/01/2001", "01/01/2001")
comparedate("06/21/2022", "07/28/2021");
;
comparedate("11/01/2021", "02/01/2022"); 

let date1 = new Date("06/21/2020").getTime();
let date2 = new Date("07/28/2021").getTime();

if (date1 > date2){
    console.log('this date1 is greater');
}else if (date1 < date2){
    console.log('this date2 is greater');
}else{
    console.log('the both are equal')
}