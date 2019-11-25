import { Schema } from 'mongoose'

// interface SaleCompositionItem {
//   id: Schema.Types.ObjectId;
//   quantity: number;
// }

// interface SaleComboItem {
//   id: Schema.Types.ObjectId;
//   quantity: number;
//   composition: [SaleCompositionItem];
// }

interface SaleItem {
  id: Schema.Types.ObjectId
  details?: Schema.Types.ObjectId
  quantity: number
}

export { SaleItem }

export default interface Sale {
  products: [SaleItem]
  customer: Schema.Types.ObjectId
  date: Date
  discount: number
  note: string
  price?: number
}
