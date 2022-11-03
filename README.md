# About Retailer
Wholesaler is a simple tool to help you manage your inventory. It is a web application that allows you to keep track of your inventory and sales.

## Features
* List customers and products
* Calculate best rates based on customer, time of the year and previous sales

## Prerequisites
json server to provide dummy data for application. Local installation of json server is needed to run without errors
```npm install json-server```

## Resources
* http://localhost:3001/data

## Installation
1. Clone the repository
2. Install dependencies with `npm install`
3. Run json server: `json-server -p 3001 --watch AppData.json`
3. Run the server with `npm start`
4. Open the application in your browser at `http://localhost:3000`

## Requirements
* Chrome 25 ->

## Limitations and future imporvements
* Styling improvements (maybe framework)
* Product listing refactoring
* Actual backend instead of json server
* Running in container + bundling
* Refined functionality
* Firefox support (datepicker)