function createGrid(size) {
    const container = document.getElementById("grid-container")

    container.style.display = "flex";
    container.style.width = "600px";
    container.style.height = "600px";
    container.style.backgroundColor = "grey";
    container.style.border = "15px solid red";
    container.style.borderRadius = "15px";
    container.style.overflow = "hidden";

    for (let i = 0; i < size; i++) {
        let column = document.createElement("div");
        column.classList.add("column");

        for (let j = 0; j < size; j++) {
            let cell = document.createElement("div");
            cell.classList.add("cell-row");
            column.appendChild(cell);
        }

        container.appendChild(column);
    }
}

createGrid(16);