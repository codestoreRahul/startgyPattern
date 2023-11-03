import { Stock } from "./Stock";

export interface Observer{
     update(): void;
}


export class User implements Observer{
    private stockMarket: Stock;
    private watchedStock: string;

    constructor(stockMarket: Stock, watchedStock: string) {
        this.stockMarket = stockMarket;
        this.watchedStock = watchedStock;
        this.stockMarket.register(this);
    }

    public update(): void {
        // Called by the subject when there is a change
        console.log(`User received update for ${this.watchedStock} stock price.`);
        // Additional logic to process the update can be added here.
    }

    public unsubscribe(): void {
        this.stockMarket.unregister(this);
    }
}