import { useEffect, useState } from "react";

// Вспомогательная функция для получения сохраненного значения из localStorage
const getSavedValue = (key, initialValue) => {
  // Получаем элемент из localStorage
  const savedValue = JSON.parse(localStorage.getItem(key));
  // Если элемент существует в localStorage, возвращаем его
  if (savedValue !== null) return savedValue;
  // Если элемент не существует, возвращаем начальное значение
  return initialValue;
};

// Кастомный хук для использования localStorage
export default function useLocalStorage(key, initialValue) {
  // Используем useState с функцией для получения начального значения из localStorage
  const [value, setValue] = useState(() => getSavedValue(key, initialValue));

  // useEffect для обновления localStorage всякий раз, когда значение изменяется
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]); // Добавляем key в массив зависимостей, чтобы обрабатывать изменения ключа

  // Возвращаем текущее значение и функцию для его изменения
  return [value, setValue];
}
