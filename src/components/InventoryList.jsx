import React from 'react';
import InventoryItem from './InventoryItem';

function InventoryList({ items, onDelete, onToggleLowStock }) {
  return (
    <div>
      <h3>Inventory List</h3>
      {items.length === 0 ? (
        <p>No items in inventory.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <InventoryItem
              key={item.id}
              item={item}
              onDelete={onDelete}
              onToggleLowStock={onToggleLowStock}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default InventoryList;