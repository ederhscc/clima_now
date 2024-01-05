const ClimaAtual = ({ clima }) => {
  return (
    <div>
      <h3>{clima.name}</h3>
      <img
        src={` https://openweathermap.org/img/wn/${clima.weather[0].icon}.png`}
        alt={clima.weather[0].description}
      />
      <p>{clima.main.temp}ºC</p>
      <p>{clima.weather[0].description}</p>
    </div>
  );
};

export default ClimaAtual;
