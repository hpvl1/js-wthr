import { getCityInput } from "./getCityInput";
import { createCard } from "./createCard";
import { readStorage, showStorage } from "./storage";

export function cityClickListener() {
  const cityList = document.querySelectorAll("div.list-city > ul > li");
  cityList.forEach((city) => {
    city.addEventListener("click", async () => {
      const cityName = city.textContent;
      const container = document.querySelector(".container");
      const weatherData = await getCityInput(cityName);
      createCard(container, weatherData);
    });
  });
}
