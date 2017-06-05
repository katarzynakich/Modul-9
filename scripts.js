function drawTree(n) {

  for (var i = 1; i <= n ; i++) {
    var star = "";
    for (var j = 1; j <= i; j++) {
      var star2 = star += '*';
    }
    console.log(star2);
  }
  
}
