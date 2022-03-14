const express = require("express");
const app = express();

app.use(express.json())

const pelanggan = require("../controllers/pelanggan.controller")
app.get("/", pelanggan.getData)

app.post("/", pelanggan.addData)

app.put("/:id_pelanggan", pelanggan.updateData)

app.delete("/:id_pelanggan", pelanggan.deleteData)

module.exports = app

