import {PrevisaoContainer} from "./PrevisaoStyles";

const Previsao = ({ previsoes }) => {
  return (
    <PrevisaoContainer>
      <h4>Previsão para as próximas horas</h4>
      <ul>
        {previsoes.map((previsao) => (
          <li key={previsao.dt}>
            <img src={` https://openweathermap.org/img/wn/${previsao.weather[0].icon}.png`}
        alt={previsao.weather[0].description} />
          {previsao.main.temp}ºC - {previsao.weather[0].description}
          </li>
        ))}
      </ul>
    </PrevisaoContainer>
  );
};

export default Previsao;
