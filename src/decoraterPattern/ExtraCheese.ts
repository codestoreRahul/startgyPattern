import { BasePizza } from "./BasePizza";
import { ToppingDecorator } from "./ToppingDecorator";

export class ExtraCheese extends ToppingDecorator{
      constructor(pizza: BasePizza){
         super(pizza)
      }
      public cost(): number {
          return this.pizza.cost() + 10 // extra cheese const added
      }
}