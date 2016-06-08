import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const AlliancesSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
  },
  status: {
    type: String,
    enum: ['abandoned', 'current', 'terminated'],
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Products',
    required: true,
  },
  users: {
    applicant: {
      type: Schema.Types.ObjectId,
      ref: 'Users',
      required: true,
    },
    giver: {
      type: Schema.Types.ObjectId,
      ref: 'Users',
      required: true,
    },
  },
}, {
  timestamps: true,
});

export default mongoose.model('Alliances', AlliancesSchema);
