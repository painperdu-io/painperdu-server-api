import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MarketsSchema = new Schema({
  favorite: {
    type: Boolean,
    required: true,
  },
  foodkeeper: {
    type: Schema.Types.ObjectId,
    ref: 'foodkeepers',
  },
}, {
  timestamps: {
    createdAt: 'created_at',
  },
});

export default mongoose.model('Markets', MarketsSchema);
