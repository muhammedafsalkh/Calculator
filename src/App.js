
import { useState } from 'react';
import './App.css';

function App() {
  const [value,setValue] = useState('')
  return (
    <div className='container'>
    <div className="calculator">
     <form action="">
       <div className='display'>
         <input type="text"value={value} />
       </div>
       <div>
         <input type="text" value="Ac" onClick={e=> setValue('')}/>
         <input type="text" value="DE" onClick={e=> setValue(value.slice(0,-1))}/>
         <input type="text" value="." onClick={e=> setValue(value + e.target.value)}/>
         <input type="text" value="/" onClick={e=> setValue(value + e.target.value)}/>
       </div>
       <div>
         <input type="text" value="7" onClick={e=> setValue(value + e.target.value)}/>
         <input type="text" value="8" onClick={e=> setValue(value + e.target.value)} />
         <input type="text" value="9" onClick={e=> setValue(value + e.target.value)}/>
         <input type="text" value="*" onClick={e=> setValue(value + e.target.value)}/>
       </div>
       <div>
         <input type="text" value="4" onClick={e=> setValue(value + e.target.value)}/>
         <input type="text" value="5" onClick={e=> setValue(value + e.target.value)}/>
         <input type="text" value="6" onClick={e=> setValue(value + e.target.value)}/>
         <input type="text" value="+" onClick={e=> setValue(value + e.target.value)}/>
       </div>
       <div>
         <input type="text" value="1" onClick={e=> setValue(value + e.target.value)}/>
         <input type="text" value="2" onClick={e=> setValue(value + e.target.value)}/>
         <input type="text" value="3" onClick={e=> setValue(value + e.target.value)}/>
         <input type="text" value="-" onClick={e=> setValue(value + e.target.value)}/>
       </div>
       <div>
         <input type="text" value="00" onClick={e=> setValue(value + e.target.value)}/>
         <input type="text" value="0" onClick={e=> setValue(value + e.target.value)}/>
         <input type="text" value="=" className='equal'onClick={e=> setValue(eval(value))}/>
       </div>
     </form>
   
    </div>
 </div>
  );
}

export default App;
