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
        post: function (url, data) {
            return $.post({
                url: url,
                data: JSON.stringify(data),
                contentType: "application/json"
            });
        },
        get: function (url, data) {
            return $.get(url, data);
        },
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
            this.post("/addContact", data).done(function (response) {
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
            this.post("/deleteContact", data).done(function (response) {
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
            this.get("/getContacts", data).done(function (contacts) {
                self.contacts = contacts;
            });
        }
        ,
        search: function () {
            this.loadData();
        }
    }
});