const Product = require('../model/product')


//create
module.exports.create = async (req, res) => {
  try {
    const { name, description, price, variants } = req.body;

    const product = await Product.create({
      name,
      description,
      price,
      variants
    });

    if (!product) {
      return res.status(400).json({
        message: "Product not created",
      });
    }

    return res.status(200).json({
      product,
    });

  } catch (error) {
    console.log("Error in creating a product", error);
    return res.status(500).json({
      message: "Error in creating a project",
      error: error,
    });
  }
};

//List of Products
module.exports.ListofProducts = async (req, res) => {
  try {
    const products = await Product.find({});

    if (products.length === 0) {
      return res.status(404).json({
        message: "No products added",
      });
    }

    return res.status(200).json({
      products,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error in getting all Products",
      error: error.message,
    });
  }
};


// Delete product
module.exports.delete = async (req, res) => {
  try {
    const productId = req.params.id;

    const product = await Product.findByIdAndDelete(productId);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    return res.status(200).json({
      message: "Product deleted successfully",
      data: product,
    });
  } catch (error) {
    console.log(error); 
    return res.status(500).json({
      message: "Error in deleting Product",
      error: error.message,
    });
  }
};

// Update product
module.exports.update = async (req, res) => {
  try {
    const productId = req.params.id;

    const { name, description, price, variants } = req.body;

    const updatedProduct = {
      name,
      description,
      price,
      variants,
    };

    const product = await Product.findByIdAndUpdate(
      productId,
      updatedProduct,
      { new: true }
    );

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    return res.status(200).json({
      message: "Product updated successfully",
      data: product,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error in updating Product",
      error: error.message,
    });
  }
};

//Search product 
module.exports.searchProducts = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query) {
      return res.status(400).json({
        message: "Please provide a search query.",
      });
    }

    const searchResults = await Product.find({
      $or: [
        { name: { $regex: query, $options: 'i' } }, 
        { description: { $regex: query, $options: 'i' } }, 
        { 'variants.name': { $regex: query, $options: 'i' } },
      ],
    });

    return res.status(200).json({
      results: searchResults,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error in searching products",
      error: error.message,
    });
  }
};