import React from "react";
import ListItem from "../ListItem/ListItem";
import AddButton from "../ AddButton/AddButton";
import styles from "./content.module.css";
import useLocalStorage from "../../hooks/useLocalStorage";

function Content() {
  const [items, setItems] = useLocalStorage("todolist", []);

  const addItem = (newItem) => {
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
  };

  const removeItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  return (
    <main className={styles.Content}>
      <ul className={styles.List}>
        {items.map((item) => (
          <ListItem
            key={item.id}
            id={item.id}
            name={item.name}
            color={item.color}
            onDelete={removeItem}
          />
        ))}
      </ul>
      <AddButton onAdd={addItem} />
    </main>
  );
}

export default Content;
