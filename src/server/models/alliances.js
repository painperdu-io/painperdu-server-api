import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const AlliancesSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
  },
  status: {
    type: String,
    enum: ['abandoned', 'current', 'terminated'],
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Products',
  },
  applicant: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
  },
  giver: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
  },
}, {
  timestamps: true,
});

export default mongoose.model('Alliances', AlliancesSchema);
