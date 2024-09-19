import { Injectable } from "@angular/core";
import { Product } from "./product.model";

@Injectable({
  providedIn: 'root' // This ensures the service is available application-wide
})
export class Card {
    public items: CardItem[] = [];
    public cardCount: number = 0;
    public total: number = 0;

    addItem(product: Product, quantity: number = 1) {
        let item = this.items.find(i => i.product.id === product.id);
        if (item) {
            item.quantity += quantity;
        } else {
            this.items.push(new CardItem(product, quantity));
        }
        this.calculate();
    }

    updateQuantity(product: Product, quantity: number) {
        let item = this.items.find(i => i.product.id === product.id);
        if (item) {
            item.quantity = quantity;
        }
        this.calculate();
    }

    calculate() {
        this.cardCount = 0;
        this.total = 0;

        this.items.forEach(item => {
            if (item.product && item.product.price !== undefined) {
                this.cardCount += item.quantity;
                this.total += (item.quantity * item.product.price);
            }
        });
    }

    removeItem(id: number) {
        let index = this.items.findIndex(i => i.product.id === id);
        if (index !== -1) {
            this.items.splice(index, 1);
            this.calculate();
        }
    }

    clear() {
        this.items = [];
        this.cardCount = 0;
        this.total = 0;
    }
}

export class CardItem {
    constructor(
        public product: Product,
        public quantity: number
    ) {}
}
