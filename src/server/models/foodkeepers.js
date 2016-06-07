import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const FoodkeepersSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  location: {
    street: {
      type: String,
      required: true,
    },
    number: {
      type: String,
    },
    apartment: {
      type: String,
    },
    floor: {
      type: String,
    },
    additional: {
      type: String,
    },
    infos: {
      type: String,
    },
    city: {
      type: String,
      required: true,
    },
    postcode: {
      type: String,
      required: true,
    },
    coordinates: {
      type: [Number], // Longitude - Latitude
      index: '2d',
    },
  },
}, {
  timestamps: true,
});

export default mongoose.model('Foodkeepers', FoodkeepersSchema);
