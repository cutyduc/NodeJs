const { render } = require("ejs");
const express = require("express");
const path = require("path");
require("dotenv").config();
// import express from "express";
const app = express();
const port = process.env.PORT || 6969;
const hostname = process.env.HOST_NAME;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Hello World!aaaaaaaaaaa");
});

app.get("/duc", (req, res) => {
  // res.send("Hello World! duc");
  res.render("sample.ejs");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
