import express, { urlencoded } from "express";

const app = express();

app.use(express.json());
app.use(urlencoded({extended: false}));

export default app;