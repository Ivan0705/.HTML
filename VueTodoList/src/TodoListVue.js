var app = new Vue({
    el: "#app",
    data: {
        title: "TodoList",
        items: [],
        newTodo: ""
    },
    methods: {
        addTodo: function () {
            if (this.newTodo === "") {
                return alert("Вы ничего не ввели!");
            }
            this.items.push({title: this.newTodo});
            this.newTodo = '';
        },
        removeTodo: function (item) {
            var index = this.items.indexOf(item);
            this.items.splice(index, 1)
        }
    }
});