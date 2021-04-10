'use strict';

function create2DArray(rows, columns, value = (x, y) => 0) {
    var array = new Array(rows);
    for (var i = 0; i < rows; i++) {
      array[i] = new Array(columns);
      for (var j = 0; j < columns; j++) {
        array[i][j] = value(i, j);
      }
    }
    return array;
  }
  
  var array = create2DArray(5, 5, (row, column) => row + column);

  console.log(array);

function gamepadMovement (e) {
    // console.log(e.key);
    switch (e.key) {
        case 'ArrowDown': console.log('down pressed'); break;
        case 'ArrowUp': console.log('up pressed'); break;
        case 'ArrowLeft': console.log('left pressed'); break;
        case 'ArrowRight': console.log('right pressed'); break;
    }
}

document.addEventListener('keydown', gamepadMovement);