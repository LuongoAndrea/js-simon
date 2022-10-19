// Descrizione:
/*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.

Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta,
i numeri che ha visto precedentemente, tramite una casella di input e un
bottone

Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali 
dei numeri da indovinare sono stati individuati.
*/
// const clock = setInterval(myFunction, 3000);
// function myFunction(){
    
// }
// clearInterval(clock)
let play = function(){
    function myFunction(){
        console.log('time:')

        const divNumeriBartime = document.getElementById('div-numeri-bartime'); 
        divNumeriBartime.classList.add('d-none');
        const form = document.getElementById('divForm'); 
        form.classList.remove('d-none');
        clearInterval(clock);
    }
    let invia = function(){
        const divContainer = document.getElementById('container');
        divContainer.innerHTML = ""
        let newNumber = document.getElementById('form').value;
        document.getElementById("form").value = "";
        numUtente.push(newNumber);

        if(numUtente.length == 5){
            btninvia.classList.add('disabled');
            for (let i = 0; i < 5; i++) {
                let numeroPc = parseInt(numeriComputer[i]);
                let numeroUtente = parseInt(numUtente[i]);
                
                if(numeroPc == numeroUtente){
                    const divNum = document.createElement('div');
                    divNum.classList.add('p-4');
                    divNum.classList.add('giusto');
                    const text = document.createElement('span');
                    // appendo contenuto span
                    let textNum = numeroUtente;
                    text.append(textNum);

                    // appendo span a div
                    divNum.append(text);
                    
                    divContainer.append(divNum);
                }
                else{
                    const divNum = document.createElement('div');
                    divNum.classList.add('p-4');
                    divNum.classList.add('sbagliato');
                    const text = document.createElement('span');
                    // appendo contenuto span
                    let textNum = numeroUtente;
                    text.append(textNum);

                    // appendo span a div
                    divNum.append(text);
                    
                    divContainer.append(divNum);
                }
            }
        }
        
    }
    btnPlay.classList.add('d-none')
    const numeriComputer = [];
    const numUtente = [];
    const divContainerPc = document.getElementById('numeri');
    divContainerPc.innerHTML = ""
    while (numeriComputer.length <= 4) {
        let x = Math.floor((Math.random() * 100) + 1);
        numeriComputer.push(x);
    }
    for (let i = 0; i < numeriComputer.length; i++) {
        const divNumComp = document.createElement('div');
        divNumComp.classList.add('p-4');
        // creo span
        const text = document.createElement('span');
        
        // appendo contenuto span
        text.append(numeriComputer[i]);

        // appendo span a div
        divNumComp.append(text);
        divContainerPc.append(divNumComp);
    }
    const barTime = document.getElementById('bar-time');
    barTime.classList.add('time');
    const clock = setInterval(myFunction, 10000);
    
    let btninvia = document.getElementById("invia");
    btninvia.addEventListener("click", invia);
    
}


let btnPlay = document.getElementById("play");
btnPlay.addEventListener("click", play);