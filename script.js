let name = prompt("Enter your name:");
let birthYear = prompt("Enter your year of birth:");
let city = prompt("Enter your city:");
let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;
if (age >= 18) {
    alert(`Hi ${name}, you are a man.`);
} else {
    alert(`Hi ${name}, you are a boy.`);
}
let id = (' + Math.random().String.toUpperCase()'.slice(2, 10));
const user ={
    name:`${name}`,
    age:`${age}`,
    city:`${city}`,
    id:`${id}`
} 
alert(`User Info:\nName: ${user.name}\nAge: ${user.age}\nCity: ${user.city}\nID: ${user.id}`);