import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const AlliancesSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
  },
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
