import { getCityWeather } from "./getCityWeather";

describe("fgf", () => {
  const longitude = 37.6156;
  const latitude = 55.7522;
  const MY_KEY = "56f47affbfbb9ca1677d4f24e14ea341";

  beforeAll(() => {
    global.fetch = jest.fn();
  });

  it("112", async () => {
    const ipData = {
      longitude,
      latitude,
    };

    const cityName = "Moscow";
    const description = "пасмурно";
    const icon = "04d";
    const temp = 21.8;
    const fakeData = {
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

    global.fetch.mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(fakeData),
      })
    );

    const response = await getCityWeather(ipData);

    expect(global.fetch).toHaveBeenCalledWith(
      `https://api.openweathermap.org/data/2.5/weather?lat=${ipData.latitude}&lon=${ipData.longitude}&lang=ru&units=metric&appid=${MY_KEY}`
    );
    expect(response).toStrictEqual(fakeData);
  });
});
