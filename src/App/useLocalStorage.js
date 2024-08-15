import react from 'react';
import React from 'react';

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(initialValue);



  react.useEffect(() => {
    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;
    if (!localStorageItem) {
      localStorage.setItem('TODOS_V1', JSON.
        stringify(initialValue));
      parsedItem = initialValue;
    } else {
      parsedItem = JSON.parse(localStorageItem);
    }
  });



  const saveItem = (newItem) => {
    localStorage.setItem('TODOS_V1', JSON.
      stringify(newItem));
    setItem(newItem);
  };

  return [item, saveItem];
}

export { useLocalStorage };