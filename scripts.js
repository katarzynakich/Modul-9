function drawTree(n) {
  var star, space;

  for (var i = 1; i <= n ; i++) {
    star = "";
    space = " ";
    for (var j = i; j < n; j++) {
      space += ' ';
    }
    for (var j = 1; j <= (2 * i) - 1; j++) {
      star += '*';
    }
    console.log(space, star);
  }

}
drawTree(7);
