import mongoose from 'mongoose';

const foodkeepersSchema = new mongoose.Schema({
  // id
  id: { type: String, unique: true, required: true },
});

export default mongoose.model('foodkeepers', foodkeepersSchema);
