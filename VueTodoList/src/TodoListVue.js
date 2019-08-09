var app = new Vue({
    el: "#app",
    data: {
        title: "TodoList",
        todos: [],
        newTodo: ""
    },
    methods: {
        addTodo: function () {
            if (this.newTodo === "") {
                return alert("Вы ничего не ввели!");
            }
            this.todos.push({title: this.newTodo});
            this.newTodo = '';
        },
        removeTodo: function (todo) {
            var index = this.todos.indexOf(todo);
            this.todos.splice(index, 1)
        }
    }
});