/**
 * Code Attribution
 * Title: float-field.js
 * Author: Cody Skelton
 * Date: 12/01/2023
 * Description
 */

"use strict";

export class FloatField {
    constructor(name, field){
        this.name = name;
        this.field = field;
    }

    validate() {
        if (isNaN(this.field)){
            return false;
        } else {
            return true;
        };
    }

    getMessage() {
        return "<name> must be a float value. You entered <field>";
    }
}