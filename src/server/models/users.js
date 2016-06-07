import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
  },
  login: {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    salt: {
      type: String,
      required: true,
    },
  },
  name: {
    first: {
      type: String,
      required: true,
    },
    last: {
      type: String,
      required: true,
    },
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  profile: {
    gender: {
      type: String,
      enum: ['female', 'male'],
    },
    birthday: {
      type: Date,
    },
    description: {
      type: String,
    },
  },
  score: {
    type: Number,
    required: true,
  },
  foodkeepers: [{
    type: Schema.Types.ObjectId,
    ref: 'Foodkeepers',
  }],
  markets: [{
    type: Schema.Types.ObjectId,
    ref: 'Markets',
  }],
}, {
  timestamps: true,
});

export default mongoose.model('Users', UsersSchema);
