const container = document.querySelector("#grid-container");
const btn = document.querySelector("#grid-button");


btn.addEventListener('click',() => {
    x = prompt("please enter the size of grid you want");
    //TODO: Reject invalid prompt inputs: Not an int and not between 1-100
    createGrid(x);
})

//Individual Square on the Grid
function createSquare(i,size) {
    let gridSquare = document.createElement('div');
    gridSquare.classList.add('grid-square');
    gridSquare.setAttribute('id', "square:"+ i);

    //TODO: change square dimensions with grid size
    gridSquare.style.height = 800/size;
    gridSquare.style.width = 800/size;
    //Grid-Container sizer /
    //add drawing ability
    gridSquare.addEventListener("mouseover", () => {
        //temporaraily just changes to blue TODO: let user change colour
        gridSquare.style.backgroundColor = 'blue';
    })
    return gridSquare;
}

//Adds squares to grid container
function createGrid(size) {
    //Delete old grid first
    container.textContent ='';
    //set dimensions of new grid
    str = "repeat(" + size + "," + 800/size + "px)";
    container.style.gridTemplateColumns = str;
    //fill grid with squares
    const docFrag = document.createDocumentFragment();

    let grid = [];
    for (let i = 0; i < (size*size); i++) {
        grid.push(createSquare(i,size));
        
    }

    for (let i = 0; i < grid.length; i++) {
        docFrag.appendChild(grid[i]);
    }
    container.appendChild(docFrag);
}
