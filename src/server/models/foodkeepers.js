import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const FoodkeepersSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  picture: {
    type: String,
    default: 'http://192.168.175.2:5000/foodkeepers/fiduralp.jpg',
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
    zipcode: {
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
