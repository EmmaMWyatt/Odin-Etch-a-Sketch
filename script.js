const container = document.querySelector("#grid-container");

createGrid(16);

//Individual Square on the Grid
function createSquare(i) {
    let gridSquare = document.createElement('div');
    gridSquare.classList.add('grid-square');
    gridSquare.setAttribute('id', "square:"+ i);

    //add drawing ability
    gridSquare.addEventListener("mouseover", () => {
        //temporaraily just changes to blue TODO: let user change colour
        gridSquare.style.backgroundColor = 'blue';
    })
    return gridSquare;
}

//Adds squares to grid container
function createGrid(size) {
    const docFrag = document.createDocumentFragment();

    let grid = [];
    for (let i = 0; i < (size*size); i++) {
        grid.push(createSquare(i));
        
    }

    for (let i = 0; i < grid.length; i++) {
        docFrag.appendChild(grid[i]);
    }
    container.appendChild(docFrag);
}
