import React, { useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

const UseEffect = () => {
  const [contar, setContar] = useState([]);
  const [dados, setDados] = useState([null]);
  const [dadosApi, setDadosApi] = useState(null);
  const [carregou, setCarregou] = useState(false);

  function handleClick(event) {
    setContar([(Math.random() * (0, 10)).toFixed(2)]);
  }
  function handleClear(event) {
    setContar([null]);
    setDados([null]);
  }
  useEffect(() => {
    setDados([...dados, contar]);
  }, [contar]);

  async function handleApi() {
    setCarregou(false);
    const response = await fetch(
      "https://api-react-estudo.herokuapp.com/reactapi"
    );
    const json = await response.json();
    setDadosApi(json);
    setCarregou(true);
  }

  useEffect(() => {
    handleApi();
  }, []);

  return (
    <div className="App-header">
      <div className="slice">
        <button className="btn" onClick={handleClick}>
          Adicionar
        </button>
        <button className="btn" onClick={handleClear}>
          Limpar
        </button>
        <div className="container">
          <p className="array">{dados}</p>

          <p className="description">
            Ao clicar no botão o useEffect verifica no array de dependencia se o
            estado (contar) mudou adicionando um número randômico dentro de um
            array e exibindo na tela
          </p>
        </div>
      </div>
      <div className="slice">
        {carregou ? (
          <ul className="list">
            <li>
              Item: <i className="item-info">{dadosApi.item}</i>
            </li>
            <li>
              Preço: <i className="item-info">R$ {dadosApi.price}</i>
            </li>
            <li>
              Hd: <i className="item-info">{dadosApi.ssd}</i>
            </li>
            <li>
              Cpu: <i className="item-info">{dadosApi.cpu}</i>
            </li>
            <li>
              Vga: <i className="item-info">{dadosApi.vga}</i>
            </li>
            <li>
              Mouse: <i className="item-info">{dadosApi.mouse}</i>
            </li>
            <li>
              Teclado: <i className="item-info">{dadosApi.keyboard}</i>
            </li>
            <li>
              Headset: <i className="item-info">{dadosApi.headset}</i>
            </li>
            <p className="description">
              Aqui o useEffect faz o GET na API logo quando o componente é
              renderizado
            </p>
          </ul>
        ) : (
          "Carregando API"
        )}
      </div>

      <Link to="/">
        <button className="btn">Voltar ao Menu</button>
      </Link>
    </div>
  );
};

export default UseEffect;
