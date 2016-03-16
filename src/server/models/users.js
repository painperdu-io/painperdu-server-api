import mongoose from 'mongoose';

const usersSchema = new mongoose.Schema({
  // id
  id: { type: String, unique: true, required: true },

  // lastname
  lastname: { type: String, required: true },

  // firstname
  firstname: { type: String, required: true },

  // mail
  mail: { type: String, required: true },
});

export default mongoose.model('users', usersSchema);
