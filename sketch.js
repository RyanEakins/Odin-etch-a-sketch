const btnBlack = document.getElementById("black");
const btnReset = document.getElementById("reset");
const btnPrompt = document.getElementById("prompt");

let currentColor = 'black';

const colors = {
    black: "my-color-class"
};

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