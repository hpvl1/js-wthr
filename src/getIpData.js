export async function getIpData() {
  try {
    const response = await fetch("https://ipapi.co/json/");

    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (e) {
    console.log(e);
  }
}
