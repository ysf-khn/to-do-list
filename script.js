'use strict';

const dateNow = document.querySelector('.date');
const dayNow = document.querySelector('.day');
const newTodo = document.querySelector('.add-todo');
const deleteItem = document.querySelector('.delete');

const months = [
  'JAN',
  'FEB',
  'MAR',
  'APR',
  'MAY',
  'JUNE',
  'JULY',
  'AUG',
  'SEP',
  'OCT',
  'NOV',
  'DEC',
];

const days = [
  'SUNDAY',
  'MONDAY',
  'TUESDAY',
  'WEDNESDAY',
  'THURSDAY',
  'FRIDAY',
  'SATURDAY',
];

const now = new Date();

dateNow.innerHTML = ` ${now.getDate().toString().padStart(2, '0')} ${
  months[now.getMonth()]
} ${now.getFullYear().toString()}`;

dayNow.innerHTML = `${days[now.getDay()]}`;

// newTodo.addEventListener('click', addTodo);
