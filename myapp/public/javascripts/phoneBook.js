var service = new Vue({
        el: "",
        data: {},
        methods: {
            post(url, data) {
                return $.post({
                    url: url,
                    data: JSON.stringify(data),
                    contentType: "application/json"
                });
            },
            get(url, data) {
                return $.get(url, data);
            }
        }
    }
);

new Vue({
    el: "#app",
    data: {
        contacts: [],
        name: "",
        surname: "",
        phone: "",
        term: ""
    }, created: function () {
        this.loadData();
    }, methods: {
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
            service.post("/addContact", data).done(function (response) {
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
            var data = {id: c.id};
            service.post("/deleteContact", data).done(function (response) {
                if (!response.success) {
                    alert(response.message);
                    return;
                }
                self.loadData();
            });
        },
        loadData: function () {
            var self = this;
            var data = {term: this.term};
            service.get("/getContacts", data).done(function (contacts) {
                self.contacts = contacts;
            });
        },
        search: function () {
            this.loadData();
        }
    }
});