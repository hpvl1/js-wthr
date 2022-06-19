import { readStorage, saveStorage } from "./storage";

describe("test localStorage", () => {
  let el;
  let items;
  let cityName = "Москва";

  beforeEach(() => {
    jest.spyOn(window, "alert").mockImplementation(() => {});
    localStorage.clear();
    el = document.querySelector("div.list-city ul");
  });

  afterEach(() => {
    localStorage.setItem("city", JSON.stringify(items));
  });

  it("readStorage it's a function", () => {
    expect(readStorage).toBeInstanceOf(Function);
  });

  it("saveStorage it's a function", () => {
    expect(saveStorage).toBeInstanceOf(Function);
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

  it("save the city again with the same name", () => {
    const items = ["Москва", "Санкт-Петербург", "Иваново"];
    localStorage.setItem("city", JSON.stringify(items));
    saveStorage(cityName);

    expect(window.alert).toBeCalledWith("Такой город уже добавлен!");
  });
});
