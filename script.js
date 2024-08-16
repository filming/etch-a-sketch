


// create a 16x16 grid of divs
const gridContainer = document.querySelector(".grid");

for (let i = 0; i < 16; i++){
    const newRowDiv = document.createElement("div");
    
    for (let j = 0; j < 16; j++){
        const newColDiv = document.createElement("div");
        newRowDiv.appendChild(newColDiv);
    }

    gridContainer.appendChild(newRowDiv);
}
