const mongoose = require('mongoose');
const { Schema } = mongoose;

const mynotesSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: Date
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Notes', mynotesSchema);
