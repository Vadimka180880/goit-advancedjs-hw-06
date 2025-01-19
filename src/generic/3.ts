/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<T, U>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}

const objA = { name: "Alice", age: 25 };
const objB = { job: "Engineer", country: "USA" };

const mergedObject = merge(objA, objB);

console.log(mergedObject);

console.log(mergedObject.name); 
console.log(mergedObject.job);  
