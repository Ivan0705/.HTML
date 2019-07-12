document.addEventListener("DOMContentLoaded", function () {
    var todoButton = document.getElementById("todo-button");

    todoButton.addEventListener("click", function () {
        var newTodoText = document.getElementById("new-todo-text").value;
        var todoList = document.getElementById("todo-list");
        if (newTodoText === "") {
            alert("Вы ничего не ввели!");
            return;
        }

        var li = document.createElement("li");
        li.innerHTML = "<span></span><button type='button'>X</button>";

        li.children[0].textContent = newTodoText;
        li.children[1].addEventListener("click", function () {
            todoList.removeChild(li);
        });
        todoList.appendChild(li);
    });
});

