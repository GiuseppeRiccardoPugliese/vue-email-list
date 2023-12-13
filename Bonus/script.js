/*
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
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