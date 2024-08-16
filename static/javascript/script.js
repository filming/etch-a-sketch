// create a 16x16 grid of divs
const gridContainer = document.querySelector(".grid");

for (let i = 0; i < 16; i++){
    const newRowDiv = document.createElement("div");
    newRowDiv.classList.add("grid__row");
    
    for (let j = 0; j < 16; j++){
        const newColDiv = document.createElement("div");
        newColDiv.classList.add("grid__col");

        newRowDiv.appendChild(newColDiv);
    }

    gridContainer.appendChild(newRowDiv);
}
