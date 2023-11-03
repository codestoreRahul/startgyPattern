import { BasePizza } from "./BasePizza";
import { ToppingDecorator } from "./ToppingDecorator";

export class ExtraVeggies extends ToppingDecorator{
      constructor(pizza: BasePizza){
        super(pizza)
      }

      public cost(): number {
          return this.pizza.cost() + 30;
      }
}