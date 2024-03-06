const dateNow = new Date();
console.log(dateNow.getTime())
const d = new Date(2000, 3, 4, 22);
console.log('years', dateNow.getFullYear() - d.getFullYear());
console.log('diff in MS', (dateNow - d) / 1000);
const diff = dateNow - d;
console.log(diff / 1000 / 60 / 60 / 24);
console.log(d);
console.log(d.getMonth())
console.log(d.getFullYear())
console.log(d.getDate())
