var listArray = [1, 5, 7 - 245, 7, 8, 90, 75, 92];
console.log("Массив до сортировки: " + listArray);
listArray.sort(function (e1, e2) {
    return e2 - e1;
});
console.log("После сортировки массива по убыванию: " + listArray);
console.log("Получите подмассив из первых 5 элементов:" + listArray.slice(0, 5));
console.log("Получите подмассив из последних 5 элементов:" + listArray.slice(listArray.length - 5));
var sum = listArray.reduce(function (previousValue, currentValue) {
    return previousValue + getEven(currentValue);
}, 0);
console.log("Сумма всех чётных чисел: " + sum);

function getEven(number) {
    if (number % 2 === 0) {
        return number;
    }
    return 0;
}

var emptyArray = [];
console.log("Пустой массив:" + emptyArray);

function getElements(number) {
    var newArray = [];
    for (var i = 1; i <= number; i++) {
        newArray.push(i);
    }
    return newArray;
}

var list100 = getElements(100);
console.log("Добавление 100 элементов в пустой массив: " + list100);

var evenPow = list100.filter(function (value) {
    return value % 2 === 0;
}).map(function (value) {
    return value * value;
});
console.log("Список квадратов четных чисел: " + evenPow);