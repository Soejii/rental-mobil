const express = require("express");
const app = express();

app.use(express.json())

const karyawan = require("../controllers/karyawan.controller")
app.get("/", karyawan.getData)

app.post("/", karyawan.addData)

app.put("/:id_karyawan", karyawan.updateData)

app.delete("/:id_karyawan", karyawan.deleteData)

module.exports = app

