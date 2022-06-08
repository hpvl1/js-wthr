export async function getCityWeather(ipData) {
  const MY_KEY = "56f47affbfbb9ca1677d4f24e14ea341";

  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${ipData.latitude}&lon=${ipData.longitude}&appid=${MY_KEY}`
    );

    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (e) {
    console.log(e);
  }
}
