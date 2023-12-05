/**
 *  Title: cart-component.js
 *  Author: Cody Skelton
 *  Date: 11.19.2023
 *  Detail: WEB 330 Assignment 5.2 - Bob's Automotive Repair Shop Cart Component
 *  Sources: Program requirements sourced from Bellevue University's WEB 330 Program Requirements
 */


class CartComponent extends HTMLElement {
    constructor () {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<i id="cartIcon" class="fa fa-shopping-cart"></i> (<span id="cart-count"></span>)`;
    }
}

customElements.define('cart-component', CartComponent);