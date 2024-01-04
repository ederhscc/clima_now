import { useState, useEffect } from "react";
import axios from "axios";

import Busca from "./components/Busca";
import ClimaAtual from "./components/ClimaAtual";
import Previsao from "./components/Previsao";

import { Titulo } from "./AppStyles";

function App() {
  const [cidade, setCidades] = useState("");
  const [clima, setClima] = useState(null);
  const [previsao, setPrevisao] = useState([]);

  // carregando a chave da api do arquivo .env
  const apiKey = import.meta.env.VITE_API_KEY || ""

  return (
    <div>
      <Titulo>Condições Climáticas</Titulo>
      <Busca />
      <ClimaAtual />
      <Previsao />
    </div>
  );
}

export default App;

// site da api => https://openweathermap.org/