/* Homework №2 */

/* Using ONLY materials given from the last 2 lessons of course. */

// Task №1
let givenName = prompt(
`Homework №2
Task №1
   What is your name?`);
alert(`Hello, ${givenName}! How are you?`);

// Task №2
let giveNum1 = Number(prompt(`Task №2
   Cкладання, віднімання, множення та поділ двох чисел та виведення результатів.

Введіть перше число:`
));
let giveNum2 = Number(prompt("Введіть наступне число:"));
let checkResultTask2 = alert(
   "Зайдіть в консоль для перевірки виведення результатів."
);

console.log("Результати Task №2")
console.log(
   `Додавання: ${giveNum1} + ${giveNum2} = ${giveNum1 + giveNum2}`
);
console.log(
   `Віднімання: ${giveNum1} - ${giveNum2} = ${giveNum1 - giveNum2}`
);
console.log(
   `Множення: ${giveNum1} * ${giveNum2} = ${giveNum1 * giveNum2}`
);
console.log(
   `Ділення: ${giveNum1} / ${giveNum2} = ${giveNum1 / giveNum2}`
);

// Task №3
let firstNumber = Number(prompt(`Task №3
   Виведення "true", якщо два значення рівні, або "false", якщо навпаки.

Введіть перше число для порівняння:`));
let secondNumber = Number(prompt("Введіть наступне число:"));
let compareNumbers = firstNumber == secondNumber;
alert(`Відповідь: ${compareNumbers}.`);

// Task №4
let firstCount = Number(prompt(`Task №4
   Визначити середнє арифметичне трьох чисел.

Введіть перше число:`));
let secondCount = Number(prompt("Введіть друге число:"));
let thirdCount = Number(prompt("Введіть останнє число:"));
let countResult = (firstCount + secondCount + thirdCount)/3;
alert(`Формула визначення середнього арифметичного трьох чисел:

(a + b + c) / 3

Відповідь: (${firstCount} + ${secondCount} + ${thirdCount}) / 3 = ${countResult};
`);

// Task №5
let completeTask5 = Number(prompt(`Task №5
   Розкласти по цифрах п'ятизначне число та вивести у вихідному порядку через пробіл.

(використовувати оператор “розподіл по модулю” (%))

Введіть п'ятизначне число (від 10000 до 99999):
`));

let takeNum1 = Math.floor((completeTask5%100000)/10000);
let takeNum2 = Math.floor((completeTask5%10000)/1000);
let takeNum3 = Math.floor((completeTask5%1000)/100);
let takeNum4 = Math.floor((completeTask5%100)/10);
let takeNum5 = completeTask5%10;

alert(
`Даний таск вирішується за допомогою залишку від ділення на 10/100/1000/10000/100000 та методу Math.floor().

Використавши них, число ${completeTask5} розкладається на:
${takeNum1} ${takeNum2} ${takeNum3} ${takeNum4} ${takeNum5}
`);

/*Homework №3 */
let givenHours = Number(prompt(
`Homework №3
Task №1
Напишіть скрипт, який рахує кількість секунд за годину.

Запросити у користувача кількість годин
 - Порахувати скільки секунд у цій кількості годин
 - Записати обчислене значення у змінну
 - Вивести цю змінну користувачу в alert
 
Введіть кількість годин (число) для прорахунку секунд:
 `));

let secondsInMinute = 60;
let minutesInHour = 60;
let secondsInHour = secondsInMinute * minutesInHour;
let resultInSeconds = givenHours * secondsInHour;
alert(`Результат: ${resultInSeconds} секунд.`);