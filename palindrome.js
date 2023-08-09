const entries = ['Race Car', 'Arara', 'Tubérculo', 'Socorram-me, subi no ônibus em Marrocos', 'nope', 'never odd or even'];

const palindrome = str => {
  const regx = /[^A-Za-z0-9]/g;
  const word = str.toLowerCase().normalize('NFD').replace(regx, '');
  const reversedWord = word.split('').reverse().join('');

  return word === reversedWord;
}

const palindromes = entries.filter(entry => palindrome(entry));

console.log(palindromes); // ['Race Car', 'Arara', 'Socorram-me, subi no ônibus em Marrocos', 'never odd or even']
