import { getIpData } from "./getIpData";

describe("get data by ip", () => {
  beforeAll(() => {
    global.fetch = jest.fn();
  });

  it("it's a function", () => {
    expect(getIpData).toBeInstanceOf(Function);
  });

  it("return user location coord", async () => {
    const coord = {
      lon: 37.6156,
      lat: 55.7522,
    };

    global.fetch.mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(coord),
      })
    );

    const response = await getIpData();

    expect(global.fetch).toHaveBeenCalledWith("https://ipapi.co/json/");
    expect(response).toEqual(coord);
  });

  // it("the fetch fails with an error", async () => {
  //   try {
  //     await getIpData();
  //   } catch (e) {
  //     expect(e).toMatch('error');
  //   }
  //   expect.assertions(1);
  // });

});
