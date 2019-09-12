import "bootstrap/dist/css/bootstrap.css";
import "../css/style.scss";

import Vue from "vue";
import "bootstrap";
import PhoneBookComponent from "./PhoneBook.vue";

new Vue({
    el: "#app",
    components: {"phone-book": PhoneBookComponent}
});



