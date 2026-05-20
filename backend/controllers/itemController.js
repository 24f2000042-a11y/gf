const Item = require('../models/Item');

const getItems = async (req, res) => {
  const items = await Item.find();
  res.json(items);
};

const createItem = async (req, res) => {
  const newItem = new Item(req.body);
  await newItem.save();
  res.status(201).json(newItem);
};

const updateItem = async (req, res) => {
  const item = await Item.findById(req.params.id);
  item.completed = !item.completed;
  await item.save();
  res.json(item);
};

const deleteItem = async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.status(204).send();
};

module.exports = { getItems, createItem, updateItem, deleteItem };