const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  date: Date,
  city: String,
  activeUsers: String,
  sessions: String,
}, { versionKey: false, timestamps: true });

module.exports = mongoose.model("Data", dataSchema)


// TODO: Change back string to numbers for active users and sessions later. 