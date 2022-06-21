import { createCard, createMap } from "./createCard";

describe("test create card", () => {
  document.body.innerHTML = `
    <div class="container">
    </div>
`;

  let el = document.querySelector(".container");

  const cityName = "Moscow";
  const description = "пасмурно";
  const icon = "04d";
  const temp = 21.8;
  const weatherData = {
    weather: [
      {
        description,
        icon,
      },
    ],
    main: {
      temp,
    },
    name: cityName,
  };

  el.innerHTML = `
<div class="weather-wrap">
  <div class="list-city">
    <ul></ul>
  </div>
  <div class="city-info">
    <p class="city"><span><b>Город: </b></span>${weatherData.name}</p>
    <p class="temp"><span><b>Температура: </b></span>${weatherData.main.temp.toFixed(
      1
    )} &#8451;</p>
    <p class="weather"><span><b>Погода: </b></span>${
      weatherData.weather[0].description
    }</p>
    <div class="icon">
        <img src = "https://openweathermap.org/img/wn/${
          weatherData.weather[0].icon
        }@2x.png">
  </div>
</div>
`;

  it("test UI after get weather data", () => {
    createCard(el, weatherData);
    expect(el.querySelector(".weather-wrap")).toBeTruthy();
    expect(el.querySelector(".city-info")).toBeTruthy();
    expect(el.querySelector(".city")).toBeTruthy();
    expect(el.querySelector(".temp")).toBeTruthy();
    expect(el.querySelector(".weather")).toBeTruthy();
  });
});
