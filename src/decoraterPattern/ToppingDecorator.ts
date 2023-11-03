import { BasePizza } from "./BasePizza";

export abstract class ToppingDecorator implements BasePizza {
    protected pizza: BasePizza;

    constructor(pizza: BasePizza) {
        this.pizza = pizza;
    }

    public abstract cost(): number;
}
