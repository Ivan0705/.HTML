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

var avgAge = _.reduce(people, function (val, p) {
    return val + p.age
}, 0) / people.length;
console.log("Средний возраст всех людей в этом списке: " + avgAge);

var newListPeople = _.chain(people)
    .map(function (p) {
        return _.extend({fullName: p.name + " " + p.lastName}, p);
    })
    .value();
console.log("Новый список людей: ", newListPeople);

var newList = [];
people.forEach(function (p) {
    p.fullName = p.name + " " + p.lastName;
    newList.push(p);
});
console.log("Новый список людей: ", newList);
