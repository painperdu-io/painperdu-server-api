import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MarketsSchema = new Schema({
  favorite: {
    type: Boolean,
    required: true,
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
