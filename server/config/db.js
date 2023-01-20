import mongoose from "mongoose";

export const connectWithDb = () => {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log(`CONNECTED TO DB`))
    .catch((error) => {
      console.log(`DB CONNECTION ISSUES`);
      console.log(error);
      process.exit(1);
    });
};