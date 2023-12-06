/**
*  Code Attribution
*  Title: http-client.js
*  Author: Cody Skelton
*  Date: 12.06.2023
*  Description - Bellevue University WEB 330 Week 8 Assignment - WhatABook, Part 2 HttpClient Class
*  Code requirements sourced from WEB 330 Week 8 Assignment
 */

export class HttpClient {
    async get(url, params = "") {
        url = new URL(url);
        url.search = new URLSearchParams(params);
        const res = await fetch(url.toString(), {
            method: "GET",
        })
        return res.json();
    }
}