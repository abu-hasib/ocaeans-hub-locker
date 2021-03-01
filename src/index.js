import logOut from "./ano.js";
import cors from 'cors';

import sep from "path";

console.log("Hello ever running Node.js project.");
logOut();
console.log(process.env.MY_SECRET);

import express from "express";

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/success', (req, res) => {
  res.send('navigation to the rental page is successful');
});

app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`));