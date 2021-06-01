import { maze } from './maze.js';
import { findStartPosition } from './findStartPosition.js';
import { isPositionNew } from './isPositionNew.js';
import { checkMazeExit } from './checkMazeExit.js';
import { MapTreeNode } from './MapTreeNode.js';

const startPosition = findStartPosition(maze);

const mapTreeNodeList = [];

const mapTreeNode = new MapTreeNode({ header: true, position: startPosition });
mapTreeNodeList.push(mapTreeNode);

const checkedPositions = [];

let moveCount = 0;

const findWays = (startPosition) => {
  const { x, y } = startPosition;

  moveCount++;

  if (moveCount > 3000) {
    return;
  }

  // check upstair
  if (maze[y - 1] && maze[y - 1][x] === '+' && isPositionNew({ x, y: y - 1 }, checkedPositions)) {
    const newPosition = { x, y: y - 1 };
    const newMapTreeNode = new MapTreeNode({ move: 'up', position: newPosition, parent: startPosition });
    mapTreeNodeList.push(newMapTreeNode);

    const isFoundExit = checkMazeExit(newPosition, maze, newMapTreeNode);
    if (!isFoundExit) {
      checkedPositions.push(newPosition);
      findWays(newPosition);
    }
  }

  // check downstair
  if (maze[y + 1] && maze[y + 1][x] === '+' && isPositionNew({ x, y: y + 1 }, checkedPositions)) {
    const newPosition = { x, y: y + 1 };
    const newMapTreeNode = new MapTreeNode({ move: 'down', position: newPosition, parent: startPosition });
    mapTreeNodeList.push(newMapTreeNode);

    const isFoundExit = checkMazeExit(newPosition, maze, newMapTreeNode);
    if (!isFoundExit) {
      checkedPositions.push(newPosition);
      findWays(newPosition);

    }
  }

  // check left
  if (maze[y][x - 1] === '+' && isPositionNew({ x: x - 1, y }, checkedPositions)) {
    const newPosition = { x: x - 1, y };
    const newMapTreeNode = new MapTreeNode({ move: 'left', position: newPosition, parent: startPosition });
    mapTreeNodeList.push(newMapTreeNode);

    const isFoundExit = checkMazeExit(newPosition, maze, newMapTreeNode);
    if (!isFoundExit) {
      checkedPositions.push(newPosition);
      findWays(newPosition);
    }
  }

  // check right
  if (maze[y][x + 1] === '+' && isPositionNew({ x: x + 1, y }, checkedPositions)) {
    const newPosition = { x: x + 1, y };
    const newMapTreeNode = new MapTreeNode({ move: 'right', position: newPosition, parent: startPosition });
    mapTreeNodeList.push(newMapTreeNode);

    const isFoundExit = checkMazeExit(newPosition, maze, newMapTreeNode);
    if (!isFoundExit) {
      checkedPositions.push(newPosition);
      findWays(newPosition);
    }
  }

}

findWays(startPosition);

let prevMoveFindCounter = 0;

const exitsArr = mapTreeNodeList.filter( node => {
  prevMoveFindCounter++;
  if (node.exit) {
    return true;
  }
});

const paths = exitsArr.map(exitNode => {
  prevMoveFindCounter++;
  let currNode = exitNode;
  const path = [];

  const prevMove = (node) => {
    prevMoveFindCounter++;
    if (node.header === false) {
      path.unshift(node.move);
      const parentNode = mapTreeNodeList.find( nodeItem => {
        prevMoveFindCounter++;
        if (nodeItem.position.x === node.parent.x && nodeItem.position.y === node.parent.y) {
          return true;
        }
      })
      if (parentNode) {
        prevMove(parentNode);
      }
    }
  }

  prevMove(currNode);
  return path;

})

console.log(paths);
console.log(`All exits were found in ${moveCount} iterations`);
console.log(`Exit paths were generated in ${prevMoveFindCounter} iterations`);


