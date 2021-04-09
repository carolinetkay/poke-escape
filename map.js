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