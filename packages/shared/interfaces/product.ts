import { Schema } from "mongoose";
import BaseProduct from "./baseProduct";

export default interface Product {
  id: string
  name: string
  picture: string
  price: number
}
