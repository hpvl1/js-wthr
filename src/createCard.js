/* eslint-disable no-undef */
import ymaps from "ymaps";

export function createCard(el, weatherData) {
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
  createMap(el, weatherData);
}

function createMap(el, weatherData) {
  const map = document.createElement("div");
  map.setAttribute("id", "map");
  el.querySelector(".weather-wrap").append(map);

  try {
    ymaps.load().then((maps) => {
      const map = new maps.Map("map", {
        center: [weatherData.coord.lat, weatherData.coord.lon],
        zoom: 12,
      });
      return maps;
    });
  } catch (error) {
    console.error("Failed to load Yandex Maps", error);
  }
}
