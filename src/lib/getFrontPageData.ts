"use server";
import * as mongoose from "mongoose";
import { Job } from "./models/Job";

async function getFeaturedJobs() {
  const dbString = process.env.DB_STRING;
  const db = await mongoose.connect(dbString || " ");
  try {
    
    const jobs = await Job.find({internal:true}).limit(10);
    // const estimatedSearchResult = await Job.countDocuments({
    //   $or: [
    //     { title: { $regex: searchPhrase, $options: "i" } },
    //     { content: { $regex: searchPhrase, $options: "i" } },
    //   ],
    // });
    // console.log(jobs);  

    // TODO: this is here for ↓ try fixing it
    // Warning: Only plain objects can be passed to Client Components from Server Components. Objects with toJSON methods are not supported. Convert it manually to a simple value before passing it to props.

    return JSON.parse(JSON.stringify({ jobs }));
  } catch (error: any) {
    console.error("from getFromBD: " + error.message);
  } finally {
    await db.connection.close();
  }
}
async function getNewJobs() {
    const dbString = process.env.DB_STRING;
    const db = await mongoose.connect(dbString || " ");
    try {
      const todayFormatted = new Date()
      .toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
      .toUpperCase();      
      const jobs = await Job.find({ date: "NOVEMBER 16, 2023" }).limit(10);
      // const estimatedSearchResult = await Job.countDocuments({
      //   $or: [
      //     { title: { $regex: searchPhrase, $options: "i" } },
      //     { content: { $regex: searchPhrase, $options: "i" } },
      //   ],
      // });
      // console.log(jobs);

      // TODO: this is here for ↓ try fixing it
      // Warning: Only plain objects can be passed to Client Components from Server Components. Objects with toJSON methods are not supported. Convert it manually to a simple value before passing it to props.

      return JSON.parse(JSON.stringify({ jobs }));
    } catch (error: any) {
      console.error("from getFromBD: " + error.message);
    } finally {
      await db.connection.close();
    }
}
async function getForFresh() {
      const dbString = process.env.DB_STRING;
      const db = await mongoose.connect(dbString || " ");
      try {
        const jobs = await Job.find({
          $or: [
            { title: { $regex: 'fresh', $options: "i" } },
            { content: { $regex: 'fresh', $options: "i" } },
          ],
         }).limit(10);
        // console.log(jobs);

        // TODO: this is here for ↓ try fixing it
        // Warning: Only plain objects can be passed to Client Components from Server Components. Objects with toJSON methods are not supported. Convert it manually to a simple value before passing it to props.

        return JSON.parse(JSON.stringify({ jobs }));
      } catch (error: any) {
        console.error("from getFromBD: " + error.message);
      } finally {
        await db.connection.close();
      }
}
export {getFeaturedJobs,getNewJobs,getForFresh}
