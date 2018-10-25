//lhl coding Challenge
const GRID = [
     ["", "", "", "^", "", "", "", "", "", ""],
     ["", "", "v", "", "~", "", "", "", "", ""],
     ["", "v", "", "", "^", "^", "", "", "", ""],
     ["", "", "", "", "^", "^", "", "", "", ""],
     ["", "", "", "", "", "", "", "", "v", ""],
     ["", "", "", "", "", "", "", "", "", ""],
     ["", "", "", "", "", "", "", "", "", ""],
     ["", "^", "~", "~", "", "", "", "^", "", ""],
     ["", "^", "", "~", "~", "", "", "", "", ""],
     ["", "^", "", "", "~", "~", "", "", "", ""],
   ];
   function countRows() {
     var row = GRID.length;
     return row;
   }
    function countColumns() {
     var column = GRID[0].length;
     return column;
    }
   function gridSize() {
    var size = countColumns() + ' ' + 'x' +  ' ' + countRows();
    return size;
   }
   function totalCells() {
     var total = countRows() * countColumns();
   	return total;
   }
   function convertColumn(coordinate) {
   return coordinate.charCodeAt(0) - 65;
   }
   function lightCell(coordinate){
    var a = coordinate.slice(1);
    var b = convertColumn(coordinate);
    if (a <= 11 && b <= 11) {
      return false;
    }
    else {
     return GRID[a - 1][b];
   }
   }
   function isRock(coordinate) {
   var a = lightCell(coordinate);
   return a === '^' ? true : false;
   }
   function isCurrent(coordinate) {
   var a = lightCell(coordinate);
   return a === '~' ? true : false;
   }
   function isShip(coordinate) {
   var a = lightCell(coordinate);
   return a === 'v' ? true : false;
   }
   function lightRow(rowNum) {
     return GRID[rowNum - 1];
   }
   function lightColumn(colLetter) {
   var columnArray = [];
   var j = convertColumn(colLetter);
   for (i = 0; i < GRID.length; i++) {
   columnArray.push(GRID[i][j]);
   }
   return columnArray;
   }
   function allRocks() {
   var rocksArray = [];
   for (i = 0; i < countRows(); i++) {
    for (j = 0; j < countColumns(); j++) {
   if (GRID[i][j] === "^") {
   rocksArray.push(`${String.fromCharCode(65 + j)}${i + 1}`);
   }
   }
   }
   return rocksArray;
   }
   function allCurrents() {
   var currentArray = [];
   for (i = 0; i < countRows(); i++) {
    for (j = 0; j < countColumns(); j++) {
   if (GRID[i][j] === "~") {
   currentArray.push(`${String.fromCharCode(65+j)}${i + 1}`);
   }
   }
   }
   return currentArray;
   }
   function allShips() {
   var shipsArray = [];
   for (i = 0; i < countRows(); i++) {
    for (j = 0; j < countColumns(); j++) {
   if (GRID[i][j] === "v") {
   shipsArray.push(`${String.fromCharCode(65+j)}${i + 1}`);
   }
   }
   }
   return shipsArray;
   }
   function firstRock() {
   var rocksArray = [];
   for (i = 0; i < countRows(); i++) {
    for (j = 0; j < countColumns(); j++) {
   if (GRID[i][j] === "^") {
   rocksArray.push(`${String.fromCharCode(65 + j)}${i + 1}`);
   }
   }
   }
   return rocksArray.shift();
   }
   function firstCurrent() {
   var currentArray = [];
   for (i = 0; i < countRows(); i++) {
    for (j = 0; j < countColumns(); j++) {
   if (GRID[i][j] === "~") {
   currentArray.push(`${String.fromCharCode(65 + j)}${i + 1}`);
   }
   }
   }
   return currentArray.shift();
   }
   function shipReport() {
   var reportArray = [];
   for (i = 0; i < countRows(); i++) {
    for (j = 0; j < countColumns(); j++) {
   if (GRID[i][j] === "v") {
   reportArray.push(`${String.fromCharCode(65+j)}${i + 1}`);
   }
   }
   }
   return [reportArray.shift(), reportArray.pop()];
   }
   function howDangerous(coordinate) {
   var a = coordinate.slice(1);
    var b = convertColumn(coordinate);
   var cell = GRID[a - 1][b];
   if (cell === "^") {
   return 100;
   }
   else if (cell === "~") {
   return 50;
   } else {
     return 0;
   }
   }
   function percentageReport() {
   let perArray = [];
   let perRocks = (allRocks().length / totalCells()) * 100;
   let perCurrents = (allCurrents().length / totalCells()) * 100;
   let decimalRocks = perRocks.toFixed(2);
   let decimalCurrents = perCurrents.toFixed(2);
   perArray.push(decimalRocks, decimalCurrents);
   return perArray;
   }
   function safetyReport() {
   let newGrid = [];
   for ( var a = 0; a < GRID.length; a++ ) {
   newGrid[a] = [];
   }
   for (i = 0; i < countRows(); i++) {
    for (j = 0; j < countColumns(); j++) {
   	let cell = GRID[i][j];
       if (cell === '^') {
       newGrid[i].push(100);
       }
       else if (cell === '~') {
       newGrid[i].push(50);
       }

       else {
       newGrid[i].push(0);
       }
   }
   }
   return newGrid;
   }
   function calcDistance(coordinateOne, coordinateTwo) {
   let x1 = convertColumn(coordinateOne) + 1;
   let y1 = coordinateOne.slice(1);
   let x2 = convertColumn(coordinateTwo) + 1;
   let y2 = coordinateTwo.slice(1);
   let d = Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2);
   return Math.sqrt(d).toFixed(2);
   }
