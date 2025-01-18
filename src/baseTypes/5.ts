/* 
  Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)? 
  І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)?
*/

let unionTypeVar: string | number;

unionTypeVar = 'Hello';  
unionTypeVar = 42;       


let literalTypeVar: 'enable' | 'disable';

literalTypeVar = 'enable';   
literalTypeVar = 'disable';  

