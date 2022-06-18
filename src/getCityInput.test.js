import { getCityInput } from "./getCityInput";

describe("get city weather from input", () => {
  const cityName = "Moscow";

  beforeAll(() => {
    global.fetch = jest.fn();
  });

  it("function return data weather", async () => {
    const MY_KEY = "56f47affbfbb9ca1677d4f24e14ea341";

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

    const fetchMock = global.fetch.mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(fakeData),
      })
    );

    const response = await getCityInput(cityName);

    expect(fetchMock).toHaveBeenCalledWith(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=ru&units=metric&appid=${MY_KEY}`
    );

    expect(response).toEqual(fakeData);
  });
});
