function createColumn(size) {
    for (var i = 0; i < size; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("column");
        newDiv.style.width = 600 / size + "px";
        document.getElementById("grid-container").appendChild(newDiv);
        createRow(size);
    }
}

function createRow(size) {
    for (var j = 0; j < size; j++) {
        let newRow = document.createElement("div");
        newRow.classList.add("cell-row"); 
        newRow.style.height = 600 / size + "px";
        let columns = document.querySelectorAll(".column");
        columns[j-1].appendChild(newRow);
    }
}

createColumn(16); 