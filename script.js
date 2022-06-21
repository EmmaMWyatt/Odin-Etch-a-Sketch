const container = document.querySelector("#grid-container");


createGrid(16);

//Individual Square on the Grid
function createSquare() {
    const gridSquare = document.createElement('div');
    gridSquare.classList.add('grid-square');
    return gridSquare;
}

//Adds squares to grid container
function createGrid(size) {
    const docFrag = document.createDocumentFragment();

    let grid = [];
    for (let i = 0; i < (size*size); i++) {
        grid.push(createSquare());
    }

    for (let i = 0; i < grid.length; i++) {
        docFrag.appendChild(grid[i]);
        console.log("he");
    }
    container.appendChild(docFrag);
}

