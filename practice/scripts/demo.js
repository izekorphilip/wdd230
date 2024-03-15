let detail = {
    name: 'Philip',
    age: 45
};

let success = JSON.stringify(detail);
localStorage.setItem('info', "success");

let deDone = JSON.parse(localStorage.getItem("info"));
console.log(deDone);

deDone.clear();

const outPut = ['Philip', 'PAUL', 'Blessing'];

localStorage.setItem('name', JSON.stringify(outPut));

const input = JSON.parse(localStorage.getItem('name'));

console.log(input);

