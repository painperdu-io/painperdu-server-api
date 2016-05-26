import mongoose from 'mongoose';

const productsSchema = new mongoose.Schema({
  // id
  id: { type: String, unique: true, required: true },
});

export default mongoose.model('products', productsSchema);
