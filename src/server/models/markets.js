import mongoose from 'mongoose';

const marketsSchema = new mongoose.Schema({
  // id
  id: { type: String, unique: true, required: true },
});

export default mongoose.model('markets', marketsSchema);
