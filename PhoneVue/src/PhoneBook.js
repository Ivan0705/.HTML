var app = new Vue({
    el: "#app",
    data: {
        title: "hi!",
        items: [],
        name: "",
        lastName: ""
    }, methods: {
        addTodo: function () {
            if (this.name !== "") {
                var d = {name: this.name, lastName: this.lastName};
                this.items.push(d);
                this.name = "";
                this.lastName = "";
            } else {
                alert("Вы ничего не ввели!");
            }

        }, remove: function (index) {
            var indexToElement = this.items.indexOf(index);
            this.items.splice(index, 1);
        }
    }
});