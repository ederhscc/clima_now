import Busca from "./components/Busca";
import ClimaAtual from "./components/ClimaAtual";
import Previsao from "./components/Previsao";
import {Titulo} from "./AppStyles"

function App() {
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
