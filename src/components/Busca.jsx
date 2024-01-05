const Busca = ({cidade, setCidade, buscarClima}) => {

    
  return (
    <div>
      <input
        type="text"
        placeholder="Digite uma cidade..."
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
      />
      <button onClick={buscarClima}>Buscar</button>
    </div>
  );
};

export default Busca;
