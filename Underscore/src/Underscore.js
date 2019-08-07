var people = [{name: "Ivan", lastName: "Popov", age: 20}, {name: "Petr", lastName: "Sidorov", age: 28},
    {name: "Semen", lastName: "Karliner", age: 17}, {name: "Svetlana", lastName: "Mishina", age: 15},
    {name: "Olga", lastName: "Shin", age: 25}, {name: "Maria", lastName: "Popova", age: 29},
    {name: "Oscar", lastName: "Pistorius", age: 15}, {name: "Maria", lastName: "Shisova", age: 39},
    {name: "Anna", lastName: "Petrova", age: 23}];
console.log(people);

var filteredPeople = _.chain(people)
    .filter(function (p) {
        return p.age >= 20 && p.age <= 30;
    })
    .sortBy("age")
    .value();
console.log("Список людей в возрасте от 20 до 30 лет после сортировки по возрастанию: ", filteredPeople);

var avgAge = _.chain(people)
    .reduce(function (val, p) {
        return val + p.age / people.length;
    }, 0)
    .value();


console.log("Средний возраст всех людей: " + avgAge);

var people2 = [{
    name: "Ivan",
    lastName: "Popov",
    fullName: "Ivan Popov",
    age: 20
},
    {
        name: "Petr",
        lastName: "Sidorov",
        fullName: "Petr Sidorov",
        age: 28
    },
    {
        name: "Semen",
        lastName: "Karliner",
        fullName: "Semen Karliner",
        age: 17
    },
    {
        name: "Svetlana",
        lastName: "Mishina",
        fullName: "Svetlana Mishina",
        age: 15
    },
    {
        name: "Olga",
        lastName: "Shin",
        fullName: "Olga Shin",
        age: 25
    },
    {
        name: "Maria",
        lastName: "Popova",
        fullName: "Maria Popova",
        age: 29
    },
    {
        name: "Oscar",
        lastName: "Pistorius",
        fullName: "Oscar Pistorius",
        age: 15
    }, {
        name: "Maria",
        lastName: "Shishova",
        fullName: "Maria Shishova",
        age: 39
    },
    {
        name: "Anna",
        lastName: "Petrova",
        fullName: "Anna Petrova",
        age: 23
    }];

console.log("Новый спосок людей: ", people2);
