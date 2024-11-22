import './App.css'
import './exo1' 
import './exo2'
import './exo3'
import './exo4'

import { ClickMeButton, ToggleButton, MultiButtonApp, Counter } from './exo1';
import { DisplayTab, NumberedList, ClickToRemoveList } from './exo2';
import  AuthForm  from './exo3';
import AddDivForm  from './exo4';


function App() {
  const tab1 = ["hello", "world", "from", "react"];

  return (
    <>
      <div>
      <ClickMeButton />
        <ToggleButton />
        <MultiButtonApp />
        <Counter />
        <DisplayTab tab={tab1} />
        <NumberedList tab={tab1} />
        <ClickToRemoveList tab={tab1} />
        <AuthForm />
        <AddDivForm />
      </div>
    
    </>
  )
}

export default App
