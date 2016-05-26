import mongoose from 'mongoose';

const reviewsSchema = new mongoose.Schema({
  // id
  id: { type: String, unique: true, required: true },

  // name
  notation: { type: Number, required: true },
});

export default mongoose.model('reviews', reviewsSchema);
