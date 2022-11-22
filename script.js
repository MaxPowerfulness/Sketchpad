// Global elements
const container = document.querySelector('#container');
const resetBtn = document.querySelector('.reset');
let cols = 16;
let rows = 16;

// Slider
const slider = document.getElementById('sliderRange');
const output = document.querySelector('.width');
const output2 = document.querySelector('.height')
output.innerHTML = slider.value;
output2.innerHTML = slider.value;



// Changes the display for the dimensions of the grid.
function displayDimensions() {
    output.innerHTML = slider.value;
    output2.innerHTML = slider.value;
}

// Creates a number of square divs that get arranged into a grid. 
function createGrid(cols, rows) {
    for (let i = 0; i < (cols * rows); i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        div.setAttribute('style', 'border: 1px solid black;');
        div.addEventListener('mousedown', function() {
            div.classList.toggle('squareFill');
        });
        container.appendChild(div);
    }
};

// Clears the grid back to the default state of no color
function resetGrid() {
    const gridDivs = document.querySelectorAll('.squareFill') 
    gridDivs.forEach((div) => {
        div.classList.remove('squareFill');
    });
}


createGrid(cols, rows);
resetBtn.addEventListener('click', resetGrid);
