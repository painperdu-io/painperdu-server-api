import mongoose from 'mongoose';

const usersSchema = new mongoose.Schema({
  // id
  id: { type: String, unique: true, required: true },

  // mail
  mail: { type: String, unique: true, required: true },

  // lastname
  lastname: { type: String, required: true },

  // firstname
  firstname: { type: String, required: true },

  // description
  description: { type: String, required: false },

  // photo
  photo: { type: String, required: true },

  // status
  status: { type: Number, required: true },
});

export default mongoose.model('users', usersSchema);
