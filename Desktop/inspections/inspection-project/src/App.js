import './App.css';
import React, {useState, createContext} from 'react';
import FrontPage from './FrontPage';

export const globalContext = createContext();

function App() {
  const [language, setLanguage] = useState('English')
  const languages = {language, setLanguage}

  return (
    <globalContext.Provider value={languages}>
        <div className="App">
          <p>hola qlq</p>
          <FrontPage />
        </div>
    </globalContext.Provider>
  
  );
}

export default App;
