"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const Product_1 = __importDefault(require("../models/Product"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const uuid_1 = require("uuid");
const User_1 = __importDefault(require("../models/User"));
exports.router = express_1.default.Router();
const jsonParser = body_parser_1.default.json();
exports.router.get("/getProducts", jsonParser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    Product_1.default.find({}).then((allProducts) => {
        res.status(200).send(allProducts);
    });
}));
exports.router.post("/addNewProducts", jsonParser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productSecret = req.headers["authorization"];
    if (productSecret === process.env.PRODUCT_SECRET) {
        const receivedProducts = req.body;
        receivedProducts.map((singleProduct) => {
            const newProduct = new Product_1.default(Object.assign({ uniqueId: (0, uuid_1.v4)() }, singleProduct));
            newProduct.save();
        });
        res.status(200).send("All products added");
    }
}));
exports.router.patch("/buyProduct", jsonParser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.headers["authorization"];
    const { uniqueId } = req.body;
    const today = new Date();
    const day = today.getDate().toString().padStart(2, "0"); // Get the day and pad with leading zero if necessary
    const month = (today.getMonth() + 1).toString().padStart(2, "0"); // Get the month (months are 0-indexed) and pad with leading zero if necessary
    const year = today.getFullYear();
    const formattedDate = `${day}.${month}.${year}`;
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        const email = decoded.userEmail;
        const user = yield User_1.default.findOne({ email });
        const product = yield Product_1.default.findOne({ uniqueId });
        if (product != null && user != null) {
            if (product.promoCodes.length > 0) {
                const { productThumbnailUrl, promoCodes, productBrand, productName, price, productLink, } = product;
                const userPromoCode = promoCodes[0];
                const updatedPromoCodes = promoCodes.filter((promoCode, index) => index !== promoCodes.indexOf(userPromoCode));
                // const updatedPromoCodes = promoCodes.splice(
                //   promoCodes.indexOf(userPromoCode),
                //   1
                // );
                product.promoCodes = updatedPromoCodes;
                yield product.save();
                user.relics -= price;
                user.purchases.push({
                    productThumbnailUrl,
                    productBrand,
                    productName,
                    price,
                    uniqueId,
                    promoCode: userPromoCode,
                    date: formattedDate,
                    productLink,
                });
                yield user.save();
                res.status(200).send({ promoCode: userPromoCode });
            }
            else {
                res.status(402).send({ message: "This product is out of stock" });
            }
        }
        else {
            res.status(404).send({ message: "Product not found" });
        }
    }
    catch (_a) {
        res.status(500).send({ message: "Something went wrong" });
    }
}));
