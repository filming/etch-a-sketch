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

// create a new grid using user input
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

const newSketchpadBtn = document.querySelector(".sketchpad-btn");
newSketchpadBtn.addEventListener("click", () => {
    let userInputs = getUserInputs();
});

// Event listeners
gridContainer.addEventListener("mousemove", (e) => {
    e.target.style["background-color"] = "#ff950079";
});
