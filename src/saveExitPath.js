export const saveExitPath = (finishMapNode) => {
  const path = [];

  const readDirection = (currMapNode) => {
    console.log('currMapNode: ', currMapNode);
    
    path.push(currMapNode.move);
    if (currMapNode.prev) {
      readDirection(currMapNode.prev);
    }
  }

  readDirection(finishMapNode);

  return path;
}