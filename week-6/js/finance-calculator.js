/**
 * Code Attribution
 * Title: float-field.js
 * Author: Cody Skelton
 * Date: 12/01/2023
 * Description
 */

"use strict";

export class FinanceCalculator {
    static MONTHS_IN_YEAR = 12;

    calculateFutureValue(monthlyPayment, rate, years) {
        const months = years * this.MONTHS_IN_YEAR;
        let interestRate = (1 + rate)/100;
        let presentValue = monthlyPayment * months;
        let futureValue = presentValue * (Math.pow(interestRate, months));
        return futureValue.toFixed(2);
    }

    convertToCurrency(field) {
        let currencyFormatter = new Intl.NumberFormat('en-US', {
            style: "currency",
            currency: "USD"
        });
        return currencyFormatter.format(field);
    }
}