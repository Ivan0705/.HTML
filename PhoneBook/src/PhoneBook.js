$(document).ready(function () {
    var table = $('#table');
    var tbody = $("#tbody");
    var $button = $('#add');
    var newSurname = $("#new-surname");
    var newName = $("#new-name");
    var newNumberPhone = $("#new-number-phone");
    var people = [];

    function buildTr() {
        tbody.html("");
        $.each(people, function (index) {
            var numberItem = index + 1;
            var tr = $("<tr>");
            tr.append("<td></td><td></td><td></td><td></td><td> <button type='button'>X</button></td>");
            tr.children().eq(0).text(numberItem);
            tr.children().eq(1).text(people[index].surname);
            tr.children().eq(2).text(people[index].name);
            tr.children().eq(3).text(people[index].numberPhone);
            table.append(tr);
        });
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