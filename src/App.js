import React, {useState} from 'react'
import './App.css';

function App() {
  const [opt, setOpt] = useState(1)
  const [bunny, setBunny] = useState(1)
  const [x, setX] = useState(false)
 
const dd = 0.005;
const vv = 0.01;
const ff = (opt * vv) + (bunny * vv);
const cc = (opt * 0.02) + (bunny * vv);
const one = 7 + (opt*0.005) + (bunny * 0.01);
const two = x ? (opt * 0.01) + (bunny * 0.01) : (opt * 0.01) + (bunny * 0.01);
const three =  x ? ((opt - 75) * 0.06) + ((bunny - 75) * 0.02) : ((opt - 75) * 0.03) + ((bunny - 75) * 0.02);
const four = (opt * 0.01) + (bunny * 0.01);

  return (
    <div className="App">
      <div>
    
        <label for="vol">Storage</label>
  <input type="range" id="vol" name="blazeTransfer" step="1"
         min="1" max="1000" value={opt} onChange={(e)=> setOpt(e.target.value)}/>
         
        
  <label for="volume">Transfer</label>
  <input type="range" id="volume" name="blazeStorage" step="1"
         min="1" max="1000" value={bunny} onChange={(e)=> setBunny(e.target.value)}/>
         
 
  
  

  </div>






<p>blackblaze 
{7 + (opt*0.005) + (bunny * 0.01)}
 
</p>



<p>Bunny
{cc >= 10 ?
<p>10</p> :
 x ? <p>{(opt * 0.01) + (bunny * 0.01)}</p> : <p>{(opt * 0.02) + (bunny * 0.01)}</p> 
}
</p>
<label class="switch">
  <input type="checkbox" checked={x} onChange={() => setX(!x)}/>
  <span class="slider round"></span>
</label>

<p>scaleway 
  {opt && bunny <75 ? <p>0</p> :
  x ? <p>{((opt -75) * 0.06) + ((bunny - 75) * 0.02)}</p> : <p>{((opt - 75) * 0.03) + ((bunny - 75) * 0.02)}</p>
  }
</p>
<label class="switch">
  <input type="checkbox" checked={x} onChange={() => setX(!x)}/>
  <span class="slider round"></span>
</label>

<p>vultr 
  {opt <=299 ? <p>5</p> :
<p>{(opt * 0.01) + (bunny * 0.01)}</p>
}
</p>
  <div class="op">
<label for="odin">blackbaze</label>
  <progress     max="100" class="dop" type="range" id="odin"  value={one} />
  <label for="dva">Bunny</label>
  <progress  max="100" class="dop" type="range" id="dva" value={two}/>
  <label for="tri">scaleway</label>
  <progress  max="100" class="dop" type="range" id="tri" value={three}/>
  <label for="chot">vultr</label>
  <progress max="100" class="dop" type="range" id='chot' value={four}/>
  </div>

  
    </div>
  );
}

export default App;
