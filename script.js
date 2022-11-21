// Global elements
const container = document.querySelector('#container');
const resetBtn = document.querySelector('.reset');
let cols = 16;
let rows = 16;

// Creates a number of square divs that get arranged into a grid. 
function createGrid(cols, rows) {
    for (let i = 0; i < (cols * rows); i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        div.setAttribute('style', 'border: 1px solid black;');
        div.addEventListener('click', function() {
            div.classList.toggle('squareFill');
        });
        container.appendChild(div);
    }
};

// Changes the div color when clicked
function resetGrid() {
    const gridDivs = document.querySelectorAll('.squareFill') 
    gridDivs.forEach((div) => {
        div.classList.remove('squareFill');
    });
}


createGrid(cols, rows);
resetBtn.addEventListener('click', resetGrid);
