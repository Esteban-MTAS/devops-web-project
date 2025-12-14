let items = ["Item inicial"];

async function getItems() {
  return items;
}

async function addItem(name) {
  items.push(name);
}

module.exports = { getItems, addItem };