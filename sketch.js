const container = document.getElementById("sketch-pad-container");
const clearButton = document.getElementById("clearButton");
const gridButton = document.getElementById("gridButton");
const sketchPad = document.getElementById("sketch-pad");
const blackBrush = document.getElementById("black-Brush");
const colorfulBrush = document.getElementById("colorful-Brush");

//Grid Button
gridButton.addEventListener("click", function(){
    const amount = prompt("What amount of squares per side are you wanting?", "26");

    appendNewSketchPad(createGrid(amount));
});

//Reset Button
clearButton.addEventListener("click", function(){
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.style.background = "grey";
    });
});

//Black Brush
blackBrush.addEventListener("click", function(){
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.addEventListener("mouseover", function(e){
            e.target.style.backgroundColor = "black";
        });
    });
});

//Colorful Brush
colorfulBrush.addEventListener("click", function() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.addEventListener("mouseover", function(e){
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            e.target.style.backgroundColor = `rgb(${r} ${g} ${b})`;
        });
    });
});

//Container Function
function createGrid(num) {
    const sketchPad = document.createElement("div");
    sketchPad.classList.add("sketch-pad");
    console.log(container)
    for (let i = 0; i < num * num; i++) {
        let newGridCreated = document.createElement("div");

        newGridCreated.classList.add("square");
        newGridCreated.style.backgroundColor = "grey";

        sketchPad.appendChild(newGridCreated);
        document.documentElement.style.setProperty("--squares-per-side",num);
    }
    return sketchPad;
}

//Sketch Pad Function
function appendNewSketchPad(sketchPad) {
    const oldSketchPad = document.querySelector(".sketch-pad");

    if (oldSketchPad) {
        container.removeChild(oldSketchPad);
    }
    container.appendChild(sketchPad);
}

appendNewSketchPad(createGrid(24));