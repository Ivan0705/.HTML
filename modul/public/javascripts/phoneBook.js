define(["jquery", "vue", "phoneBookService", "bootstrap"], function ($, Vue, PhoneBookService) {
    new Vue({
        el: "#app",
        data: {
            contacts: [],
            name: "",
            surname: "",
            phone: "",
            term: ""
        },
        created: function () {
            this.loadData();
        },
        methods: {
            addContact: function () {
                if (this.name === "" || this.surname === "" || this.phone === "") {
                    alert("Вы ничего не ввели!");
                    return;
                }
                var self = this;
                var data = {
                    name: this.name,
                    surname: this.surname,
                    phone: this.phone
                };
                PhoneBookService.addContact(data).done(function (response) {
                    if (!response.success) {
                        alert(response.message);
                        return;
                    }
                    self.name = "";
                    self.surname = "";
                    self.phone = "";
                    self.loadData();

                });
            },
            deleteContact: function (c) {
                var self = this;
                PhoneBookService.deleteContact(c.id).done(function (response) {
                    if (!response.success) {
                        alert(response.message);
                        return;
                    }
                    self.loadData();
                });
            },
            loadData: function () {
                var self = this;
                PhoneBookService.getContacts(this.term).done(function (contacts) {
                    self.contacts = contacts;
                });
            }, search: function () {
                this.loadData();
            }
        }
    });
});


