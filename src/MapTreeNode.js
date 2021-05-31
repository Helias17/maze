export class MapTreeNode {
  constructor({
    move = null,
    up = null,
    down = null,
    left = null,
    right = null,
    header = false }) {

    this.header = header;
    this.move = move;
    this.up = up;
    this.down = down;
    this.left = left;
    this.right = right;
    this.next = null;
    this.previous = null;

  }
}