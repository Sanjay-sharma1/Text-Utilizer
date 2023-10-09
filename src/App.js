import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import Alert from "./components/Alert";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

// import Heading from "./Heading";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const darkmode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      // showAlert("Dark mode is Enabled", "success");
      document.title = 'TextUtils - Dark Mode'
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      // showAlert("Light mode is Enabled", "success");
      document.title = 'TextUtils - Home'
    }
  };

  return (
    <Router>
      <Navbar title="TextUtils" mode={mode} darkmode={darkmode}/>
      <Alert alert={alert} />
      <div className="container my-3">
      <Routes>
          <Route exact path="/about" element={<About />}/>

          <Route exact path="/"
            element={<TextArea
            showAlert={showAlert}
            heading="Enter the text to analyze below"
            mode={mode}
            />}  
          />
        </Routes>
      </div>
      </Router>
  );
}

export default App;
