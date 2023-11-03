import { BasePizza } from "./BasePizza";

export class VegDelight implements BasePizza{
     public cost(): number {
         return 120;
     }
}