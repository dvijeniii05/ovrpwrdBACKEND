import express from "express";
import bodyParser from "body-parser";
import Product from "../models/Product";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import { TokenInterface } from "./userAuth";
import User from "../models/User";

export const router = express.Router();

const jsonParser = bodyParser.json();

router.get("/getProducts", jsonParser, async (req, res) => {
  Product.find({}).then((allProducts) => {
    res.status(200).send(allProducts);
  });
});

router.post("/addNewProducts", jsonParser, async (req, res) => {
  const productSecret = req.headers["authorization"] as string;
  if (productSecret === process.env.PRODUCT_SECRET) {
    const receivedProducts: [] = req.body;
    receivedProducts.map((singleProduct: any) => {
      const newProduct = new Product({ uniqueId: uuidv4(), ...singleProduct });
      newProduct.save();
    });
    res.status(200).send("All products added");
  }
});

router.patch("/buyProduct", jsonParser, async (req, res) => {
  const token = req.headers["authorization"] as string;
  const { uniqueId } = req.body;
  const today = new Date();

  const day = today.getDate().toString().padStart(2, "0"); // Get the day and pad with leading zero if necessary
  const month = (today.getMonth() + 1).toString().padStart(2, "0"); // Get the month (months are 0-indexed) and pad with leading zero if necessary
  const year = today.getFullYear();

  const formattedDate = `${day}.${month}.${year}`;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    const email = (decoded as TokenInterface).userEmail;

    const user = await User.findOne({ email });
    const product = await Product.findOne({ uniqueId });
    if (product != null && user != null) {
      if (product.promoCodes.length > 0) {
        const {
          productThumbnailUrl,
          promoCodes,
          productBrand,
          productName,
          price,
          isPriceInPerks,
          productLink,
        } = product;
        const userPromoCode = promoCodes[0];
        const updatedPromoCodes = promoCodes.filter(
          (promoCode) => promoCode !== userPromoCode
        );
        product.promoCodes = updatedPromoCodes;
        await product.save();
        isPriceInPerks ? (user.perks -= price) : (user.relics -= price);

        user.purchases.push({
          productThumbnailUrl,
          productBrand,
          productName,
          price,
          isPriceInPerks,
          uniqueId,
          promoCode: userPromoCode,
          date: formattedDate,
          productLink,
        });
        await user.save();
        res.status(200).send({ promoCode: userPromoCode });
      } else {
        res.status(402).send({ message: "This product is out of stock" });
      }
    } else {
      res.status(404).send({ message: "Product not found" });
    }
  } catch {
    res.status(500).send({ message: "Something went wrong" });
  }
});
