import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const FoodkeepersSchema = new Schema({
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
    coordinates: [Number], // Longitude - Latitude
  },
}, {
  timestamps: {
    createdAt: 'created_at',
  },
});

export default mongoose.model('Foodkeepers', FoodkeepersSchema);
