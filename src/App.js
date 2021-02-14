import { useState } from 'react';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Results from './Results';
import fetch from './requests';

const App = () => {
  const [selected, setSelected] = useState(fetch.trending);
  return (
    <div className='app'>
      {/* Header */}
      <Header />
      {/* Nav */}
      <Nav setSelected={setSelected} />
      {/* Results */}
      <Results selected={selected} />
    </div>
  );
};

export default App;
