/*********************
***** Palindrome *****
*********************/
const entries = ['Race Car', 'Arara', 'Tubérculo', 'Socorram-me, subi no ônibus em Marrocos', 'nope', 'never odd or even'];

const palindrome = str => {
  const regx = /[^A-Za-z0-9]/g;
  const word = str.toLowerCase().normalize('NFD').replace(regx, '');
  const reversedWord = word.split('').reverse().join('');

  return word === reversedWord;
}

const palindromes = entries.filter(entry => palindrome(entry));

console.log(palindromes); // ['Race Car', 'Arara', 'Socorram-me, subi no ônibus em Marrocos', 'never odd or even']


/***********************
***** Even Numbers *****
************************/
const numbers = [0, 2, 3, 5, 6, 9, 10];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers) // [0,2,6,10]


/**********************
***** E-mail mask *****
***********************
Criar uma máscara de e-mail, seguindo os seguintes requisitos:

- caso o lado esquerdo do e-mail tenha mais que 6 caracteres deixar os dois primeiros e os dois últimos caracteres sem máscara e o restante colocar *
- caso o lado esquerdo do e-mail tiver menos do que 6 ou igual a 6 carácteres deixar apenas os 2 primeiros caracteres sem máscara. O restante dos caracteres completar com *
- caso o lado direito do e-mail tenha mais que 6 caracteres deixar os dois primeiros e os dois últimos caracteres sem máscara e o restante colocar *
- caso o lado direito do e-mail tiver menos do que 6 ou igual a 6 carácteres deixar apenas os 2 primeiros caracteres sem máscara. O restante dos caracteres completar com *

Obs: caracteres especiais devem ficar sem máscara.

Exemplo de e-mail:

Gean-15@gmail.com.br
Ge*-15@gm*.**.br
***********************/
const mailMask = email => {
  const mailParts = email.split('@')
  const rgex = /[ [^a-zA-Z0-9]/gi; // all but special chars
  maskedParts = [];
  
  mailParts.map(part => {
    const firstChars = part.slice(0, 2);
    const lastChars = part.slice(-2);
    part = part.replaceAll(rgex, '*');
    
    if (part.length > 6) {
      const midPart = part.slice(2, part.length - 2);
      maskedParts.push(`${firstChars}${midPart}${lastChars}`);
    } else {
      const lastPart = part.slice(2, part.length);
      maskedParts.push(`${firstChars}${lastPart}`);
    }
  });
  
  console.log(maskedParts.join('@').replace(/(\*+)/g, '*'));
}
mailMask('gean-canova85@gmail.com.br');
mailMask('gean.canova-85@gmail.com.br');
mailMask('gean@test.com');
mailMask('gbc@test.com.br');
mailMask('Gean-15@gmail.com.br');


/******************************
***** Comparative Reducer *****
******************************/
const todos = [
  { name: 'dishes', priority: 2 },
  { name: 'laundry', priority: 3 },
  { name: 'homework', priority: 1 }
];

let reducer = (highest, todo) => {
  return highest.priority > todo.priority
    ? highest
    : todo;
}

console.log(todos.reduce(reducer, {}));
