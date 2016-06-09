import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const AlliancesSchema = new Schema({
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
  steps: [
    {
      createAt: {
        type: Date,
      },
      user: {
        type: String,
        enum: ['applicant', 'giver'],
      },
      type: {
        type: String,
        enum: ['DEMANDE', 'ECHANGE'],
      },
      status: {
        read: {
          type: Boolean,
          default: false,
        },
        completed: {
          type: Boolean,
          default: false,
        },
      },
      datas: {
        response: {
          type: Boolean,
          default: false,
        },
        date: {
          type: Date,
        },
      },
    },
  ],
}, {
  timestamps: true,
});

export default mongoose.model('Alliances', AlliancesSchema);
