import mongoose from 'mongoose';

const ratesSchema = new mongoose.Schema({
  // id
  id: { type: String, unique: true, required: true },

  // name
  name: { type: String, required: true },
});

export default mongoose.model('users', ratesSchema);
