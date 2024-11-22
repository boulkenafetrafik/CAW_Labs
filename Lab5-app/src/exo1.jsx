import { useState } from 'react';

export function ClickMeButton() {
    const [clicked, setClicked] = useState(false);
  
    return (
      <div>
        <h3>ClickMe Button</h3>
        <button onClick={() => setClicked(true)}>ClickMe</button>
        {clicked && <p>clicked</p>}
      </div>
    );
}

export function ToggleButton(){
    const [clicked, setClicked]=useState(false);

    return(
        <div>
            <h3>Toggle Button</h3>
            <button onClick={()=>setClicked(!clicked)} >ClickMe</button>
            <p>{clicked ? "clicked" : "not clicked"}</p>
        </div>
    )
}
export function MultiButtonApp() {
    const [message, setMessage] = useState('');
  
    return (
      <div>
        <h3>Multi Buttons</h3>
        {['Button1', 'Button2', 'Button3'].map((btn, index) => (
          <button key={index} onClick={() => setMessage(`Button #${index + 1} was clicked`)}>
            {btn}
          </button>
        ))}
        <p>{message}</p>
      </div>
    );
}
export function Counter() {
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <h3>Exercise 1.4 - Counter</h3>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Inc</button>
        <button onClick={() => setCount(count - 1)}>Dec</button>
      </div>
    );
}

