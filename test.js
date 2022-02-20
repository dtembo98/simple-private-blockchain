const utc = new Date().getTime();
const utcString = parseInt(new Date().getTime().toString().slice(0, -3));

console.log(new Date(utcString));
console.log(new Date(utc));
