import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [estado, setEstado] = useState("INICIO DO JOGO");

  const [palpite, setPalpite] = useState(150);
  const [numPalp, setNumPalp] = useState(1);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const iniciar = () => {
    setEstado("RODANDO");
    setMin(0);
    setMax(300);
    setNumPalp(1);
    setPalpite(150);
  };

  if (estado === "INICIO DO JOGO") {
    return <button onClick={iniciar}>Começar a jogar</button>;
  }

  const menor = () => {
    setNumPalp(numPalp + 1);
    setMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proxPalpite);
  };

  const maior = () => {
    setNumPalp(numPalp + 1);
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proxPalpite);
  };

  const acertou = () => {
    setEstado("FIM");
  };

  if (estado === "FIM") {
    return (
      <div>
        <p>
          Acertei o número {palpite} com {numPalp} palpites
        </p>
        <button onClick={iniciar}>Iniciar novamente</button>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Pense em um número de 0 a 300</h1>
      <h2>Seu número é o {palpite}?</h2>
      <button onClick={menor}>Menor</button>
      <button onClick={acertou}>Acertou</button>
      <button onClick={maior}>Maior</button>
      <h2>Números de palpites: {numPalp}</h2>
    </div>
  );
}
