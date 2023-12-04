/**
 *  Product Class
 *  Author: Cody Skelton
 *  Contact: codysskelton@gmail.com
 *  Date: 11.19.2023
 *  Description: Product class for week 5 assignment
 *  Code sourced from WEB 330 week 5 assignment
 */

export class Product {
    constructor (name, price) {
        this.name = name;
        this.price = price;
        this.id = Math.random().toString(16).slice(2);
    }
}