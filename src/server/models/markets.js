import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MarketsSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
  },
  favorite: {
    type: Boolean,
    required: true,
  },
  foodkeeper: {
    type: Schema.Types.ObjectId,
    ref: 'Foodkeepers',
  },
}, {
  timestamps: {
    createdAt: 'created_at',
  },
});

export default mongoose.model('Markets', MarketsSchema);
