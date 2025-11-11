import React, { useContext } from 'react';
import InventoryForm from './components/InventoryForm';
import InventoryList from './components/InventoryList';
import useInventory from './hooks/useInventory';
import { ThemeContext } from './context/ThemeContext';
import './App.css';

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { items, addItem, deleteItem, toggleLowStock } = useInventory();

  return (
    <div className={`app-container ${theme}`}>
      <header>
        <h1>Health Inventory Manager</h1>
        <button onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </header>

      <InventoryForm onAddItem={addItem} />
      <InventoryList
        items={items}
        onDelete={deleteItem}
        onToggleLowStock={toggleLowStock}
      />
    </div>
  );
}

export default App;
