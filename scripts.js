var femaleNames = ['Dorota', 'Agnieszka', 'Ola', 'Anita'];
var maleNames = ['Wojtek', 'Marek', 'Bartek', 'Andrzej'];
var allNames = femaleNames.concat(maleNames);

var newName = prompt('Podaj imie: ');

if (allNames.indexOf(newName) === -1) {
  console.log(allNames.push(newName));
}
else {
  console.log('Imie juz istnieje');
}

allNames.sort();
console.log(allNames);
