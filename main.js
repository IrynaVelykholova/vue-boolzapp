"use strict"

Vue.createApp({
    data() {
        return {
            listaContatti: [
                {
                name: "Michele",
                avatar: "_1",
                messages: [
                    {
                    date: "10/01/2020 15:30:55",
                    message: "Hai portato a spasso il cane?",
                    status: "sent",
                    }, {
                    date: "10/01/2020 15:50:00",
                    message: "Ricordati di dargli da mangiare",
                    status: "sent",
                    }, {
                    date: "10/01/2020 16:15:22",
                    message: "Tutto fatto!",
                    status: "received",
                    },
                ],
                }, {
                name: "Fabio",
                avatar: "_2",
                messages: [
                    {
                    date: "20/03/2020 16:30:00",
                    message: "Ciao come stai?",
                    status: "sent",
                    }, {
                    date: "20/03/2020 16:30:55",
                    message: "Bene grazie! Stasera ci vediamo?",
                    status: "received",
                    }, {
                    date: "20/03/2020 16:35:00",
                    message: "Mi piacerebbe ma devo andare a fare la spesa.",
                    status: "received",
                    },
                ],
                }, {
                name: "Samuele",
                avatar: "_3",
                messages: [
                    {
                    date: "28/03/2020 10:10:40",
                    message: "La Marianna va in campagna",
                    status: "received",
                    }, {
                    date: "28/03/2020 10:20:10",
                    message: "Sicuro di non aver sbagliato chat?",
                    status: "sent",
                    }, {
                    date: "28/03/2020 16:15:22",
                    message: "Ah scusa!",
                    status: "received",
                    },
                ],
                }, {
                name: "Luisa",
                avatar: "_4",
                messages: [
                    {
                    date: "10/01/2020 15:30:55",
                    message: "Lo sai che ha aperto una nuova pizzeria?",
                    status: "sent",
                    }, {
                    date: "10/01/2020 15:50:00",
                    message: "Si, ma preferirei andare al cinema",
                    status: "received",
                    },
                ],
                },
            ],
            //creo contatto corrente all'avvio pagina
            contattoCorrente : null,

            //mio messaggio
            messaggioInviato: {
                message: "",
                status: "sent",
            },

            //risposta
            messaggioRicevuto: {
                message: "ok",
                status: "received",
            },
        } 
    },
methods: {
    //creo funzione che al click riconosce il mio contatto
    userClick(contatto) {
        this.contattoCorrente = contatto;
        console.log(this.contattoCorrente);
    },

    invioMessaggio(containerMessaggio){
        //clone per eliminare la reattività
        const inviato = {...this.messaggioInviato};

        //push messaggio inviato
        containerMessaggio.push(inviato);

        //clone della risposta 
        const risposta = {...this.messaggioRicevuto};

        //push e timer risposta
        setTimeout(function() {
            containerMessaggio.push(risposta)
        }, 1000)
            
        //svuoto input del messaggio
        this.messaggioInviato.message = "" 
        },
    },
//con questa funzione do un valore all'avvio della pagina
beforeMount() {
    this.contattoCorrente = this.listaContatti[0]
},
}).mount("#app");


``