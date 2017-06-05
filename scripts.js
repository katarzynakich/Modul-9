function drawTree(n) {
  var star;

  for (var i = 1; i <= n ; i++) {
    star = "";
    for (var j = 1; j <= i; j++) {
      star += '*';
    }
    console.log(star);
  }
  
}

drawTree(5);