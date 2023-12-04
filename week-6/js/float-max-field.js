/**
 * Code Attribution
 * Title: float-max-field.js
 * Author: Cody Skelton
 * Date: 12/01/2023
 * Description
 */

"use strict";

export class FloatMaxField {
    constructor(name, field, max){
        this.name = name;
        this.field = field;
        this.max = max;
    }

    validate() {
        if(parseFloat(this.field) <= this.max){
            return true;
        } else {
            return false;
        }
    }

    getMessage() {
        return "<name> must be less than <max>. You entered <field>";
    }
}