const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'A user must have a first name'],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'A user must have a last name'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'A user must have a email name'],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'A user must have a password name'],
    trim: true,
  },
  role: {
    type: Boolean,
    default: true,
  },
  registeredCourses: [
    {
      courseID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
      },
      currentTopicNo: {
        type: Number,
        default: 0,
      },
    },
  ],
});
const User = mongoose.model('User', userSchema);
module.exports = User;
