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
    // console.log(score);
});

// Checks for one combination that was causing bug in the game

function arraysEqual(arr1, arr2) {
    if(arr1.length !== arr2.length)
        return false;
    for(var i = arr1.length; i--;) {
        if(arr1[i] !== arr2[i])
            return false;
    }

    return true;
}

// check for the winning combinations using sums of all        possible outcomes
function checkWin(x, color) {

  var win = [6, 15, 18, 24]
  score[x].push(Number(event.srcElement.id));

  if (score[x].length === 3) {
    var sum = score[x].reduce(function(acc, val) { return acc + val; });

    for (var j = 0; j < win.length; j++) {
      if (sum === win[j] || arraysEqual(score[x], [1, 4, 7])) {
        document.querySelector('body').innerText = color + ' Wins!'
        }
      }

    score[x].shift()

    }

}
