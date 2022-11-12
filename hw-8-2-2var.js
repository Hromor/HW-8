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

expenses.forEach((student, mainIndex) => {
  console.log(" ");
  console.log(`Данные из массива c индексом ${mainIndex}:`);
  student.expenses.forEach((data, index) => {
    if (data <= 1000) {
      const dateMain = new Date(2022, index); //устанавливаю год и месяц, равный
      //индексу из внутреннего массива
      let month = dateMain.toLocaleString("default", { month: "long" }); //вывожу месяц
      console.log(`${month} expenses: ${data}`);
      //каждый раз цикл будет подставлять нужный индекс, а это соответствует месяцу, который выводит
      //объект Date
    }
  });
});
