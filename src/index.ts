import { ExtraCheese } from "./decoraterPattern/ExtraCheese";
import { ExtraVeggies } from "./decoraterPattern/ExtraVeggies";
import { FarmHouse } from "./decoraterPattern/FarmHouse";
import { VegDelight } from "./decoraterPattern/VegDelight";
import { ShapeFactory } from "./factoryPattern/ShapeFactory";
import { User } from "./observerPattern/Observer";
import { Stock } from "./observerPattern/Stock";

class Main {
  public status: boolean;
  constructor(status: boolean) {
    this.status = status;
  }

  public getStatus() {
    console.log("Running Status:", this.status);
  }
}

const main = new Main(true);
main.getStatus(); // Call the getStatus method

//  Decorator Pattern pizza shop implementation
// My pizza is : Farmhouse with extra veggies
const myPizza = new ExtraVeggies(new FarmHouse());
console.log(myPizza.cost());
//  VegDelight + Extra Cheese + Extra Veggies
const myPizza1 = new ExtraVeggies(new ExtraCheese(new VegDelight()));
console.log(myPizza1.cost());

/**
 * @desc Observer Pattern
 */
// Create a stock market instance
const stockMarket = new Stock();

// Create users who are interested in specific stocks
const user1 = new User(stockMarket, "AAPL");
const user2 = new User(stockMarket, "GOOGL");

// Simulate changes in stock prices
stockMarket.simulateStockPriceChange();

user1.update()

/**
 * @desc Factory Pattern:: Get Class Objects Conditionally
 */
const factory = new ShapeFactory();
const circleObj = factory.getShape('CIRCLE');
const rectangleObj = factory.getShape('RECTANGLE');
circleObj?.draw();
rectangleObj?.draw()


