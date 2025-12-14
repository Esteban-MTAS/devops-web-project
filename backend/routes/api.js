const express = require("express");
const router = express.Router();
const db = require("../models/db");


router.get("/hello", (req, res) => {
  res.json({ message: "Hola desde el backend!" });
});


router.get("/items", async (req, res) => {
  try {
    const items = await db.getItems();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los items" });
  }
});

router.post("/items", async (req, res) => {
  try {
    const { name } = req.body;
    await db.addItem(name);
    res.status(201).json({ message: "Item agregado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al agregar el item" });
  }
});

module.exports = router;