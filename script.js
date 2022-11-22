// Slider
const slider = document.getElementById('sliderRange');
const output = document.querySelector('.width');
const output2 = document.querySelector('.height')
output.innerHTML = slider.value; // First number of dimension
output2.innerHTML = slider.value; // Second number of dimension

// Global elements
const container = document.getElementById('gridContainer');
const resetBtn = document.querySelector('.reset');
let area = slider.value**2;

/* 
Changes the display that states the dimensions of the grid and changes
the actual dimensions of the grid when the slider is moved.
*/
function displayDimensions() {
    output.innerHTML = slider.value;
    output2.innerHTML = slider.value;
    resetGrid();
    updateGrid();
}

// Creates a number of square divs that get arranged into a grid. 
function createGrid(area) {
    let length = area**0.5;
    container.setAttribute('style', `grid-template-columns: repeat(${length}, 1fr);`);
    for (let i = 0; i < area; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        div.setAttribute('style', 'border: 1px solid black;');
        div.addEventListener('mousedown', function() {
            div.classList.toggle('squareFill');
        });
        container.appendChild(div);
    }
};

/*
Removes all the grid items (div blocks) to allow the new amount of grid items
to be appended into the grid contianer. This prevents the additional grid items
to append to the currently present ones. 
*/
function resetGrid() {
    let child = container.lastElementChild;
    while (child) {
        container.removeChild(child);
        child = container.lastElementChild;
    }
}

// Updates the grid size of the display
function updateGrid() {
    area = slider.value**2;
    createGrid(area);
}

// Clears the grid back to the default state of no color
function clearGrid() {
    const gridDivs = document.querySelectorAll('.squareFill') 
    gridDivs.forEach((div) => {
        div.classList.remove('squareFill');
    });
}


createGrid(area);
resetBtn.addEventListener('click', clearGrid);
