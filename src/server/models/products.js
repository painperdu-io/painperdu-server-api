import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
  icon: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  type: {
    type: String,
    enum: ['raw', 'homemade'],
  },
  quantity: {
    type: Number,
    required: true,
  },
  dlc: {
    type: Number,
    required: true,
  },
  foodkeepers: {
    type: Schema.Types.ObjectId,
    ref: 'foodkeepers',
  },
}, {
  timestamps: {
    createdAt: 'created_at',
  },
});

export default mongoose.model('Products', ProductsSchema);
