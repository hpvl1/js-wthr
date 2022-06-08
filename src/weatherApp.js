import { getIpData } from "./getIpData";
import { getCityWeather } from "./getCityWeather";
import { getCityInput } from "./getCityInput";
import { createCard } from "./createCard";

export async function weatherApp(el) {
  el.innerHTML = `
        <div class="container">
            <div class="weather-wrap"></div>
        </div>
    `;

  const container = document.querySelector(".container");

  container.innerHTML += `
    <div class="form-wrap">
        <div class="form">
            <form class="search-form">
                <input class="search-form__input" type="text" placeholder="Введите название города" required>
                <button class="search-form__button">Отправить</button>
            </form>
        </div>
        <div class="list-city">
            <ul></ul>
        </div>
    </div>
    `;

  // const items = null;
  const ipData = await getIpData();
  const weatherData = await getCityWeather(ipData);

  const weatherCard = document.querySelector(".weather-wrap");

  createCard(weatherCard, weatherData);

  inputSubmitListener();
}

export function inputSubmitListener() {
  const form = document.querySelector("form");
  const input = document.querySelector("input");
  const weatherCard = document.querySelector(".weather-wrap");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const cityName = input.value;
    const weatherData = await getCityInput(cityName);
    createCard(weatherCard, weatherData);
    input.value = "";
  });
}
