import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  uniqueId: {
    type: String,
    required: true,
  },
  productThumbnailUrl: {
    type: String,
    required: true,
  },
  productImages: {
    type: Array<String>,
    required: true,
  },
  promoCodes: {
    type: Array,
    required: true,
  },
  productBrand: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  isPremium: {
    type: Boolean,
    required: true,
  },
  productDescription: {
    type: String,
    required: true,
  },
  productLink: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Product", ProductSchema);
