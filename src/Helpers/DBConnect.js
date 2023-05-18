import * as mongoose from "mongoose";

const dbUrl = process.env.DB_URL;

if (!dbUrl) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export default async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    cached.promise = mongoose
      .connect(dbUrl, opts)
      .then((mongoose) => {
        console.log("Connection is established!");
        return mongoose;
      })
      .catch((e) => {
        console.log("Something wen wrong!", e);
      });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
