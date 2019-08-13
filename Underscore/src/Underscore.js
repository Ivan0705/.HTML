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

var list = [];
people.forEach(function (p) {
    list[p.name] = {fullName: p.name + " " + p.lastName, name: p.name, lastName: p.lastName, age: p.age};

}, 0);
console.log(list);

var newField = _.map(people, function (p) {
    return {fullName: p.name + " " + p.lastName};
});

let array = [newField, people];
//a [people]=y;
//var c = y.concat(a);
console.log("Список людей: ", array);


var listPeople = [];
people.forEach(function (p) {
    var newList = {fullName: p.name + " " + p.lastName, name: p.name, lastName: p.lastName, age: p.age};
    listPeople.push(newList)

});
console.log("Список людей2: ", listPeople);

for (var i = 0; i < people.length; i++) {
    console.log("asd", {
        fullName: people[i].name + " " + people[i].lastName,
        name: people[i].name,
        lastName: people[i].lastName,
        age: people[i].age
    });
}
