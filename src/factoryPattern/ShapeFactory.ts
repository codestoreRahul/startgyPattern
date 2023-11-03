import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

export class ShapeFactory {
  getShape(shape: string) {
    switch (shape) {
      case "CIRCLE":
        return new Circle();
      case "RECTANGLE":
        return new Rectangle();
      default:
        return null;
    }
  }
}
