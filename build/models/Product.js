"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ProductSchema = new mongoose_1.default.Schema({
    uniqueId: {
        type: String,
        required: true,
    },
    productThumbnailUrl: {
        type: String,
        required: true,
    },
    productImages: {
        type: (Array),
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
    isDigital: {
        type: Boolean,
        required: true,
    },
});
exports.default = mongoose_1.default.model("Product", ProductSchema);
