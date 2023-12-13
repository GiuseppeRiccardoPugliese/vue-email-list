/*
Descrizione:
Attraverso l’apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
*/
const { createApp } = Vue;

createApp({
    data() {
        return {
            mailList: []
        }
    },
    methods: {

    },
    mounted() {
        for (let i = 0; i < 10; i++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((risposta) => {
                    console.log(risposta.data.response);
                    this.mailList.push(risposta.data.response);
                });
        }
    }
}).mount("#contenitore");