const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  id : {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  postedSince: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  requirements: {
    title:String,
    list:Array
  },
  whatwedo: {
    title:String,
    list:Array
  },

});

const job = mongoose.model('job', jobSchema);

module.exports = job;
