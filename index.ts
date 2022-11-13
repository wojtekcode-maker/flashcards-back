import express, {urlencoded} from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import {wordsRouter} from "./routers/words.router";

dotenv.config();

const app = express();
app.use(express.json());
app.use(urlencoded({
  extended: true
}));

const db = mongoose.createConnection(process.env.DATABASE_URL);
db.on('error', (e) => {
  console.log(e);
})
db.once('open', () => {
  console.log("Database is connected.")
});


app.use('/words', wordsRouter);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});