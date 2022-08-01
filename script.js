
// DOM Methods
const field = document.getElementById('field');
const square = document.getElementsByClassName('square');

// Adding the squares and rows

function createGrid(size) {
    // Create new Grid
    let i = 0;

    while (i < size){
    let thisRow = document.createElement('div');
    thisRow.className = 'field-row';
    for (let x = 0; x < size; x++) {
        let thisSquare = document.createElement('div');
        thisSquare.className = 'square';
        thisRow.appendChild(thisSquare);
    }
    
    field.appendChild(thisRow);
    i++;
    }
}


// Random Color
window.addEventListener('mouseover',function(e) {
    if (e.target.classList[0] === 'square') {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        e.target.style.backgroundColor = '#' + randomColor;
        console.log(randomColor);
    }
});


// Button / Grid Size 
const gridButton = document.getElementById('change-grid');

gridButton.addEventListener('click', function() {gridPrompt()});

function gridPrompt() {
    let gridSize = prompt("Enter a Grid Size (Max 100).","20");

    if (gridSize.isInteger || gridSize <= 100) {
        replaceGrid(field, gridSize);
    }
}

function replaceGrid(parent, gridSize) {
    while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
    }
    createGrid(gridSize)
}