function starOutGrid(grid) {
    let rowIdxs = [];
    let colIdxs = [];
    
    // find row idx and column idx
    for (let i = 0; i < grid.length; i++){
        if (grid[i].includes('*')){
            rowIdxs.push(i);
            colIdxs.push(grid[i].indexOf('*'));
        }
    }
    
    if (rowIdxs) makeRowsStarred(grid, rowIdxs)
   
    if (colIdxs) makeColsStarred(grid, colIdxs, rowIdxs)

    return grid;
}

function makeRowsStarred(grid, rowIdxs){
    // for rows which have a star, convert all elements to a star.
    for (let idx of rowIdxs){
        for (let i =0; i < grid[idx].length; i++){
            grid[idx][i] = '*';
        }
    }
    return grid
}

function makeColsStarred(grid, colIdxs, rowsToSkip){
    // for columns which have a star, convert all columns to a star.
    for (let colIdx of colIdxs){
        for (let i = 0; i < grid.length; i++){
            if (!rowsToSkip.includes(i)){
                grid[i][colIdx] = '*';
            }
        }
    }
    return grid
}

