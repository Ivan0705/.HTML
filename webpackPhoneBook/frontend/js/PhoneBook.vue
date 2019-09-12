<template>
    <div class="container">
        <div class="col-6 col-sm-12">
            <h1>Телефонный справочник</h1>
            <form class="form-inline  mb-4">
                <label>
                    <input class="form-control mr-sm-2" placeholder="Имя *" v-model="name">
                </label>
                <label>
                    <input class="form-control mr-sm-2" placeholder="Фамилия *" v-model="surname">
                </label>
                <label>
                    <input class="form-control mr-sm-2" placeholder="Телефон *" v-model="phone">
                </label>
                <button @click="addContact" type="button" class="btn btn-success">Добавить</button>
            </form>
            <form class="form-inline  mb-4">
                <label>
                    <input class="form-control mr-sm-2" placeholder="Поиск *" v-model="term">
                </label>
                <button @click="search" type="button" class="btn btn-success">Поиск</button>
            </form>

            <table class="table table-bordered">
                <thead class="thead-dark">
                <tr>
                    <th>№</th>
                    <th>Имя</th>
                    <th>Фамилия</th>
                    <th>Номер телефона</th>
                    <th></th>
                </tr>
                </thead>
                <tr v-cloak v-for="(c, index) in contacts">
                    <td v-text="index+1"></td>
                    <td v-text="c.name"></td>
                    <td v-text="c.surname"></td>
                    <td v-text="c.phone"></td>
                    <td>
                        <button class="btn btn-danger" type="button" @click="deleteContact(c)">X</button>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    import PhoneBookService from "./phoneBookService";
    export default {
        data() {
            return {
                contacts: [],
                name: "",
                surname: "",
                phone: "",
                term: ""
            }
        },
        created: function () {
            this.loadData();
        },
        methods: {
            addContact() {
                if (this.name === "" || this.surname === "" || this.phone === "") {
                    alert("Вы ничего не ввели!");
                    return;
                }
                const data = {
                    name: this.name,
                    surname: this.surname,
                    phone: this.phone
                };
                PhoneBookService.addContact(data).done(response => {
                    if (!response.success) {
                        alert(response.message);
                        return;
                    }
                    this.name = "";
                    this.surname = "";
                    this.phone = "";
                    this.loadData();

                });
            },
            deleteContact(c) {
                PhoneBookService.deleteContact(c.id).done(response => {
                    if (!response.success) {
                        alert(response.message);
                        return;
                    }
                    this.loadData();
                });
            },
            loadData() {
                PhoneBookService.getContacts(this.term).done(contacts => {
                    this.contacts = contacts;
                });
            },
            search() {
                this.loadData();
            }
        }
    };
</script>