import { Schema } from "mongoose";
import BaseProduct from "./baseProduct";

export default interface Product {
  name: string;
  photo: string;
  price: number;
  quantity: number;
  combo: [Schema.Types.ObjectId];
  composition: [Schema.Types.ObjectId];
}
