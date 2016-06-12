import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MarketsSchema = new Schema({
  favorite: {
    type: Boolean,
    default: false,
  },
  blason: {
    type: Number,
    default: 1,
  },
  color: {
    type: Number,
    default: 1,
  },
  perimeter: {
    type: Number,
    required: true,
  },
  foodkeeper: {
    type: Schema.Types.ObjectId,
    ref: 'Foodkeepers',
  },
}, {
  timestamps: true,
});

export default mongoose.model('Markets', MarketsSchema);
