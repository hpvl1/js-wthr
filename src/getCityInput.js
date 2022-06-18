export async function getCityInput(cityName) {
  const MY_KEY = "56f47affbfbb9ca1677d4f24e14ea341";

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=ru&units=metric&appid=${MY_KEY}`
    );

    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error(error);
  }
}
