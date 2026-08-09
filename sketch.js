const btnBlack = document.getElementById("black");
const btnReset = document.getElementById("reset");
const btnPrompt = document.getElementById("prompt");

let currentColor = 'black';

const colors = {
    black: "my-color-class"
};

//Create 16x16 Grid for Function with Container
function createGrid(size) {
    const container = document.getElementById("grid-container")

    for (let i = 0; i < size; i++) {
        let column = document.createElement("div");
        column.classList.add("column");

        for (let j = 0; j < size; j++) {
            let cell = document.createElement("div");
            cell.classList.add("cell-row");

            cell.addEventListener('mouseover', e => {
                e.target.classList.add(colors[currentColor]);
            });
        
            column.appendChild(cell);
        }

        container.appendChild(column);
    }
}

createGrid(16);

//Add Reset Button to Screen
btnReset.classList.add("reset");
btnReset.textContent = "Reset";

//Event Listener for Reset Button
btnReset.addEventListener("click", () => {
    createGrid.forEach((size) => {
        size.style.backgroundColor = "grey";
    });
});

createGrid(16);

//Choose Number of Squares
let numberButton = document.getElementById("prompt");
numberButton.addEventListener("click", () => {
    let enterNumber;
    while (isNaN(enterNumber) || enterNumber > 100 || enterNumber < 0) {
        enterNumber = Number(window.prompt("Choose a number between 0 and 100"));
    }

    //Clear Squares
    container.innerHTML = "";
    createGrid(enterNumber);
});