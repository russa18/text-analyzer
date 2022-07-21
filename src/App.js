import { useState } from 'react';
import './App.css';
import Alert from './component/Alert';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import About from './component/About';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = () => {

    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showAlert("dark mode has been enabled", "success");

    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("light mode has been enabled", "success");


    }
  }


  // const removeClass = () => {
  //   document.body.classList.remove('bg-primary');
  //   document.body.classList.remove('bg-success');
  //   document.body.classList.remove('bg-danger');
  //   document.body.classList.remove('bg-warning');
  //   document.body.classList.remove('bg-light');
  //   document.body.classList.remove('bg-dark');



  // }
  // const toggleMode = (cls) => {
  //   removeClass();
  //   document.body.classList.add('bg-' + cls);
  //   if ('bg-' + cls === 'bg-dark' || 
  //   'bg-' + cls === 'bg-primary' || 
  //   'bg-' + cls === 'bg-success' ||
  //    'bg-' + cls === 'bg-danger' || 
  //    'bg-' + cls === 'bg-warning') {

  //     document.body.style.color = "white";

  //   } else if ('bg-' + cls === 'bg-light') {

  //     document.body.style.color = "black";

  //   }

  // }


  return (

    <div className="App">
      <Router>

        <Navbar title="TextUtils" aboutText="about us " mode={mode} toggleMode={toggleMode} />
        {/* <Navbar/> */}
        <Alert alert={alert} />

        <Routes>
          <Route path="/about" element={<About mode={mode} />} />
          <Route path="/" element={<TextForm heading='Enter your text to analyze' mode={mode} showAlert={showAlert} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
