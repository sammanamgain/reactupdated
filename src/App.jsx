import Navbar from "./components/Navbar";
import "./App.css";
let object = { title: "TextUtils2", about: "About US" };
function App() {
  return (
    <>
      <Navbar object={object}></Navbar>
      <div>
        <h1> Hi this is first react custom app </h1>
      </div>
    </>
  );
}

export default App;
