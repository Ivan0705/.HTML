document.addEventListener("DOMContentLoaded", function () {
    var convertButton = document.querySelector(".converter");

    /*   var enterValue = document.getElementById("celsiusTemperature");
       enterValue.value = " ";
       function isEmpty(str) {
           return (typeof str === "undefined" || str === null || str === "");
       }
       if (isEmpty(enterValue.value)) {
           prompt("Вы не ввели ничего!");
       } */
    convertButton.addEventListener("click", function () {
        var celsiusResult = document.getElementById("celsiusTemperature").value;
        var fahrenheitResult = document.getElementById("fahrenheitConverter");
        var kelvinResult = document.getElementById("kelvinConverter");

        if (/[^[0-9 .]/.test(celsiusResult) || /^undefined$/.test(celsiusResult)) {
            alert("Нужно вводить только цифры!");
        } else {
            kelvinResult.innerHTML = "Результат перевода по Кельвину: " + (celsiusResult * 1 + 273.15);
            fahrenheitResult.innerHTML = "Результат перевода по Фаренгейту: " + (celsiusResult * 1.8 + 32);
        }
    });
});
