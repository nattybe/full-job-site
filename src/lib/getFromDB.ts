"use server"
import * as mongoose from "mongoose"
import {Job} from "./models/Job";

export default async function getFromDB(searchPhrase:String) {
  // console.log("get From DB");
  
  const dbString = process.env.DB_STRING;
  const db = await mongoose.connect(dbString || " ");
  try {
    // console.log("get From DB 2");
    // console.log("MongoDB database connected");
    const jobs = await Job.find({
      $or: [
        { title: { $regex: searchPhrase, $options: "i" } },
        { content: { $regex: searchPhrase, $options: "i" } },
      ],
    }).limit(10);
    const estimatedSearchResult = await Job.countDocuments({
      $or: [
        { title: { $regex: searchPhrase, $options: "i" } },
        { content: { $regex: searchPhrase, $options: "i" } },
      ],
    });
    // console.log(jobs);

    // TODO: this is here for ↓ try fixing it
    // Warning: Only plain objects can be passed to Client Components from Server Components. Objects with toJSON methods are not supported. Convert it manually to a simple value before passing it to props.

    return JSON.parse(JSON.stringify({ jobs, estimatedSearchResult }));
  } catch (error:any) {
    console.error("from getFromBD: "+error.message);
  }finally{
    await db.connection.close();
  }
  
}