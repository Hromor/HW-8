let expenses = [
  { expenses: [2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390] },
  {
    expenses: [
      500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200,
    ],
  },
  {
    expenses: [
      20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000,
    ],
  },
];

const monthNames = [
  //создал новый массив с месяцами
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

expenses.forEach((student, mainIndex) => {
  //иду по внешнему массиву
  console.log(" ");
  console.log(`Данные из массива c индексом ${mainIndex}:`);
  student.expenses.forEach((data, index) => {
    //перебираю элементы массивов внутри expenses
    //поэтому   student.expenses.forEach
    if (data <= 1000) {
      monthNames[index]; //связываю массив с месяцами с индексом внутренних массивов
      console.log(`${monthNames[index]} expenses: ${data}`);
    }
  });
});
