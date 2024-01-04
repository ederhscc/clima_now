import { useState } from "react";

const Busca = () => {
  const [search, setSearch] = useState("");

  const handleClick = () => {
    console.log(search);
    setSearch("");
  };
  
  return (
    <div>
      <input
        type="text"
        placeholder="Digite a sua busca..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleClick}>Buscar</button>
    </div>
  );
};

export default Busca;
