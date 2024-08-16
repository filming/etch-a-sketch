// create a grid of divs
const gridContainer = document.querySelector(".grid");

function createGrid(rows, cols){
    for (let i = 0; i < rows; i++){
        const newRowDiv = document.createElement("div");
        newRowDiv.classList.add("grid__row");
        
        for (let j = 0; j < cols; j++){
            const newColDiv = document.createElement("div");
            newColDiv.classList.add("grid__col");

            newRowDiv.appendChild(newColDiv);
        }

        gridContainer.appendChild(newRowDiv);
    }
}

createGrid(16, 16);

gridContainer.addEventListener("mousemove", (e) => {
    e.target.style["background-color"] = "#ff950079";
});
