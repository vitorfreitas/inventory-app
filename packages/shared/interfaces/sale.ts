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
  quantity: number
}

// - Produtos
//     - Id
//     - Quantidade
//     - Combo
//         - Id
//         - Quantidade
//         - Composição
//           - Id
//     - Composição
//         - Id
//         - Quantidade
// - Data da venda!
// - Observação da venda
// - Cliente
// - Forma de pagamento
//     - Id
//     - Receber em
// - Desconto aplicado

export default interface Sale {
  products: [SaleItem]
  customer: Schema.Types.ObjectId
  date: Date
  discount: number
  note: string
}
