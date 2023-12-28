import mongoose from "mongoose";

const { Schema } = mongoose;
const jobSchema = new Schema({
  _id: String,
  title: String,
  url: {
    type: String,
    required: true,
    unique: true,
  },
  date: String,
  from: String,
  content: String,
  internal:Boolean,
  image_url: String,
  all_content: String,
});

export const Job= mongoose.models?.Job || mongoose.model("Job",jobSchema);
