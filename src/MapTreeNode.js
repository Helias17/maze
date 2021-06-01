export class MapTreeNode {
  constructor({
    header = false,
    move = null,
    position = null,
    parent = null,
    exit = false,
     }) {

    this.header = header;
    this.move = move;
    this.position = position;
    this.parent = parent;
    this.exit = exit;

  }
}