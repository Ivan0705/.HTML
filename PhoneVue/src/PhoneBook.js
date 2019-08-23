var app = new Vue({
    el: "#app",
    data: {
        title: "Телефонный справочник",
        contacts: [],
        name: "",
        lastName: "",
        numberPhone: ""
    }, methods: {
        addTodo: function () {
            if (this.name !== "" && this.lastName !== "" && this.numberPhone !== "") {
                var dataContact = {
                    name: this.name,
                    lastName: this.lastName,
                    numberPhone: this.numberPhone
                };
                this.contacts.push(dataContact);
                this.name = "";
                this.lastName = "";
                this.numberPhone = "";
            } else {
                alert("Вы ничего не ввели!");
            }
        }, remove: function (index) {
            var indexToElement = this.contacts.indexOf(index);
            this.contacts.splice(index, 1);
        }
    }
});