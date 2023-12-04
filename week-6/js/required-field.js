/**
 * Code Attribution
 * Title: required-field.js
 * Author: Cody Skelton
 * Date: 12/01/2023
 * Description
 */

"use strict";

export class RequiredField {
    constructor(name, field){
        this.name = name;
        this.field = field;
    }

    validate() {
        return Boolean(this.field);
    }

    getMessage() {
        return "<name> is a required field";
    }
}