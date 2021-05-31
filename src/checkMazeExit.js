export const checkMazeExit = (newPosition, maze, map) => {
  const { x, y } = newPosition;
  if (x === 0 || y === 0) {
    map.exit = true;
    return true;
  }
  if (y === maze.length-1) {
    map.exit = true;
    return true;
  }
  if (x === maze[y].length-1) {
    map.exit = true;
    return true;
  }

  return false;
}