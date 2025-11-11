import React, { useState } from 'react';

function InventoryForm({ onAddItem }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('');
  const [expiry, setExpiry] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !quantity || !category) return;

    const newItem = {
      id: Date.now(),
      name,
      quantity: parseInt(quantity),
      category,
      expiry,
      lowStock: parseInt(quantity) < 10,
    };

    onAddItem(newItem);
    setName('');
    setQuantity('');
    setCategory('');
    setExpiry('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Inventory Item</h3>
      <input
        type="text"
        placeholder="Item name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="date"
        value={expiry}
        onChange={(e) => setExpiry(e.target.value)}
      />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default InventoryForm;