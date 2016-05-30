import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const AlliancesSchema = new Schema({
  status: {
    type: String,
    enum: ['current', 'terminated'],
  },
}, {
  timestamps: {
    createdAt: 'created_at',
  },
});

export default mongoose.model('Alliances', AlliancesSchema);
