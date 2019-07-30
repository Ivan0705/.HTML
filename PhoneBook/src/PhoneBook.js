$(document).ready(function () {
    var table = $('#table1');
    var tbody = $("#tbody1");
    var $button = $('#add');
    var newSurname = $("#new-surname");
    var newName = $("#new-name");
    var newNumberPhone = $("#new-number-phone");
    var people = [];

    function buildTr() {
        tbody.html("");
        for (var i = 0; i < people.length; i++) {
            var numberItem = i + 1;
            table.append("<tr><td>" + numberItem + "</td><td>" + people[i].surname + "</td><td>" + people[i].name + "</td><td>" + people[i].numberPhone + "</td><td> <button  >X</button></td></tr>");
        }
    }

    $button.click(function () {
        var userSurname = newSurname.val();
        var userName = newName.val();
        var userNumberPhone = newNumberPhone.val();

        if (userNumberPhone === "" && userSurname === "" && userName === "") {
            alert("Все поля не заполнены!");
            return;
        } else if (userNumberPhone === "") {
            alert("Не ввели номер телефона!");
            return;
        } else if (userName === "") {
            alert("Не ввели имя!");
            return;
        } else if (userSurname === "") {
            alert("Не ввели фамилию!");
            return;
        }

        table.show();
        var person = {
            name: newName.val(),
            surname: newSurname.val(),
            numberPhone: newNumberPhone.val()
        };

        people.push(person);
        buildTr();

        newName.val("");
        newSurname.val("");
        newNumberPhone.val("");
    });

    table.click(function (event) {
        var element = event.target.closest("tr");
        var elementToIndex = table.find("tr").index(element);
        people.splice(elementToIndex - 1, 1);
        buildTr();
    });
});