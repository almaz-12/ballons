'use strict';

const sum = document.querySelector('.sum').value;
const button = document.querySelector('.button');
const total = document.querySelector('.total');

let interestRate = 18.5;

const deposit = '30000';

const growth = '150';

const currency = 'руб.';

let message;

console.log(
  `Ваш депозит на начало расчетного периода составлял ${
    deposit + ' ' + currency
  }`
);
message = `Согласно вашему тарифу, вам была присвоена ставка ${interestRate}%`;
console.log(message);
message = `К концу расчетного прирост составил ${
  growth + ' ' + currency
} и на данный момент ваш депозит составляет ${
  Number(deposit) + Number(growth) + ' ' + currency
}`;
console.log(message);

button.addEventListener('click', () => {
  const sum = document.querySelector('.sum').value;
  sumYear = Number(sum);
  sumYear = sumYear + (sumYear * 7) / 100;
  message = `Через год у вас будет ${sumYear + ' ' + currency} на счету`;
  total.textContent = message;
});
