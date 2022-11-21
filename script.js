// Global elements
const container = document.querySelector('#container');
let cols = 16;
let rows = 16;

// Creates a number of square divs that get arranged into a grid. 
function createGrid(cols, rows) {
    for (let i = 0; i < (cols * rows); i++) {
        const div = document.createElement('div');
        div.textContent = 'Test';
        container.appendChild(div);
    }
};

createGrid(cols, rows);