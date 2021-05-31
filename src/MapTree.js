import { MapTreeNode } from './MapTreeNode.js';

export class MapTree {

  constructor ({
    move = null,
    up = null,
    down = null,
    left = null,
    right = null,
    header = false }) {
    this.header = true;
    this.move = move;
    this.up = up;
    this.down = down;
    this.left = left;
    this.right = right;
    this.previous = null;
  }
  appendNode({
    move = null }) {
    this.move = move;
    this.
  }

}