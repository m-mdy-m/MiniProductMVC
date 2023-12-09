# MiniProductMVC

MiniProductMVC is a simple Node.js web application for managing a list of products. It provides a straightforward interface for viewing a list of products and adding new products to the list. This application is built using Express.js and uses EJS for rendering HTML pages. All the product data entered through the POST route are stored in a JSON file within a database folder.

## Features

- `GET /`: The root path that might contain a welcome message or overview of the application.
- `GET /products`: Displays the list of all products retrieved from the JSON database.
- `POST /add-products`: Allows users to add new product details which are then stored in the JSON file.

## Technologies Used

- **Express.js**: A flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- **Nodemon**: A utility that monitors for any changes in your source and automatically restarts your server for development convenience.
- **EJS**: Embedded JavaScript templates engine that lets you generate HTML markup with plain JavaScript.
- **Body-parser**: A middleware that is responsible for parsing the incoming request bodies in a middleware before handling it.

## Getting Started

These instructions will get you a copy of the project up and running on your

## Installation and Setup
---
To run the project, you need to have Node.js installed on your machine. Follow the steps below to install and start the MiniProductMVC project:

1.Clone the repository:
```bash
git clone https://github.com/m-mdy-m/MiniProductMVC.git
```
2.Navigate to the project directory:
```bash
cd MiniProductMVC
```
3.Install the project dependencies:
```bash
npm install
```

## Running the Project
---
To start the project, run the following command:
```bash
npm start
```
`The project will start on the local server at http://localhost:3000/`

## Usage
--
- Access the homepage at http://localhost:3000/
- View product information at http://localhost:3000/products
- Add product information at http://localhost:3000/add-products

Congratulations! Your MiniProductMVC project is now up and running.
## Note: Update the actual URLs, usernames, and any other specific details as per your project’s requirements.