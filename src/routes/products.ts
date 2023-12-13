import express from "express";
import bodyParser from "body-parser";
import Product from "../models/Product";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import { TokenInterface } from "./userAuth";
import User from "../models/User";
import { Telegraf } from "telegraf";
import { marketplaceChatId } from "../steamAuth";

export const router = express.Router();

const jsonParser = bodyParser.json();

// THIS TO BE MOVED TO PRODUCT PURCAHSING CALL
const bot = new Telegraf("6942613564:AAHw2Ck2UUnPi7WZDZgy8IrqNLJWaIIXTfE");

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
          productLink,
        } = product;
        const userPromoCode = promoCodes[0];
        const updatedPromoCodes = promoCodes.filter(
          (promoCode, index) => index !== promoCodes.indexOf(userPromoCode)
        );
        // const updatedPromoCodes = promoCodes.splice(
        //   promoCodes.indexOf(userPromoCode),
        //   1
        // );
        product.promoCodes = updatedPromoCodes;
        await product.save();
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
        await user.save();
        bot.telegram.sendMessage(
          marketplaceChatId,
          `Product purchased: 
          name -> ${productName},
          brand -> ${productBrand}, 
          price -> ${price}, 
          uniqueId -> ${uniqueId}, 
          promoCode -> ${userPromoCode}
          productImageUrl -> ${productThumbnailUrl}`
        );
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
