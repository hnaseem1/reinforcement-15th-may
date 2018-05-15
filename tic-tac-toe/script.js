var score = [[],[]]
var x = 0

var game = document.querySelector('.game')
game.addEventListener('click', function(event) {

    if (x === 0  && event.srcElement.style.backgroundColor === '') {
      event.srcElement.style.backgroundColor = 'yellow';

      checkWin(x, 'Yellow')
      x = 1

    } else if (x === 1 && event.srcElement.style.backgroundColor === '') {
      event.srcElement.style.backgroundColor = 'red';
      checkWin(x, 'Red')
      x = 0
    }
    console.log(score);
});


function checkWin(x, color) {

  var win = [6, 15, 12, 18, 24]
  score[x].push(Number(event.srcElement.id));

  if (score[x].length === 3) {
    var sum = score[x].reduce(function(acc, val) { return acc + val; });

    for (var j = 0; j < win.length; j++) {
      if (sum === win[j]) {
        document.querySelector('body').innerText = color + ' Wins!'
        }
      }

    score[x].shift()

    }

}
