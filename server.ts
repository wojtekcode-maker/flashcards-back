import express from 'express';
import http from 'http';
import mongoose from 'mongoose';

import {config} from "./config/config";

const router = express();

mongoose
  .connect(config.mongo.url, {retryWrites: true, w: 'majority'})
  .then(() => {
    console.log('Connected to Database.');
    startServer();
  })
  .catch((err) => {
    console.log(err);
  })

const startServer = () => {
  router.use(express.urlencoded({extended: true}));
  router.use(express.json());

  /* error handling */
  router.use((req,res,next) => {
    const error = new Error('not found');
    return res.status(404).json({message: error.message});
  });

  /* server init */
  http.createServer(router).listen(config.server.port, () => {
    console.log(`Server is running on http://localhost:${config.server.port}`);
  })
}