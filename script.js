function convertTemperature() {
  const temperatureInput = document.getElementById("temperature").value;
  const temperatureUnitSelect = document.getElementById("temperatureUnit");
  const selectedTemperatureUnit = temperatureUnitSelect.options[temperatureUnitSelect.selectedIndex].value;

  const unitSelect = document.getElementById("unit");
  const selectedUnit = unitSelect.options[unitSelect.selectedIndex].value;

  if (isNaN(temperatureInput)) {
    alert("Please enter a valid number for temperature.");
    return;
  }

  const temperature = parseFloat(temperatureInput);

  let convertedTemperature;
  let resultUnit;

  if (selectedTemperatureUnit === "celsius" && selectedUnit === "fahrenheit") {
    convertedTemperature = (temperature * 9/5) + 32;
    resultUnit = "Fahrenheit";
  } else if (selectedTemperatureUnit === "fahrenheit" && selectedUnit === "celsius") {
    convertedTemperature = (temperature - 32) * (5/9);
    resultUnit = "Celsius";
  } else if (selectedTemperatureUnit === "celsius" && selectedUnit === "kelvin") {
    convertedTemperature = temperature + 273.15;
    resultUnit = "Kelvin";
  } else if (selectedTemperatureUnit === "fahrenheit" && selectedUnit === "kelvin") {
    convertedTemperature = (temperature + 459.67) * (5/9);
    resultUnit = "Kelvin";
  } else {
    alert("Invalid unit conversion.");
    return;
  }

  document.getElementById("result").innerText = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${resultUnit}`;
}
