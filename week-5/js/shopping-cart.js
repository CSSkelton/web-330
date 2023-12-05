/**
 *  Shopping Class
 *  Author: Cody Skelton
 *  Contact: codysskelton@gmail.com
 *  Date: 11.19.2023
 *  Description: Shopping Cart class for week 5 assignment
 *  Code sourced from WEB 330 week 5 assignment
 */

export class ShoppingCart {
    constructor() {
        this.products = [];
    }

    count() {
        return this.products.length;
    }

    add(product) {
        this.products.push(product);
    }

    *[Symbol.iterator]() {
        for (let product of this.products){
            yield product;
        }
    }
}