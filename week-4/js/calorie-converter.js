/**
    Title: calorie-converter.js
    Author: Cody Skelton
    Date: 11.12.2023
    Description: Assignment 4.2 Calorie App CalorieConverter class file
*/ 

'use strict';

import { FoodModel } from "./food-model.js";

export class CalorieConverter {
    
    static data = [new FoodModel("1007", "Egg", "78"), new FoodModel("1008", "Apple", "95"), new FoodModel("1009", "Hamburger", "354"), new FoodModel("1010", "Fries", "400"), new FoodModel("1011", "Banana", "105"), new FoodModel("1012", "Soda", "150")]

    static find(query) {
        return this.data.filter((item) => item.name.toLowerCase() === query.toLowerCase());
    }
}