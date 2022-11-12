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

console.log(expenses[0].expenses[1]);

let newArray = [];
newArray = [
  //делаю новый массив
  ...expenses[0].expenses,
  ...expenses[1].expenses,
  ...expenses[2].expenses,
];
console.log(newArray);

const filtredScores = newArray.filter((zp) => {
  return zp > 1000; //возвр элементы массива больше 20
});
console.log(filtredScores);

function summArrayElements(arr) {
  let x = 0;
  return arr.map((i) => (x += i), x).reverse()[0]; //получаем массив, где к нулю прибавляем
  //новый элемент, потом меняем массив местами и выводи первый элемент, который
  //является суммой всех элементов
}
console.log(
  `Сумма всех расходов составляет ${summArrayElements(
    filtredScores
  )} деревянненьких`
);
