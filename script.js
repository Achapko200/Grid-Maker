// Declare global variables
let numRows = 2; // Starting with 2 rows as per your initial table
let numCols = 3; // Starting with 3 columns as per your initial table
let colorSelected = "SELECT"; // Default color selected

// Get the table element
const grid = document.getElementById("grid");

// Initialize the grid with click events on existing cells
function initializeGrid() {
    const cells = grid.getElementsByTagName("td");
    for (let cell of cells) {
        cell.onclick = () => colorCell(cell); // Add click event to color the cell
    }
}

// Call initializeGrid once to set up existing cells
initializeGrid();

// Add a row
function addR() {
    const row = document.createElement("tr");
    for (let i = 0; i < numCols; i++) {
        const cell = document.createElement("td");
        cell.onclick = () => colorCell(cell); // Add click event to color the cell
        row.appendChild(cell);
    }
    grid.appendChild(row);
    numRows++;
}

// Add a column
function addC() {
    const rows = grid.getElementsByTagName("tr");
    for (let row of rows) {
        const cell = document.createElement("td");
        cell.onclick = () => colorCell(cell); // Add click event to color the cell
        row.appendChild(cell);
    }
    numCols++;
}

// Remove a row
function removeR() {
    if (numRows > 0) {
        grid.deleteRow(numRows - 1); // Delete the last row
        numRows--;
        if (numRows === 0) {
            numCols = 0; // Reset column count if no rows remain
        }
    }
}

// Remove a column
function removeC() {
    if (numCols > 0) {
        const rows = grid.getElementsByTagName("tr");
        for (let row of rows) {
            row.deleteCell(numCols - 1); // Delete the last cell of each row
        }
        numCols--;
    }
}

// Set global variable for selected color
function selectColor() {
    colorSelected = document.getElementById("selectedColorId").value;
    console.log("Selected color:", colorSelected);
}

// Color a single cell by clicking on it
function colorCell(cell) {
    if (colorSelected !== "SELECT") {
        cell.style.backgroundColor = colorSelected; // Apply the selected color
    } else {
        alert("Please select a color first!");
    }
}

// Fill all uncolored cells
function fillU() {
    const cells = grid.getElementsByTagName("td");
    for (let cell of cells) {
        if (!cell.style.backgroundColor) { // Check if the cell is uncolored
            cell.style.backgroundColor = colorSelected;
        }
    }
}

// Fill all cells
function fillAll() {
    const cells = grid.getElementsByTagName("td");
    for (let cell of cells) {
        cell.style.backgroundColor = colorSelected;
    }
}

// Clear all cells' color
function clearAll() {
    const cells = grid.getElementsByTagName("td");
    for (let cell of cells) {
        cell.style.backgroundColor = ""; // Reset to default color (e.g., white)
    }
}
