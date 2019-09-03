var express = require('express');
var router = express.Router();

var contacts = [];
var id = 1;

router.get("/getContacts", function (req, res) {
    var term = (req.query.term || "").toUpperCase();
    var result = term === ""
        ? contacts :
        contacts.filter(function (c) {
            return c.name.toUpperCase().indexOf(term) >= 0 || c.surname.toUpperCase().indexOf(term) >= 0 || c.phone.toUpperCase().indexOf(term) >= 0
        });
    res.send(result);
});

router.post("/addContact", function (req, res) {
    var contact = req.body;
    contact.id = id;
    id++;
    contacts.push(contact);
    res.send({
        success: true,
        message: null
    });
});

router.post("/deleteContact", function (req, res) {
    var id = req.body.id;
    contacts = contacts.filter(function (c) {
        return c.id !== id;
    });
    res.send({
        success: true,
        message: null
    })
});

/* GET home page. */
router.get('/', function (req, res) {
    /*call model*/
    res.render('index');
});

module.exports = router;





