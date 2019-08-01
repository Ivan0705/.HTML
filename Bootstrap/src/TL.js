$(document).ready(function () {
    var addButton = $("#Add-Button");
    var todoNewText = $("#Todo-NewText");
    var todoText = $("#Todo-Text");

    addButton.click(function () {
        var newText = todoNewText.val();
        if (newText === "") {
            alert("Вы ничего не ввели!");
            return;
        }

        var li = $("<li>");
        li.html("<span></span><button  type='button' class='bg-danger text-white'>delete</button>");
        li.children().eq(0).text(newText);
        li.children().eq(1).click(function () {
            li.remove();
        });

        todoText.append(li);
        todoNewText.val("");
    });
});