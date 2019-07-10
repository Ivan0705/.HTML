document.addEventListener("DOMContentLoaded", function () {
    var convertButton = document.querySelector(".converter");
    convertButton.addEventListener("click", function () {
        var celsiusResult = Number(document.getElementById("celsiusTemperature").value);
        var fahrenheitResult = document.getElementById("fahrenheitConverter");
        var kelvinResult = document.getElementById("kelvinConverter");

        if (isNaN(celsiusResult)) {
            alert("Нужно вводить только цифры!");
        } else {
            function getKelvin(number) {
                return "Результат перевода по Кельвину: " + (number + 273.15);
            }

            kelvinResult.innerHTML = getKelvin(celsiusResult);

            function getFahrenheit(number) {
                return "Результат перевода по Фаренгейту: " + (number * 1.8 + 32);
            }

            fahrenheitResult.innerHTML = getFahrenheit(celsiusResult);
        }
    });
});
