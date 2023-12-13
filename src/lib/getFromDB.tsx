import mongoose from "mongoose"
import {Job} from "./models/Job";
export default async function getFromDB() {
  const dbString = process.env.DB_STRING;
  try {
    await mongoose.connect(dbString||" ");
    console.log("MongoDB database connected");
    const jobs = await Job.find({}).limit(5);
    console.log(jobs?.length);
    return jobs;
  } catch (error:any) {
    console.error("from getFromBD: "+error.message);
  }
}