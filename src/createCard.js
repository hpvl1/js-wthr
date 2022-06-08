/* eslint-disable no-undef */
export function createCard(el, weatherData) {
  el.innerHTML = `
        <div class="weather-wrap">
            <p class="city"><span><b>Город: </b></span>${weatherData.name}</p>
            <p class="temp"><span><b>Температура: </b></span>${
              weatherData.main.temp - 273
            }</p>
            <div class="icon">
                <img src = "https://openweathermap.org/img/wn/${
                  weatherData.weather[0].icon
                }@2x.png">
            </div>
    `;
  createMap(el, weatherData);
}

function createMap(el, weatherData) {
  const map = document.createElement("div");
  map.setAttribute("id", "map");
  el.querySelector(".weather-wrap").append(map);

  ymaps.ready(init);

  function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      center: [weatherData.coord.lat, weatherData.coord.lon],
      // Уровень масштабирования. Допустимые значения: от 0 (весь мир) до 19.
      zoom: 12,
    });
  }
}