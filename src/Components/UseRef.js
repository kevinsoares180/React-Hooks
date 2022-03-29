import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./UseRef.css";

const UseRef = () => {
  const [input, setInput] = useState("");
  const [inputTwo, setInputTwo] = useState("");
  const [comments, setComments] = useState(["Escreva uma mensagem..."]);
  const [commentsTwo, setCommentsTwo] = useState(["Escreva uma mensagem..."]);
  const currentInput = useRef();

  function handleClick() {
    setComments([input]);
    setInput("");
  }
  function handleClickTwo() {
    setInputTwo("");
    currentInput.current.focus();
    setCommentsTwo([inputTwo]);
  }

  return (
    <div className="App-header">
      <div className="slice textbox">
        <p className="description">
          Este chat é um exemplo <strong>SEM</strong> o useRef e ao enviar a
          mensagem repare que o foco não retorna ao Input pois não temos uma
          referencia do que queremos focar logo após o envio da mensagem
        </p>
        <div className="textarea">
          <p className="description">Oi, tudo bem?</p>
          <ul>
            {comments.map((message) => (
              <li className="chat">{message}</li>
            ))}
          </ul>
        </div>
        <input
          type="text"
          value={input}
          maxlength="15"
          onChange={({ target }) => setInput(target.value)}
        />

        <button style={{ margin: 10 }} className="btn" onClick={handleClick}>
          Enviar Mensagem
        </button>
      </div>
      <div className="slice textbox">
        <p className="description">
          Este chat é um exemplo <strong>COM</strong> o useRef e ao enviar a
          mensagem repare que o foco RETORNA ao Input pois temos uma referencia
          do que queremos focar logo após o envio da mensagem
        </p>
        <div className="textarea">
          <p className="description">Oi, tudo bem?</p>
          <ul>
            {commentsTwo.map((message) => (
              <li className="chat">{message}</li>
            ))}
          </ul>
        </div>
        <input
          ref={currentInput}
          type="text"
          value={inputTwo}
          maxlength="15"
          onChange={({ target }) => setInputTwo(target.value)}
        />

        <button style={{ margin: 10 }} className="btn" onClick={handleClickTwo}>
          Enviar Mensagem
        </button>
      </div>
      <Link to="/">
        <button className="btn">Voltar ao Menu</button>
      </Link>
    </div>
  );
};

export default UseRef;
