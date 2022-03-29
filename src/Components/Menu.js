import React from "react";
import logo from "../logo.svg";
import "./style.css";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Projeto de Estudo React Hooks</h3>
        <div>
          <Link to="usestate">
            <button className="btn">useState</button>
          </Link>
          <Link to="useeffect">
            <button className="btn">useEffect</button>
          </Link>
          <Link to="useref">
            <button className="btn">useRef</button>
          </Link>
        </div>
        <br />
        <p className="description">Menu de seleção criado com React Router</p>
      </header>
    </>
  );
};
export default Menu;
