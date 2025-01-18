/*
  Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?
*/

// Функція для виводу повідомлення в консоль
function showMessage(message: string): void {
  console.log(message);
}

// Функція для обчислення суми двох чисел
function calc(num1: number, num2: number): number {
  return num1 + num2;
}

// Функція, яка завжди викидає помилку і ніколи не повертає значення
function customError(): never {
  throw new Error('Error');
}
