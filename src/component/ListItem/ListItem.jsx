import { useState } from "react";
import styles from "./listItem.module.css";

function ListItem({ id, name, color, onDelete }) {
  const [checked, setChecked] = useState(false);

  const handleCheckedState = () => {
    setChecked(!checked);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className={`${styles.item} ${checked ? styles.checked : ""}`}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={checked}
        onChange={handleCheckedState}
      />
      <label className={styles.label}>{name}</label>
      <button className={styles.button} onClick={handleDelete}>
        Удалить
      </button>
    </div>
  );
}

export default ListItem;
