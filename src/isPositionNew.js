export const isPositionNew = (position, checkedPositions) => {
  const positionIndex = checkedPositions.findIndex( positionItem => {
    if (positionItem.x === position.x && positionItem.y === position.y) {
      return true;
    }
  } );

  return positionIndex == -1 ? true : false;
}