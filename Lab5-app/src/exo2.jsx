/* eslint-disable react/prop-types */
import { useState } from 'react';

export function DisplayTab({ tab = [] }) { 
  return (
    <div>
      <h3>Exercise 2.1 - Display List</h3>
      <ul>
        {tab.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export function NumberedList({ tab = [] }) {  
  return (
    <div>
      <h3>Exercise 2.2 - Numbered List</h3>
      <ul>
        {tab.map((item, index) => (
          <li key={index}>Element {index + 1} is: {item}</li>
        ))}
      </ul>
    </div>
  );
}

export function ClickToRemoveList({ tab = [] }) {  
  const [items, setItems] = useState(tab);

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h3>Exercise 2.3 - Click-to-Remove</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index} onClick={() => removeItem(index)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

