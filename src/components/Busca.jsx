import {BuscaContainer, BuscaCidade, BotaoBuscar} from "./BuscaStyles";

const Busca = ({cidade, setCidade, buscarClima}) => {

    
  return (
    <BuscaContainer>
      <BuscaCidade
        type="text"
        placeholder="Digite uma cidade..."
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
      />
      <BotaoBuscar onClick={buscarClima}>Buscar</BotaoBuscar>
    </BuscaContainer>
  );
};

export default Busca;
