import React, { useState, useEffect } from 'react';
import ChartGraphicWithDataMatrix from './ChartGraphicWithDataMatrix';
import './App.css'; 

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000); 

    return () => clearTimeout(timer);
  }, []);
  const productColors = {
    'Product A': '#1890ff',
    'Product B': '#f5222d',
    'Product C': '#52c41a',
  };
  return (
    <div className="App">

      <main>
      <div className="ss">filter:</div>  
        <div className='b'><div className="dotname">Product A</div>
  <div className="dotname">Product B</div>
  <div className="dotname">Product C </div>
  
  </div>
      
<ChartGraphicWithDataMatrix/>
       
      </main>
    </div>
  );
}


export default App;
