# E-Commerce API

## About the Project 🛍️

This project is an E-Commerce API that provides endpoints for managing products, including CRUD operations, searching, and more. It serves as the backend for an online shopping application.

## Technologies Used 🚀

- **Node.js:** A JavaScript runtime for building scalable server-side applications.
- **Express:** A fast, unopinionated, minimalist web framework for Node.js.
- **MongoDB:** A NoSQL database for storing product information.
- **Mongoose:** An ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Jest:** A JavaScript testing framework for writing and running tests.

## Functionality Added 📋

- **Create Product:** `POST /product/create` - Create a new product.
- **Get All Products:** `GET /products` - Get a list of all products.
- **Update Product:** `PUT /update/:id` - Update an existing product.
- **Search Products:** `GET /search` - Search for products using regular expressions.
- **Delete Product:** `DELETE /delete/:id` - Delete an existing product.

## How to Test 🧪

1. Make sure Node.js and npm are installed on your machine.
2. Clone this repository: `git clone https://github.com/your-username/e-commerce-api.git`
3. Install dependencies: `npm install`
4. Run tests: `npm test`

## How to Run Locally with Postman 🏃‍♂️

1. Follow the "How to Test" steps to set up the project.
2. Start the server: `npm start`
3. Open Postman and use the following routes:

   - **Create Product:** `POST http://localhost:7000/product/create`
     - Body (JSON): `{ "name": "Product Name", "description": "Product Description", "price": 19.99, "variants": [{ "name": "Variant 1", "sku": "V1-SKU", "additionalCost": 5, "stockCount": 100 }] }`

   - **Get All Products:** `GET http://localhost:7000/products`

   - **Update Product:** `PUT http://localhost:7000/update/:id`
     - Body (JSON): `{ "name": "Updated Product Name", "description": "Updated Product Description", "price": 29.99, "variants": [{ "name": "Updated Variant 1", "sku": "V1-SKU", "additionalCost": 10, "stockCount": 150 }] }`

   - **Search Products:** `GET http://localhost:7000/search?query=Product`

   - **Delete Product:** `DELETE http://localhost:7000/delete/:id`

Feel free to explore and enhance the functionality as needed for your project!
