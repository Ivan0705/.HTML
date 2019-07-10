document.addEventListener("DOMContentLoaded", function () {
    var convertButton = document.querySelector(".converter");
    convertButton.addEventListener("click", function () {
        var celsiusResult = Number(document.getElementById("celsiusTemperature").value);
        var fahrenheitResult = document.getElementById("fahrenheitConverter");
        var kelvinResult = document.getElementById("kelvinConverter");

        if (isNaN(celsiusResult)) {
            alert("Нужно вводить только цифры!");
        } else {
            function getKelvin(celsiusResult) {
                return "Результат перевода по Кельвину: " + (celsiusResult + 273.15);
            }

            kelvinResult.innerHTML = getKelvin(celsiusResult);

            function getFahrenheit(celsiusResult) {
                return "Результат перевода по Фаренгейту: " + (celsiusResult * 1.8 + 32);
            }

            fahrenheitResult.innerHTML = getFahrenheit(celsiusResult);
        }
    });
});
