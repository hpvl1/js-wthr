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
    ymaps
      .load()
      .then((maps) => {
        console.log("then(1): ", maps);
        const map = new maps.Map("map", {
          center: [weatherData.coord.lat, weatherData.coord.lon],
          zoom: 12,
        });
        return maps;
      })
      .then((maps) => {
        const myPlacemark = new maps.Placemark([
          weatherData.coord.lat,
          weatherData.coord.lon,
        ]);
        // console.log("myPlacemark: ", myPlacemark);
        console.log(maps);
        // maps.geoObject.addon(myPlacemark);
      });
  } catch (error) {
    console.error("Failed to load Yandex Maps", error);
  }

  // ymaps.ready(init);

  // function init() {
  //   // Создание карты.
  //   var myMap = new ymaps.Map("map", {
  //     // Координаты центра карты.
  //     // Порядок по умолчанию: «широта, долгота».
  //     center: [weatherData.coord.lat, weatherData.coord.lon],
  //     // Уровень масштабирования. Допустимые значения: от 0 (весь мир) до 19.
  //     zoom: 12,
  //   });

  // var myPlacemark = new ymaps.Placemark([weatherData.coord.lat, weatherData.coord.lon]);

  // myMap.geoObjects.add(myPlacemark);
  // maps.geoObjects.add(myPlacemark);
}
