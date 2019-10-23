export default interface BaseProduct {
  name: string;
  costPrice: number;
  additionalPrice: number;
  quantity: number;
  minQuantity: number;
  expirationDate: Date;
}
