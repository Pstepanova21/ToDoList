import React, { useState } from "react";
import styles from "./addButton.module.css";

const AddButton = ({ onAdd }) => {
  const [newItem, setNewItem] = useState("");

  const handleChange = (e) => {
    setNewItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem.trim() === "") return;
    const newItemObject = {
      id: Date.now(),
      name: newItem,
      color: "",
    };
    onAdd(newItemObject);
    setNewItem("");
  };

  return (
    <form className={styles.AddForm} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new item..."
        value={newItem}
        onChange={handleChange}
        className={styles.input}
      />
      <button type="submit" className={styles.addButton}>
        Add
      </button>
    </form>
  );
};

export default AddButton;
