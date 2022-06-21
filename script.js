const container = document.querySelector("#grid-container");


createGrid(16);


function createSquare() {
    const gridSquare = document.createElement('div');
    gridSquare.classList.add('grid-square');
    return gridSquare;
}

function createGrid(size) {
    const docFrag = document.createDocumentFragment();

    let grid = [];
    for (let i = 0; i < size; i++) {
        grid.push(createSquare());
    }

    for (let i = 0; i < grid.length; i++) {
        docFrag.appendChild(grid[i]);
        console.log("he");
    }
    container.appendChild(docFrag);
}



/*
function createGrid(size) {

    for (let i = 1; i < size+1; i++) {
        square = gridSquare;
        square.id = 'square'+ i;
        container.appendChild(square);
        console.log("hello");
        
    }
}
*/