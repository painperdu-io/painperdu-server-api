import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const AlliancesSchema = new Schema({
  status: {
    type: String,
    enum: ['abandoned', 'current', 'terminated'],
    default: 'current',
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
  read: {
    applicant: {
      type: Date,
      required: true,
    },
    giver: {
      type: Date,
      required: true,
    },
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
  request: {
    completed: {
      type: Boolean,
      default: false,
    },
    delayed: {
      type: Boolean,
      default: false,
    },
    date: {
      type: String,
      required: true,
    },
    timeStart: {
      type: String,
      required: true,
    },
    timeEnd: {
      type: String,
      required: true,
    },
  },
  availability: {
    completed: {
      type: Boolean,
      default: false,
    },
    giver: {
      type: Boolean,
      default: false,
    },
    applicant: {
      type: Boolean,
      default: false,
    },
    date: {
      type: String,
    },
    timeStart: {
      type: String,
    },
    timeEnd: {
      type: String,
    },
  },
  exchange: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
});

export default mongoose.model('Alliances', AlliancesSchema);
