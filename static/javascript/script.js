const gridContainer = document.querySelector(".grid");

/** Create a grid of X by Y divs. */
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

/** Get valid user inputs for new grid creation. */
function getUserInputs(){
    let userInputs = {};
    let validInput = false;

    while (!validInput){
        let userInput = parseInt(prompt("Enter a number of rows"));

        if (isNaN(userInput)){
            alert("Invalid input! Input must be a number.");
        } 
        else {
            userInputs.rows = userInput;
            validInput = true;
        }
    }

    validInput = false;

    while (!validInput){
        let userInput = parseInt(prompt("Enter a number of columns"));

        if (isNaN(userInput)){
            alert("Invalid input! Input must be a number.");
        } 
        else {
            userInputs.cols = userInput;
            validInput = true;
        }
    }

    return userInputs;
}

/** Remove the current child elements from the grid container. */
function clearGrid(){
    let currElement = gridContainer.firstChild;

    while (currElement !== null){
        let nextElement = currElement.nextSibling;
        gridContainer.removeChild(currElement);
        currElement = nextElement;
    }
}

// Event listeners
gridContainer.addEventListener("mousemove", (e) => {
    e.target.style["background-color"] = "#ff950079";
});

const newSketchpadBtn = document.querySelector(".sketchpad-btn");
newSketchpadBtn.addEventListener("click", () => {
    let userInputs = getUserInputs();
    clearGrid();
    createGrid(userInputs.rows, userInputs.cols);
});
