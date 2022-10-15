import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Practice from './components/Practice';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import React, {useState} from 'react';

function App() {

  const [mode, setMode] = useState('primary'); // Wheather dark mode is enabled or not

  const toggleMode = () => {
      if (mode === "primary") {
        setMode("dark")
        document.body.style.background = "#042743"
        document.body.style.color = "white"
      }
      else{
        setMode("primary")
        document.body.style.background = "white"
        document.body.style.color = "black"
      }
  }

  return (
    <>



      {/*<Practice heading="Enter the text to analyze" subheading="Your text summary" preview="Preview" />*/}
     
      <Router>
        <Routes>
          <Route path='/' element={<Navbar aboutText = "About" mode = {mode} toggleMode = {toggleMode} />}>
            <Route index element={<TextForm heading = "Try TextUtils - Word Counter, Character Counter, Remove extra Spaces" mode = {mode} />} />
            <Route path='/about' element={<About />} />
            
          </Route>
        </Routes>
      </Router>

    </>
  );
}

export default App;
