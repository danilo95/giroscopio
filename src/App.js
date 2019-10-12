import React from 'react';
import './App.css';

function App() {
  if (window.DeviceOrientationEvent) {
    
    alert( "Supported!");
  }else{
    alert( "NO Supported!");
  }
  window.addEventListener("deviceorientation",function(event) {
    let alpha = Math.round(event.alpha);
    let beta = Math.round(event.beta);
    let gamma = Math.round(event.gamma);
    let mostrar1=document.getElementById('mostrar1')
    let mostrar2=document.getElementById('mostrar2')
    let mostrar3=document.getElementById('mostrar3')
    mostrar1.innerHTML=`eje Z: ${alpha}`;
    mostrar2.innerHTML=`eje x: ${beta}`;
    mostrar3.innerHTML=`eje y: ${gamma}`;
    

  }, true);
  return (
    <div className="App">
    
        <p id="mostrar1">
         este es el contenido de p
        </p>
        <p id="mostrar2">
         este es el contenido de p
        </p>
        <p id="mostrar3">
         este es el contenido de p
        </p>
        <p id="doeSupported"></p>
        <p id="mostrar4">   
        </p>
        
    </div>
  );
}

export default App;
