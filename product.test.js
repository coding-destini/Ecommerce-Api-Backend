const request = require('supertest');
const { app, server } = require('./index');
const mongoose = require('mongoose')


// Testing for Monog Database connection :)
beforeAll(async () => {
  console.log('Connecting to MongoDB...');
  try {
    await mongoose.connect(process.env.MONGO_URL_TEST, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
});

// After testing disconnecting DB
afterAll(async () => {
  console.log('Disconnecting from MongoDB...');
  try {
    await mongoose.disconnect();

    console.log('Disconnected from MongoDB');
    console.log('Closing the server...');
    server.close();
    console.log('Server closed');

  } catch (error) {
    console.error('Error disconnecting from MongoDB:', error);
  }
});

//=========== Product CRUD  testing =============== 
describe('Product CRUD Operations and Search', () => {
  let productId; // To store the created product ID for later tests

  //Create Product Testing
  test('POST /products - Create a new product', async () => {
    const response = await request(app)
      .post('/product/create')
      .send({
        name: 'Test Product',
        description: 'Test description',
        price: 29.99,
        variants: [
          { name: 'Variant 1', sku: 'V1-SKU', additionalCost: 5, stockCount: 100 },
        ],
      });

    expect(response.statusCode).toBe(200);
    expect(response.body.product._id).toBeDefined();
    productId = response.body.product._id; // Save the product ID for later tests
  });

  //Get all Product Testing
  test('GET /products - Get all products', async () => {
    const response = await request(app).get('/products');

    expect(response.statusCode).toBe(200);
    expect(response.body.products.length).toBeGreaterThan(0);
  });

  //Update Product Testing
  test('PUT /products/:id - Update an existing product', async () => {
    const response = await request(app)
      .put(`/update/${productId}`)
      .send({
        name: 'Updated Test Product',
        description: 'Updated Test description',
        price: 39.99,
        variants: [
          { name: 'Updated Variant 1', sku: 'V1-SKU', additionalCost: 10, stockCount: 150 },
        ],
      });

    expect(response.statusCode).toBe(200);
    expect(response.body.data._id).toBe(productId);
    expect(response.body.data.name).toBe('Updated Test Product');
  });

  //Search Product Testing
  test('GET /search - Search for products', async () => {
    const response = await request(app)
      .get('/search')
      .query({ query: 'Test' });

    expect(response.statusCode).toBe(200);
    expect(response.body.results.length).toBeGreaterThan(0);
  });

  //Delete Product Testing
  test('DELETE /products/:id - Delete an existing product', async () => {
    const response = await request(app).delete(`/delete/${productId}`);

    expect(response.statusCode).toBe(200);
    expect(response.body.data._id).toBe(productId);
  });
});
