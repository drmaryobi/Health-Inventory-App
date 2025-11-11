import React from 'react';

function InventoryItem({ item, onDelete, onToggleLowStock }) {
  const { id, name, quantity, category, expiry, lowStock } = item;

  return (
    <li style={{ border: '1px solid #ccc', marginBottom: '10px', padding: '10px' }}>
      <strong>{name}</strong> ({category})<br />
      Quantity: {quantity} {lowStock && <span style={{ color: 'red' }}>⚠️ Low Stock</span>}<br />
      Expiry: {expiry || 'N/A'}<br />
      <button onClick={() => onToggleLowStock(id)}>
        {lowStock ? 'Mark as Sufficient' : 'Mark as Low Stock'}
      </button>
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
}

export default InventoryItem;