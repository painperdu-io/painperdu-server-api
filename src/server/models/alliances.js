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
  timestamps: true,
});

export default mongoose.model('Alliances', AlliancesSchema);
