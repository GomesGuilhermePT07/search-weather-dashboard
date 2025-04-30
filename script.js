const apiKey= "e771f2e68b30a9e4546a70a63ed50bf9";

async function getWeather() {
    const city = document.getElementById("city-input").value.trim();
    const weatherBox = document.getElementById("weather-box");
  
    if (!city) {
      alert("Escreve o nome da cidade!");
      return;
    }
  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&lang=pt&appid=${apiKey}`;
  
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Cidade não encontrada!");
  
      const data = await res.json();
  
      const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  
      weatherBox.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <img src="${icon}" alt="Ícone clima">
        <p><strong>${Math.round(data.main.temp)}°C</strong> - ${data.weather[0].description}</p>
      `;
    } catch (error) {
      weatherBox.innerHTML = `<p style="color: #f66;">Erro: ${error.message}</p>`;
    }
  }