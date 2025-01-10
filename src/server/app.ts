import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("ola");
  return;
});

export { app };
