document.addEventListener("DOMContentLoaded", function () {
    var todoButton = document.getElementById("todo-button");
    var newTodoText = document.getElementById("new-todo-text");
    var todoList = document.getElementById("todo-list");

    todoButton.addEventListener("click", function () {
        var newText = newTodoText.value;
        if (newText === "") {
            alert("Вы ничего не ввели!");
            return;
        }

        var li = document.createElement("li");
        li.innerHTML = "<span></span><button type='button'>X</button>";

        li.children[0].textContent = newText;
        li.children[1].addEventListener("click", function () {
            todoList.removeChild(li);
        });
        todoList.appendChild(li);
        newTodoText.value = "";
    });
});
