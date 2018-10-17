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
 if (a >= 11 && b >= 11) {
  return GRID[a - 1][b];
 }
 else {
return false;
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
