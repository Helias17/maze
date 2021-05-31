import { maze } from './maze.js';
import { findStartPosition } from './findStartPosition.js';
import { isPositionNew } from './isPositionNew.js';
import { checkMazeExit } from './checkMazeExit.js';
import { MapTree } from './MapTree.js';

const startPosition = findStartPosition(maze);


const mapTree = new MapTree();

const checkedPositions = [];

let moveCount = 0;

const findWays = (startPosition, map) => {
  const { x, y } = startPosition;

  moveCount++;

  if (moveCount > 3000) {
    return;
  }

  // check upstair
  if (maze[y - 1] && maze[y - 1][x] === '+' && isPositionNew({ x, y: y - 1 }, checkedPositions)) {
    const newPosition = { x, y: y - 1 };
    map.up = { move: 'up' };
    checkMazeExit(newPosition, maze, map.up);
    checkedPositions.push(newPosition);
    findWays({ x, y: y - 1 }, map.up);
  }

  // check downstair
  if (maze[y + 1] && maze[y + 1][x] === '+' && isPositionNew({ x, y: y + 1 }, checkedPositions)) {
    const newPosition = { x, y: y + 1 };
    map.down = {  move: 'down' };
    const isFoundExit = checkMazeExit(newPosition, maze, map.down);
    if (isFoundExit) {
      console.log('Exit if found!');
    } else {
      checkedPositions.push(newPosition);
      findWays({ x, y: y + 1 }, map.down);
    }
  }

  // check left
  if (maze[y][x - 1] === '+' && isPositionNew({ x: x - 1, y }, checkedPositions)) {
    const newPosition = { x: x - 1, y };
    map.left = { move: 'left' };
    checkMazeExit(newPosition, maze, map.left);
    checkedPositions.push(newPosition);
    findWays({ x: x - 1, y }, map.left);
  }

  // check right
  if (maze[y][x + 1] === '+' && isPositionNew({ x: x + 1, y }, checkedPositions)) {
    const newPosition = { x: x + 1, y };
    map.right = { move: 'right' };
    checkMazeExit(newPosition, maze, map.right);
    checkedPositions.push(newPosition);
    findWays({ x: x + 1, y }, map.right);
  }

}

findWays(startPosition, mapTree);

console.log('Map: ', JSON.stringify(movesMap));
console.log('checkedPositions: ', checkedPositions);
console.log('Movecounter: ', moveCount);

const readPaths = (movesMap, moves) => {
  
}