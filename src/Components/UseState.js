import React, { useState } from "react";
import "./UseState.css";
import "./style.css";
import { Link } from "react-router-dom";

const UseState = () => {
  const [contar, setContar] = useState(0);
  const [dados, setDados] = useState(null);
  const [carregar, setCarregar] = useState(false);

  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  }

  async function handleApi(event) {
    setCarregar(true);
    const response = await fetch(
      "https://api-react-estudo.herokuapp.com/reactapi"
    );
    const json = await response.json();
    setDados(json);
    setCarregar(false);
    handleScroll();
  }

  return (
    <div className="App-header">
      <div className="slice">
        <h4>Contador simples com useState</h4>
        <p>{contar}</p>
        <div>
          <button
            style={{ margin: 10 }}
            className="btn"
            onClick={() => setContar(contar - 1)}
          >
            Diminuir
          </button>
          <button className="btn" onClick={() => setContar(contar + 1)}>
            Aumentar
          </button>
        </div>
        <p className="description">
          Ao clicar nos botões o número (contar) recebe uma mudança no estado
          (setContar) adicionando ou retirando 1 da contagem
        </p>
      </div>
      <div className="slice">
        <h4>Chamar uma API e mostrar os dados na tela</h4>
        <button onClick={handleApi} className="btn">
          Chamar API
        </button>
        {dados === null ? (
          <p>Aguardando</p>
        ) : carregar ? (
          <p>Carregando...</p>
        ) : (
          <div>
            <ul className="list">
              <li>
                Item: <i className="item-info">{dados.item}</i>
              </li>
              <li>
                Preço: <i className="item-info">R$ {dados.price}</i>
              </li>
              <li>
                Hd: <i className="item-info">{dados.ssd}</i>
              </li>
              <li>
                Cpu: <i className="item-info">{dados.cpu}</i>
              </li>
              <li>
                Vga: <i className="item-info">{dados.vga}</i>
              </li>
              <li>
                Mouse: <i className="item-info">{dados.mouse}</i>
              </li>
              <li>
                Teclado: <i className="item-info">{dados.keyboard}</i>
              </li>
              <li>
                Headset: <i className="item-info">{dados.headset}</i>
              </li>
            </ul>
            <p className="description">
              Criei uma API com nodeJs e o deploy pelo Heroku: ''
              <a
                href="https://api-react-estudo.herokuapp.com/reactapi"
                target="_blank"
                rel="noreferrer"
              >
                https://api-react-estudo.herokuapp.com/reactapi
              </a>
              ''
            </p>
            <div className="container">
              <p className="description">
                Logo em seguida ao clicar no botão é criado um evento com fetch
                dando um GET nas informações e usando useState para preencher e
                salvar os dados dentro de um estado mostrando assim em sua tela.
              </p>
            </div>
          </div>
        )}
      </div>
      <br />
      <Link to="/">
        <button className="btn">Voltar ao Menu</button>
      </Link>
    </div>
  );
};

export default UseState;
