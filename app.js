
const container = document.querySelector('.container');

const grid = document.createElement("div");
grid.className = "grid";
grid.style.gridTemplateColumns = `repeat(16, 1fr)`;
grid.style.transition = '200ms ease 50ms';
container.appendChild(grid);


let currentInk = "black";
let isRainbow = false;

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}

// Add 16x16 grid
function createGrid() {
    let mouseClicked = false;
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            const div = document.createElement('div');

            div.addEventListener("mousedown", function () {
                mouseClicked = true;
                if (isRainbow) {
                    currentInk = generateRandomColor();
                    ink(div);
                } else {
                    ink(div);
                }
            })
            div.addEventListener("mouseover", function () {
                if (mouseClicked) {
                    if (isRainbow) {
                        currentInk = generateRandomColor();
                        ink(div);
                    } else {
                        ink(div);
                    }
                }
            })
            grid.appendChild(div);
        }
    }
    addEventListener("mousedown", function () {
        mouseClicked = true;
    });

    addEventListener("mouseup", function () {
        mouseClicked = false;
    })
}

function ink(item) {
    item.style.backgroundColor = currentInk;
}

function reset() {
    container.innerHTML = "";
    createGrid();
}

function setRainbow() {
    isRainbow = true;
}

function setWhite() {
    isRainbow = false;
    currentInk = "white";
}

function setBlack() {
    isRainbow = false;
    currentInk = "black";
}

/*This method generates a random color in the RGB space
 and returns it*/
function generateRandomColor() {
    var color1 = Math.floor(Math.random() * 255) + 1;
    var color2 = Math.floor(Math.random() * 255) + 1;
    var color3 = Math.floor(Math.random() * 255) + 1;

    return 'rgb(' + color1
        + ',' + color2
        + ',' + color3 + ')';
}




createGrid();




