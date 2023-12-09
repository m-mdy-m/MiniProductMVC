# MiniProductMVC

MiniProductMVC is a simple Node.js web application for managing a list of products. It provides a straightforward interface for viewing a list of products and adding new products to the list. This application is built using Express.js and uses EJS for rendering HTML pages. All the product data entered through the POST route are stored in a JSON file within a database folder.

## Features

- `GET /`: The default route which can display a welcome message or an overview of the application.
- `GET /products`: Displays the list of all products retrieved from the JSON database.
- `POST /add-products`: Allows users to add new product details which are then stored in the JSON file.

## Technologies Used

- **Express.js**: A web application framework for Node.js, designed for building web applications and APIs.
- **Nodemon**: A utility that monitors for any changes in the source code and automatically restarts the server.
- **EJS**: A templating engine used to generate HTML markup with plain JavaScript.
- **Body-parser**: Express middleware that parses incoming request bodies before your handlers, available under the `req.body` property.

## Getting Started

These instructions will get you a copy of the project up and running on your

## Installation and Setup
---
Ensure that Node.js is installed on your machine. Then, follow these steps to install and run the MiniProductMVC project:

1. **Clone the repository**:
```bash
git clone https://github.com/m-mdy-m/MiniProductMVC.git
```
2. **Navigate to the project directory**:
```bash
cd MiniProductMVC
```
3. **Install the project dependencies**:
```bash
npm install
```

## Running the Project
---
Start the project with the following command:
```bash
npm run start
```
`The project will start on the local server at http://localhost:3000/`

## Usage
--
- **Homepage**: Visit http://localhost:3000/ to view the homepage and navigation options.
- **View Products**: To view the list of products, go to http://localhost:3000/products.
- **Add Products**: To add a new product, navigate to http://localhost:3000/add-products and use the provided form.

## Contributing
---
If you have suggestions for improving MiniProductMVC, please feel free to make a pull request. For major changes, please open an issue first to discuss what you would like to change.

Please ensure to update tests as appropriate.
## License
This project is licensed under the MIT License - see the `LICENSE.md` file for details.
