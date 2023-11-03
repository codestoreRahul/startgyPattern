interface SlotInterface {
  id: number;
  row: number;
  col: number;
}

export class Slot implements SlotInterface {
  id: number;
  row: number;
  col: number;

  constructor(id: number, row: number, col: number) {
    this.id = id;
    this.row = row;
    this.col = col;
  }
}
