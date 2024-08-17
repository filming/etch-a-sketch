const gridContainer = document.querySelector(".grid");
const changedDivs = [];

/** Create a grid of X by Y divs. */
function createGrid(rows, cols){
    for (let i = 0; i < rows; i++){
        const newRowDiv = document.createElement("div");
        newRowDiv.classList.add("grid__row");
        
        for (let j = 0; j < cols; j++){
            const newColDiv = document.createElement("div");
            newColDiv.classList.add("grid__col");

            // Track mouseenter events so we can change the colour & opacity of each individual column div
            newColDiv.addEventListener("mouseenter", (e) => {
                if (!(changedDivs.includes(e.target))){
                    e.target.style["background-color"] = createRandomHex();
                    e.target.style["opacity"] = 0.90;
                    changedDivs.push(e.target);
                } else {
                    e.target.style["opacity"] -= 0.10;
                }
            })

            newRowDiv.appendChild(newColDiv);
        }

        gridContainer.appendChild(newRowDiv);
    }
}

/** Create a random hex colour value. */
function createRandomHex(){
    let possibleChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    let hexStrBuilder = ["#"];

    for (let i = 0; i < 6; i++){
        const randomNumber = Math.floor(Math.random() * possibleChars.length);

        hexStrBuilder.push(possibleChars[randomNumber]);
    }

    return hexStrBuilder.join("");
}

/** Get valid user input for new grid creation. */
function getUserInput(){
    let userInput;
    let validInput = false;

    while (!validInput){
        userInput = parseInt(prompt("Enter the number of square per side (max: 100)"));

        if (isNaN(userInput)){
            alert("Invalid input! Input must be a number.");
        } 
        else if (userInput < 1 || userInput > 100){
            alert("Invalid input! Input must be between 1 and 100.");
        }
        else {
            validInput = true;
        }
    }

    return userInput;
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

// Global event listeners
document.addEventListener('DOMContentLoaded',() => {    
    const newSketchpadBtn = document.querySelector(".sketchpad-btn");
    newSketchpadBtn.addEventListener("click", () => {
        let userInput = getUserInput();
        clearGrid();
        createGrid(userInput, userInput);
    });
    
    createGrid(16, 16); // default sketchpad is 16x16
});
