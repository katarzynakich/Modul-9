var buttons = document.getElementsByClassName('button');
alert('Liczba przycisków: ' + buttons.length);

for (var x = 0; x < buttons.length; x++) {
  var text = buttons[x].innerText;
  alert("Tekst: " + text);
}
