const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  courseCode: {
    type: String,
    required: [true, 'Course Code Required'],
    trim: true,
    unique: true,
  },
  courseName: {
    type: String,
    required: [true, 'Course Name Required'],
    trim: true,
    unique: true,
  },
  courseDuration: {
    type: Number,
    default: 10,
  },
  courseContent: [
    {
      topicName: {
        type: String,
        required: [true, 'Course Topic Name Required'],
        trim: true,
        unique: true,
      },
      topicDescription: {
        type: String,
        required: [true, 'Topic Description Required'],
        trim: true,
      },
      topicVideoUrl: {
        type: String,
        required: [true, 'Topic Video Url Required'],
        trim: true,
        unique: true,
      },
    },
  ],
});
const Course = mongoose.model('Course', courseSchema);
module.exports = Course;
