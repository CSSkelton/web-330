/**
    Title: food-model.js
    Author: Cody Skelton
    Date: 11.12.2023
    Description: Assignment 4.2 Calorie App FoodModel class file
*/ 

'use strict';

export class FoodModel {
    constructor (id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    }
}