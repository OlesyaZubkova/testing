"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;

  if (d < 0) {
    return arr;
  } else if (d === 0) {
    arr.push(-b / (2 * a));
    return arr;
  } else if (d > 0) {
    arr.push((-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a));
    return arr;
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  if (isNaN(percent) || isNaN(contribution) || isNaN(amount)) {
    return false;
  } else {
    let partPercent = percent / 1200,
        creditBody = amount - contribution, // тело кредита — сумма кредита минус первоначальный взнос
        payment = creditBody * (partPercent + (partPercent / ((Math.pow(1 + partPercent, countMonths)) - 1))), // ежемесячная оплата
        sum = +(payment * countMonths).toFixed(2); // общая сумма, которую придётся заплатить клиенту
    return sum;
  }
}
