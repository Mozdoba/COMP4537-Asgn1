import express from "express";

import {
  deleteRowFromTable,
  insert,
  update,
  selectAll,
  selectLastRow,
} from "./util/sql-queries";

const app = express();
const endPointRoot = "/assignment1/v1/quotes";
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("Front-end"));
app.use("/css", express.static(__dirname + "/css"));
app.use("/js", express.static(__dirname + "/js"));

app.delete(endPointRoot, (req, res) => {
  console.log("DELETE", req.body);
  console.log("ID", req.body.id);
  deleteRowFromTable(req.body.id);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html")
});

app.get("/admin", (req, res) => {
  res.sendFile(__dirname + "/admin.html")
});

app.get("/reader", (req, res) => {
  res.sendFile(__dirname + "/reader.html")
});

app.get(endPointRoot, (req, res) => {
  console.log("GET", req.body);
  const isAdmin = req.query.isAdmin === "true" ? true : false;
  selectAll({
    res: res,
    isAdmin: isAdmin,
  });
});

app.get(`${endPointRoot}/1`, (req, res) => {
  console.log("GET", req.body);
  console.log("Query", req.query);
  selectLastRow({
    res: res,
    isGetRequest: true,
  });
});

app.post(endPointRoot, (req, res) => {
  console.log("POST", req.body);
  insert({
    quote: req.body.quote,
    author: req.body.author,
  });
  selectLastRow({
    res: res,
    isGetRequest: false,
  });
});

app.put(endPointRoot, (req, res) => {
    console.log("PUT", req.body)
    update({
      id: req.body.id,
      quote: req.body.quote,
      author: req.body.author,
    });
});

app.listen(port, () => {
    console.log("Connected! Waiting for request on port", port);
});