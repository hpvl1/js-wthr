import { readStorage, saveStorage } from "./storage";

describe("test localStorage", () => {
  let el;
  let items;

  beforeEach(() => {
    localStorage.clear();
    el = document.querySelector("div.list-city ul");
  });

  afterEach(() => {
    localStorage.setItem("city", JSON.stringify(items));
  });

  it("read LocalStorage", () => {
    const items = ["Москва", "Санкт-Петербург", "Иваново"];
    localStorage.setItem("city", JSON.stringify(items));
    const updateCity = readStorage();
    expect(updateCity.length).toBe(3);
  });

  it("save LocalStorage not more then 10 city", () => {
    for (let i = 0; i < 15; i++) {
      saveStorage(`city_${i}`);
    }
    const updateCity = readStorage();
    expect(updateCity.length).toBe(10);
  });
});
