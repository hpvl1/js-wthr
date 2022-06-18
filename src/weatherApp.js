import { getIpData } from "./getIpData";
import { getCityWeather } from "./getCityWeather";
import { getCityInput } from "./getCityInput";
import { createCard } from "./createCard";
import { readStorage, saveStorage, showStorage } from "./storage";
import { cityClickListener } from "./cityClickListener";

export async function weatherApp(el) {
  el.innerHTML = `
        <div class="container">
        </div>
    `;

  const container = document.querySelector(".container");

  const items = await readStorage();
  const ipData = await getIpData();
  const weatherData = await getCityWeather(ipData);

  const weatherCard = container;

  createCard(weatherCard, weatherData);

  container.innerHTML += `
  <div class="form-wrap">
          <form class="search-form">
              <label class="search-form__label">Город: </label>
              <input class="search-form__input" type="text" placeholder="Введите название города" required />
              <button class="search-form__button">Отправить</button>
          </form>
  </div>
  `;

  const ul = document.querySelector("div.list-city ul");
  showStorage(items, ul);
  inputSubmitListener();
  cityClickListener();
}

export function inputSubmitListener() {
  const form = document.querySelector("form");
  const input = document.querySelector("input");
  const container = document.querySelector(".container");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const cityName = input.value;
    const weatherData = await getCityInput(cityName);

    if (!weatherData) {
      alert(`Город '${cityName}' не найден!`);
      return null;
    }

    createCard(container, weatherData);

    saveStorage(cityName);
    const items = await readStorage();
    const ul = document.querySelector("div.list-city ul");
    showStorage(items, ul);
    input.value = "";
    cityClickListener();
  });
}
