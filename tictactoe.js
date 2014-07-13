window.onload = function() {

  var count = 0;

  var box = document.getElementsByClassName("button");
  var refresh = document.getElementById("refresh");
  var turn = document.getElementById("turn");
  var turnColor = document.getElementById("playerturn");

  var playerOne = "X";
  var playerTwo = "O";

  if (count === 0) {
    turn.innerHTML = playerOne;
    turnColor.style.color = "#ff4c4c";
  }

  var error = function() {
    alert("Please pick an empty square!!!")
  }

  var marker = function(boxIndex) {
    if (box[boxIndex].innerHTML === "") {
      if (count % 2 === 0) {
        box[boxIndex].style.color = "#ff4c4c";
        box[boxIndex].innerHTML = playerOne;
        count += 1;
        turnColor.style.color = "#0099FF";
        turn.innerHTML = playerTwo;
        winCheck();
      } else {
        box[boxIndex].style.color = "#0099FF";
        box[boxIndex].innerHTML = playerTwo;
        count += 1;
        turnColor.style.color = "#ff4c4c";
        turn.innerHTML = playerOne;
        winCheck();
      } 
    } else {
      error();
    }
  }

  var isAllEmpty = function(box1, box2, box3) {
    return box1.innerHTML === "" && box2.innerHTML === "" && box3.innerHTML === "";
  }
  
  var doAllMatch = function(box1, box2, box3) {
    return box1.innerHTML === box2.innerHTML && box2.innerHTML === box3.innerHTML;
  }
  
  var resetGame = function() {
    for (i = 0, switchPlayer = true; i < box.length; i++) {
      box[i].innerHTML = "";
      count = 0;
      turnColor.style.color = "#ff4c4c";
      turn.innerHTML = playerOne;
    }
  }

  var winGame = function(winBox) {
    alert("WINNER is " + box[winBox].innerHTML + " !!!");
    resetGame();
  }

  var winCheck = function() {
    console.log(count);
    if (!isAllEmpty(box[0], box[3], box[6]) && doAllMatch(box[0], box[3], box[6])) {
      winGame(0);
    } else if (!isAllEmpty(box[0], box[1], box[2]) && doAllMatch(box[0], box[1], box[2])) {
      winGame(0);
    } else if (!isAllEmpty(box[0], box[4], box[8]) && doAllMatch(box[0], box[4], box[8])) {
      winGame(0);
    } else if (!isAllEmpty(box[3], box[4], box[5]) && doAllMatch(box[3], box[4], box[5])) {
      winGame(3);
    } else if (!isAllEmpty(box[6], box[7], box[8]) && doAllMatch(box[6], box[7], box[8])) {
      winGame(6);
    } else if (!isAllEmpty(box[6], box[4], box[2]) && doAllMatch(box[6], box[4], box[2])) {
      winGame(6);
    } else if (!isAllEmpty(box[7], box[4], box[1]) && doAllMatch(box[7], box[4], box[1])) {
      winGame(7);
    } else if (!isAllEmpty(box[2], box[5], box[6]) && doAllMatch(box[2], box[5], box[6])) {
      winGame(2);
    } else if (count === 9) {
      alert("TIE GAME");
      resetGame();
    }
  }
  refresh.onclick = resetGame;

  box[0].onclick = function(event) {
    marker(0);
  }
  box[1].onclick = function(event) {
    marker(1);
  }
  box[2].onclick = function(event) {
    marker(2);
  }
  box[3].onclick = function(event) {
    marker(3);
  }
  box[4].onclick = function(event) {
    marker(4);
  }
  box[5].onclick = function(event) {
    marker(5);
  }
  box[6].onclick = function(event) {
    marker(6);
  }
  box[7].onclick = function(event) {
    marker(7);
  }
  box[8].onclick = function(event) {
    marker(8);
  }
}
