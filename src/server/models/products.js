import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
  },
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
  available: {
    type: Boolean,
    required: true,
  },
  foodkeepers: [{
    type: Schema.Types.ObjectId,
    ref: 'Foodkeepers',
  }],
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
  },
}, {
  timestamps: true,
});

export default mongoose.model('Products', ProductsSchema);
