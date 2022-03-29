import "./App.css";
import Menu from "./Components/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseState from "./Components/UseState";
import UseEffect from "./Components/UseEffect";
import UseRef from "./Components/UseRef";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />}></Route>
      </Routes>
      <Routes>
        <Route path="usestate" element={<UseState />}></Route>
      </Routes>
      <Routes>
        <Route path="useeffect" element={<UseEffect />}></Route>
      </Routes>
      <Routes>
        <Route path="useref" element={<UseRef />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
