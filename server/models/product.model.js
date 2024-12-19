import mongoose from "mongoose";

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
    },

    quantity: {
      type: Number,
      required: [true, "Product quantity is required"],
    },

    price: {
      type: Number,
      required: [true, "Product price is required"],
    },

    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true, // this automatically adds the createdAt and updatedAt fields
  }
);

// This will be pluarlized to products in the database
const Product = mongoose.model("Product", ProductSchema);

export default Product;
