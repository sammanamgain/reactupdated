import Navbar from "./components/Navbar";
import "./App.css";
import Textarea from "./components/Textarea";
import About from "./components/About";
import { useState } from "react";

import "./index.css";

import { BrowserRouter as Router, Route,Routes } from "react-router-dom";




let object = { title: "TextUtils", about: "About US" };
function App() {
  const [mode, setmode] = useState("light");

  let changetheme = function () {
    console.log("this function is called");
    if (mode === "light") {
      setmode("dark");

      document.body.style.backgroundColor = "black";
    } else {
      setmode("light");

      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Router>
        <Navbar object={object} mode={mode} changetheme={changetheme}></Navbar>
        <div>
          <h1> Hi this is first react custom app </h1>
        </div>

        <Routes>
          <Route
            exact
            path="/about"
            element={<About mode={mode} changetheme={changetheme}></About>}
          ></Route>
          <Route
            exact
            path="/"
            element={<Textarea heading=" Enter the text"></Textarea>}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
