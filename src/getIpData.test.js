import { getIpData } from "./getIpData";

describe("get data by ip", () => {
  beforeAll(() => {
    global.fetch = jest.fn();
  });

  it("return user location coord", async () => {
    const coord = {
      lon: 37.6156,
      lat: 55.7522,
    };

    const fetchMock = global.fetch.mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(coord),
      })
    );

    const response = await getIpData();

    expect(fetchMock).toHaveBeenCalledWith("https://ipapi.co/json/");
    expect(response).toEqual(coord);
  });
});
