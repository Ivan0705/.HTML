document.addEventListener("DOMContentLoaded", function () {
    var convertButton = document.querySelector(".converter");

    function getFahrenheit(enterValue) {
        return enterValue * 1.8 + 32;
    }

    function getKelvin(enterValue) {
        return enterValue + 273.15;
    }

    convertButton.addEventListener("click", function () {
        var newText = document.getElementById("celsiusTemperature").value;
        var celsiusResult = Number(newText);
        var fahrenheitResult = document.getElementById("fahrenheitConverter");
        var kelvinResult = document.getElementById("kelvinConverter");

        if (isNaN(celsiusResult) || newText === "") {
            alert("Нужно вводить только цифры!");
        } else {
            kelvinResult.innerHTML = "Результат перевода по Кельвину: " + getKelvin(celsiusResult).toFixed(2);
            fahrenheitResult.innerHTML = "Результат перевода по Фаренгейту: " + getFahrenheit(celsiusResult).toFixed(2);
        }
    });
});
