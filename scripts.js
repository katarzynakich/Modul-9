var list = document.getElementById('list');
var add = document.getElementById('addNew');
var number = document.getElementsByTagName('li');

add.addEventListener('click', function() {
  var element = document.createElement('li');

  for (var x = 0; x < number.length; x++) {
  element.innerHTML = 'item' + number.length;
  }
  list.appendChild(element);
  });
