let lightSwitchOn = false;
let windowIsOpen = false;

let example1 = 5 > 10;
let example2 = 5 < 10;
let example3 = 5 >= 10;
let exaxmpl4 = 5 <= 10;
let example5 = 5 === 10;
let example6 = 5 !== 10;

if (lightSwitchOn) {
  console.log("Switch is on");
}
else {
  console.log("Switch is off");
}


let a = 15;
let b = 5;
if (a === b) {
  console.log("A equals B");
}
else {
  console.log("A is not equal to B");
}


// 25 студентов (students) пришли на курс програмирования. Помесятся ли они в комнату с 20 местами (capacity).
let students = 25;
let capacity = 20;
if (students <= capacity) {
  console.log("Студенты поместятся");
}
else {
  console.log("Студенты не поместятся");
}

console.log("Столица КР?");
let answer = "бишкек";
if (answer === "Бишкек" || answer === "бишкек") {
  console.log("Правильно.");
}
else {
  console.log("Не правильно.");
}

let login = "ElonMusk";
let password = "I'M the best";
if (login === "ElonMusk" && password === "Im the best") {
  console.log("Correct");
}
else {
  console.log("Incorrect");
}

// В автобусе 20 пассажирских мест. Поместится ли группа из 23 туристов в автобусе?
