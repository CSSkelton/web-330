/**
 * Code Attribution
 * Title: float-min-field.js
 * Author: Cody Skelton
 * Date: 12/01/2023
 * Description
 */

"use strict";

export class FloatMinField {
    constructor(name, field, min){
        this.name = name;
        this.field = field;
        this.min = min;
    }

    validate() {
        if(parseFloat(this.field) >= this.min){
            return true;
        } else {
            return false;
        }
    }

    getMessage() {
        return "<name> must be more than <min>. You entered <field>";
    }
}