import { useState } from 'react';
import './style/exo4.css'

function AddDivForm() {
  const [divs, setDivs] = useState([]);
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [color, setColor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setDivs([...divs, { height, width, color }]);
    setHeight('');
    setWidth('');
    setColor('');
  };

  return (
    <div className="add-div-form-container">
      <h3>Exercise 4 - Dynamic Div Creation</h3>
      <form onSubmit={handleSubmit}>
        <input
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Height (px)"
        />
        <input
          value={width}
          onChange={(e) => setWidth(e.target.value)}
          placeholder="Width (px)"
        />
        <input
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="Color"
        />
        <button type="submit">Add Div</button>
      </form>

      <div className="created-divs">
        {divs.map((div, index) => (
          <div
            key={index}
            className="created-div"
            style={{
              height: `${div.height}px`,
              width: `${div.width}px`,
              backgroundColor: div.color,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default AddDivForm;


