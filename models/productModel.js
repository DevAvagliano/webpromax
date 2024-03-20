import { Schema, models, model } from 'mongoose'

const productSchema = new Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  quantity: { type: Number, required: true },
  priceUnit: { type: Number, required: true },
  priceSale: { type: Number, required: true },
  description: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: true }
})

productSchema.pre('findOneAndUpdate', function () {
  const update = this.getUpdate()
  this.set({
    priceSale: update.priceUnit * 1.35
  })
})
const Product = models.Product || model('Product', productSchema)

export default Product
