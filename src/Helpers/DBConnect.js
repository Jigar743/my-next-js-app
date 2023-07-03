import * as mongoose from "mongoose";

const dbUrl = process.env.DB_URL;

if (!dbUrl) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export default async function dbConnect(req, res, next) {
  if (cached.conn) {
    console.log("Excisting database connection!");
    next();
    return cached.conn;
  }

  if (!cached.promise) {
    console.log("Creating new database connection!");
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    cached.promise = mongoose
      .connect(dbUrl, opts)
      .then((mongoose) => {
        next();
        return mongoose;
      })
      .catch((e) => {
        console.log("Something went wrong!", e);
        res.status(502).json({ message: "Internal server error!" });
      });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
