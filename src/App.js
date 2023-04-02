import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const changeMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
    else {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(2 32 108)";
      document.body.style.color = "white";
    }
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar title="TaxtUtils" changeMode={changeMode} mode={mode} />}>
            <Route index element={<TextForm heading="This is a text utils" mode={mode} />} />
            <Route exact path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
