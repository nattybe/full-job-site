// models/User.ts
import mongoose, { Document, Schema, Types } from "mongoose";

interface Experience {
  title: string;
  company: string;
  startDate: Date;
  endDate?: Date;
}

interface User {
  fname: string;
  lname: string;
  email: string;
  password: string;
  age: number;
  phone:number;
  savedJobs: String[]
  experience: Experience[];
}

interface UserDocument extends User, Document {}

const experienceSchema = new Schema<Experience>({
  title: {
    type: String,
  },
  company: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
  },
});

const userSchema = new Schema<UserDocument>({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    validate: {
      validator: (value: number) => value > 18,
      message: "Age must be greater than 18",
    },
  },
  phone: {
    type: Number,
    required: true,
  },
  experience: {
    type: [experienceSchema],
    default: [],
  },
  savedJobs: {
    type: [Types.ObjectId],
  },
});

export const User = mongoose.model<UserDocument>("User", userSchema);

