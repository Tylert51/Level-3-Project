let table, tableValues,
    tileClickedIndex, score, emptyIndex;



function initialize() {

    table = [];
    tableValues =
        [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, null]
        ];
    

    tileClickedIndex = null;
    score = 0;
    start = false;
    updateEmptyIndex();

    initializeTable();

    display();
}

function initializeTable() {
    for (let i = 0; i < 4; i++) {
        let temp = [];
        for (let j = 0; j < 4; j++) {
            let tempElement = document.getElementById(`${i}_${j}`);
            temp.push(tempElement);
            tempElement.addEventListener("click", () => changeTiles(`${i}_${j}`));
        }
        table.push(temp);
    }
}

function start(){
    
}
function changeTiles(index) {

    
    updateEmptyIndex();
    let row = parseInt(index.substring(0, 1));
    let col = parseInt(index.substring(2));
    
    let cell = [row,col];
    let adjacentTiles = getAdjacentTiles();

    if (doesContain(adjacentTiles, cell.toString())) {
        let clickedCell = table[row][col];
        let emptyCell = table[emptyIndex.substring(0,1)][emptyIndex.substring(2)];

        emptyCell.innerHTML = clickedCell.innerHTML;
        clickedCell.innerHTML = null;
    }
    updateEmptyIndex();
    updateTable();
    display();
}

function getAdjacentTiles() {
    let row = parseInt(emptyIndex.substring(0, 1));
    let col = parseInt(emptyIndex.substring(2));
    let adjacentTiles = [[row + 1, col], [row - 1, col], [row, col + 1], [row, col - 1]];
    for (let i = 0; i < adjacentTiles.length; i++) {
        if (adjacentTiles[i][0] < 0 || adjacentTiles[i][0] > 3) {
            adjacentTiles.splice(i, 1);
        }
        if (adjacentTiles[i][1] < 0 || adjacentTiles[i][1] > 3) {
            adjacentTiles.splice(i, 1);
        }
    }
    return adjacentTiles;
}

function display() {

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {

            let num = tableValues[i][j];
            table[i][j].innerHTML = num;
            
        }
    }
}

function updateEmptyIndex() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let val = tableValues[i][j];
            if (val === null || val === "") {
                emptyIndex = `${i}_${j}`;
            }
        }
    }
}

 

function doesContain(arr,search){

    let arrStr;

    for(let i = 0; i< arr.length; i++){
        arrStr = arr[i].toString();

        if(arrStr === search) {
            return true;
        }
    }
    return false;
}

function updateTable() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            tableValues[i][j] = table[i][j].innerHTML;
            
        }
    }
}