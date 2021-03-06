import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ReviewsSchema = new Schema({
  note: {
    type: Number,
    min: 0,
    max: 5,
    required: true,
  },
  foodkeeper: {
    type: Schema.Types.ObjectId,
    ref: 'Foodkeepers',
  },
  alliance: {
    type: Schema.Types.ObjectId,
    ref: 'Alliances',
  },
}, {
  timestamps: true,
});

export default mongoose.model('Reviews', ReviewsSchema);
