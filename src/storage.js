export function readStorage() {
  const items = JSON.parse(localStorage.getItem("city"));
  return items || [];
}

export function saveStorage(cityName) {
  const items = readStorage();

  if (items.includes(cityName)) {
    window.alert("Такой город уже добавлен!");
    return null;
  }

  if (items.length === 10) {
    items.shift();
  }

  items.push(cityName);
  localStorage.setItem("city", JSON.stringify(items));
}

export function showStorage(items, el) {
  el.innerHTML = `
        ${items.map((item) => `<li>${item}</li>`).join("")}
    `;
}
