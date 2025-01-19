/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

const stringNumberPair: KeyValuePair<string, number> = {
  key: "age",
  value: 30,
};

const numberBooleanPair: KeyValuePair<number, boolean> = {
  key: 1,
  value: true,
};

console.log(stringNumberPair);
console.log(numberBooleanPair); 
