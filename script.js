// Slider
const slider = document.getElementById('sliderRange');
const opacitySlider = document.getElementById('opacitySlider');
const output = document.querySelector('.width');
const output2 = document.querySelector('.height')
const output3 = document.querySelector('.opacityNum')
output.innerHTML = slider.value; // Initial display of first number of dimension
output2.innerHTML = slider.value; // Initial display of second number of dimension
output3.innerHTML = opacitySlider.value; // Initial display of opacity value


// Global elements
const container = document.getElementById('gridContainer');
const resetBtn = document.querySelector('.reset');
const fillColor = document.querySelector('#fillColor');
let area = slider.value**2;

// Initialize
createGrid(area);
let gridItems = container.querySelectorAll('div.squareTransparent');
fillColor.addEventListener('input', function() {  // Reassigns backgroundColo everytime color wheel is used
    backgroundColor = hexToRGB(fillColor.value, opacitySlider.value);
});
let backgroundColor = hexToRGB(fillColor.value, opacitySlider.value); // Initialize default fill color
changeColor();
resetBtn.addEventListener('click', clearGrid);  // Reset button resets the grid



//Functions defined
/* 
Changes the display that states the dimensions of the grid and changes
the actual dimensions of the grid when the slider is moved.
*/
function displayDimensions() {
    output.innerHTML = slider.value;
    output2.innerHTML = slider.value;
    resetGrid();
    updateGrid();
    gridItems = container.querySelectorAll('div.squareTransparent');
    changeColor();
}

// Creates a number of square divs that get arranged into a grid. 
function createGrid(area) {
    let length = area**0.5;
    container.setAttribute('style', `grid-template-columns: repeat(${length}, 1fr);`);
    for (let i = 0; i < area; i++) {
        const div = document.createElement('div');
        div.classList.add('squareTransparent');
        div.setAttribute('style', `border: 1px solid black; background-color: transparent`);
        container.appendChild(div);
    }
};

// Adds a mousedown eventlistener to each div that allows to toggle between the fill color and default color.
function changeColor () {
    gridItems.forEach((item) => {
        item.addEventListener('mousedown', () => {
            switch (true) {
                case item.style.backgroundColor == 'transparent':
                    item.style.backgroundColor = backgroundColor;
                    break;
                case item.style.backgroundColor !== 'transparent':
                    item.style.backgroundColor = 'transparent';
                    break;
            };
        })
    });
}

// Changes the display for the opacity value and the background color when the user changes the value.
function displayOpacity() {
    output3.innerHTML = opacitySlider.value;
    backgroundColor = hexToRGB(fillColor.value, opacitySlider.value);
}

// Takes a hexcode and converts it into RGBA to allow for changes in opacity to occur when filling the grid items.
function hexToRGB(hex, alpha) {
    let r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
}

// Toggles the presence and absence of the grid lines in the sketch pad.
function toggleGridLines() {
    gridItems.forEach((item) => {
        if (item.style.border == '0px') {
            item.setAttribute('style', 'border: solid black 1px;');
        } else {
            item.setAttribute('style', 'border: 0px;');
        };
    });
}

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
    createGrid(area, 1);
}

// Clears the grid back to the default state of no color
function clearGrid() {
    let gridDivs = container.querySelectorAll('div')
    gridDivs.forEach((div) => {
        div.setAttribute('style', 'background: transparent');
    });
}



