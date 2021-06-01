export const findStartPosition = (maze) => {
  if (maze.length < 3) {
    console.log('The maze is too small')
    return;
  }

  let rowIndex = null;
  let colIndex = null;

  rowIndex = maze.findIndex( mazeRow => {
    colIndex  = mazeRow.findIndex( mazeItem => {
      if (mazeItem === '0') {
        return true;
      }
    } )

    if (colIndex !== -1) {
      return true;
    }
  })

  if (colIndex == -1) {
    return null;
  } else {
    return {x: colIndex, y: rowIndex}
  }
}