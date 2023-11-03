// The Observer design pattern is a behavioral design pattern that defines a one-to-many dependency 
// between objects so that when one object changes state, all its dependents are notified and updated automatically.

import { Observer } from "./Observer";

/**
 * @desc -- Stock Market Monitoring System
 *   i) Maintain Observers
 *   ii) Method to subscribe and unsubscribe the observer
 *   iii) Notify on Stock Price Change
 */

export class Stock{
     public observers: Observer[] = [];
     public register(observer: Observer): void {
        this.observers.push(observer);
    }

    public unregister(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    public notify(): void {
        for (const observer of this.observers) {
            observer.update();
        }
    }

    // For demonstration purposes, let's assume the stock prices change periodically.
    public simulateStockPriceChange(): void {
        // Simulate a change in stock prices
        this.notify();
    }
}