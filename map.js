"use strict";

function create2DArray(rows, columns, value = (x, y) => 0) {
  let array = new Array(rows);
  for (let i = 0; i < rows; i++) {
    array[i] = new Array(columns);
    for (let j = 0; j < columns; j++) {
      if ((i === starCoordinates.x) & (j === starCoordinates.y)) {
        array[i][j] = "*";
      } else {
        array[i][j] = value(i, j);
      }
    }
  }
  return array;
}

let starCoordinates = { x: 0, y: 0 };
// let array = create2DArray(5, 5, (row, column) => row + column);
const displayMap = function () {
    const array = create2DArray(5, 5, (row, column) => row + column);
    document.querySelector("#map-container").innerHTML = array.map(function (a) {
      return a + "<br>"
    });
}


function gamepadMovement(e) {
  switch (e.key) {
    case "ArrowDown":
      console.log("down pressed");
      starCoordinates.x = starCoordinates.x + 1;
      displayMap();
      break;
    case "ArrowUp":
      console.log("up pressed");
      starCoordinates.x = starCoordinates.x - 1;
      displayMap();
      break;
    case "ArrowLeft":
      console.log("left pressed");
      starCoordinates.y = starCoordinates.y - 1;
      displayMap();
      break;
    case "ArrowRight":
      console.log("right pressed");
      starCoordinates.y = starCoordinates.y + 1;
      displayMap();
      break;
  }
}

window.addEventListener("load", function () {
  document.addEventListener("keydown", gamepadMovement);
});

// 1. override the top left number with a star
// 2. add to the eventlistener, when button is pressed then star moves to the next element in the array of the array
