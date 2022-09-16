// Ascending Order of the Array
let array1 = [40, 30, 50, 10, 20];
let ascendingOrder = array1.sort((a, b) => {
  return a - b;
});
console.log(ascendingOrder);

// Descending Order of the Array
let descendingOrder = array1.sort((a, b) => {
  return b - a;
});
console.log(descendingOrder);

// String Ascending Order
let stringArray = ['SFSFDSF', 'FDSFDSF', 'DSFDSFSD', 'RTRY', 'CXVCXVCV'];
let stringAscendeingOrder = stringArray.sort((a, b) => {
  if (a > b) return 1;
  else if (a < b) return -1;
  else return 0;
});
console.log(stringAscendeingOrder);

// String Descending Order
let stringDEscendeingOrder = stringArray.sort((a, b) => {
  if (a > b) return -1;
  else if (a < b) return 1;
  else return 0;
});
console.log(stringDEscendeingOrder);

// Ascending of array of Objects by 'name'
let arrayOfObjects = [
  { id: 2, name: 'Arjun', price: 2000 },
  { id: 3, name: 'Xrjun', price: 3543 },
  { id: 1, name: 'Frjun', price: 1324 },
  { id: 4, name: 'Erjun', price: 6435 },
];

let arrayByName = arrayOfObjects.sort((a, b) => {
  if (a.name > b.name) return 1;
  else if (a.name < b.name) return -1;
  else 0;
});
console.log(arrayByName);

// Ascending of array of Objects by 'id'
let arrayOrdrbyId = arrayOfObjects.sort((a, b) => {
  return a.id - b.id;
});
console.log(arrayOrdrbyId);

// Ascending of array of Objects by 'price'
let arrayOrdrbyPrice = arrayOfObjects.sort((a, b) => {
  return a.price - b.price;
});
console.log(arrayOrdrbyPrice);
