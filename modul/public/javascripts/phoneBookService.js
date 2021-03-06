define(["ajax"], function (Ajax) {
    return {
        addContact: function (contact) {
            return Ajax.post("/addContact", contact)
        },
        deleteContact: function (id) {
            return Ajax.post("/deleteContact", {id: id})
        },
        getContacts: function (term) {
            var data = {term: term};
            return Ajax.get("/getContacts", data);
        }
    };
});