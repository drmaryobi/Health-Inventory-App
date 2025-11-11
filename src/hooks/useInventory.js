import { useState, useEffect } from 'react';

function useInventory() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('inventory');
    if (saved) setItems(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('inventory', JSON.stringify(items));
  }, [items]);

  const addItem = (item) => {
    setItems((prev) => [...prev, item]);
  };

  const deleteItem = (id) => {
    setItems((prev) => prev.filter(item => item.id !== id));
  };

  const toggleLowStock = (id) => {
    setItems((prev) =>
      prev.map(item =>
        item.id === id ? { ...item, lowStock: !item.lowStock } : item
      )
    );
  };

  return { items, addItem, deleteItem, toggleLowStock, setItems };
}

export default useInventory;