import mongoose from 'mongoose';

const alliancesSchema = new mongoose.Schema({
  // id
  id: { type: String, unique: true, required: true },
});

export default mongoose.model('alliances', alliancesSchema);
