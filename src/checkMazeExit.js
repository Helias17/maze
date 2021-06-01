export const checkMazeExit = (newPosition, maze, mapTreeNode) => {
  const { x, y } = newPosition;
  if (x === 0 || y === 0) {
    mapTreeNode.exit = true;
    return true;
  }
  if (y === maze.length-1) {
    mapTreeNode.exit = true;
    return true;
  }
  if (x === maze[y].length-1) {
    mapTreeNode.exit = true;
    return true;
  }

  return false;
}