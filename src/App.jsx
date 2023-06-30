import Navbar from "./components/Navbar";
import "./App.css";
import Textarea from "./components/Textarea";
import About from "./components/About";
let object = { title: "TextUtils", about: "About US" };
function App() {
  return (
    <>
      <Navbar object={object}></Navbar>
      <div>
        <h1> Hi this is first react custom app </h1>
      </div>
      <Textarea heading=" Enter the text"></Textarea>
      <About></About>
    </>
  );
}

export default App;
