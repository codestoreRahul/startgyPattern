import { BasePizza } from "./BasePizza";

export class FarmHouse implements BasePizza {
  public cost(): number {
    return 100;
  }
}
